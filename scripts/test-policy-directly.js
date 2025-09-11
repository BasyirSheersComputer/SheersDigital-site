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

async function testPolicyDirectly() {
  console.log('🔍 Testing RLS policy directly...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 API Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');
  
  try {
    // Test 1: Check if we can query the table (should work)
    console.log('1️⃣ Testing SELECT permission...');
    const { data: selectData, error: selectError } = await supabase
      .from('contact_messages')
      .select('count')
      .limit(1);
    
    if (selectError) {
      console.log('❌ SELECT failed:', selectError.message);
    } else {
      console.log('✅ SELECT works');
    }
    
    // Test 2: Try to insert a simple record
    console.log('2️⃣ Testing INSERT permission...');
    const testData = {
      name: 'Direct Policy Test',
      email: 'policy-test@example.com',
      service: 'Policy Test',
      message: 'Testing RLS policy directly'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (insertError) {
      console.log('❌ INSERT failed:', insertError.message);
      console.log('🔍 Error details:', insertError);
      
      // Check if it's specifically an RLS error
      if (insertError.message.includes('row-level security')) {
        console.log('');
        console.log('🚨 RLS Policy Issue Detected!');
        console.log('📋 The Row Level Security policy is blocking anonymous inserts.');
        console.log('');
        console.log('🔧 Solution: Run this SQL in Supabase SQL Editor:');
        console.log(`
-- Disable RLS temporarily
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Authenticated users can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert messages" ON contact_messages;

-- Re-enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create new policies
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
      console.log('✅ INSERT works!');
      console.log('📊 Inserted record ID:', insertData[0].id);
      
      // Clean up test record
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', insertData[0].id);
      console.log('🧹 Test record cleaned up');
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runDirectTest() {
  console.log('🚀 Starting Direct Policy Test...\n');
  await testPolicyDirectly();
  console.log('\n🏁 Test completed');
}

// Run the direct test
runDirectTest().catch(console.error);
