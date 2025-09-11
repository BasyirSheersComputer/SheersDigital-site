import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Supabase configuration
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://nbupfkhtkoggqnyvpdfl.supabase.co';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// Check if API key is loaded
if (!supabaseAnonKey) {
  console.error('❌ VITE_SUPABASE_ANON_KEY not found in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function diagnoseTableStructure() {
  console.log('🔍 Diagnosing Table Structure and Policies...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 API Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');
  
  try {
    // Test 1: Check if table exists and get its structure
    console.log('1️⃣ Checking table structure...');
    const { data: tableData, error: tableError } = await supabase
      .from('contact_messages')
      .select('*')
      .limit(0);
    
    if (tableError) {
      console.log('❌ Table access failed:', tableError.message);
      return;
    } else {
      console.log('✅ Table exists and is accessible');
    }
    
    // Test 2: Check current policies using a direct query
    console.log('2️⃣ Checking current RLS policies...');
    const { data: policyData, error: policyError } = await supabase
      .rpc('get_table_policies', { table_name: 'contact_messages' });
    
    if (policyError) {
      console.log('⚠️ Could not query policies directly:', policyError.message);
      console.log('📋 This is normal - we\'ll check with a different approach');
    } else {
      console.log('📊 Current policies:', policyData);
    }
    
    // Test 3: Try to insert with minimal data
    console.log('3️⃣ Testing minimal insert...');
    const minimalData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('contact_messages')
      .insert([minimalData])
      .select();

    if (insertError) {
      console.log('❌ Minimal insert failed:', insertError.message);
      console.log('🔍 Error code:', insertError.code);
      console.log('🔍 Error details:', insertError.details);
      console.log('🔍 Error hint:', insertError.hint);
      
      // Check if it's specifically an RLS error
      if (insertError.message.includes('row-level security')) {
        console.log('');
        console.log('🚨 RLS Policy Issue Confirmed!');
        console.log('📋 The Row Level Security policy is blocking anonymous inserts.');
        console.log('');
        console.log('🔧 CRITICAL: The SQL script may not have been applied correctly.');
        console.log('');
        console.log('📋 Please verify in Supabase Dashboard:');
        console.log('1. Go to Authentication → Policies');
        console.log('2. Find contact_messages table');
        console.log('3. Check if there is an INSERT policy for anon users');
        console.log('');
        console.log('🔧 If no policy exists, run this EXACT SQL:');
        console.log(`
-- CRITICAL: This must be run in Supabase SQL Editor
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert messages" ON contact_messages;

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
        `);
      }
    } else {
      console.log('✅ Minimal insert works!');
      console.log('📊 Inserted record ID:', insertData[0].id);
      
      // Clean up test record
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', insertData[0].id);
      console.log('🧹 Test record cleaned up');
    }
    
    // Test 4: Check if we can query existing records
    console.log('4️⃣ Testing record count...');
    const { count, error: countError } = await supabase
      .from('contact_messages')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.log('❌ Count query failed:', countError.message);
    } else {
      console.log('✅ Count query works - Total records:', count);
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runDiagnosis() {
  console.log('🚀 Starting Table Structure Diagnosis...\n');
  await diagnoseTableStructure();
  console.log('\n🏁 Diagnosis completed');
}

// Run the diagnosis
runDiagnosis().catch(console.error);
