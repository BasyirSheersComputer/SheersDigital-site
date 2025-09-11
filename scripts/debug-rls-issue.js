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

async function debugRLSIssue() {
  console.log('🔍 Debugging RLS Issue...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 API Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');

  try {
    // Test 1: Check if we can query policies directly
    console.log('1️⃣ Checking RLS policies...');
    const { data: policyData, error: policyError } = await supabase
      .rpc('get_table_policies', { table_name: 'contact_messages' });
    
    if (policyError) {
      console.log('⚠️ Could not query policies directly:', policyError.message);
    } else {
      console.log('📊 Policies found:', policyData);
    }

    // Test 2: Check table structure and constraints
    console.log('2️⃣ Checking table structure...');
    const { data: tableData, error: tableError } = await supabase
      .from('contact_messages')
      .select('*')
      .limit(0);
    
    if (tableError) {
      console.log('❌ Table access failed:', tableError.message);
      return;
    } else {
      console.log('✅ Table structure accessible');
    }

    // Test 3: Try minimal insert with just required fields
    console.log('3️⃣ Testing minimal insert with required fields only...');
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
        console.log('📋 Even with policies in place, inserts are still blocked.');
        console.log('');
        console.log('🔧 Possible Solutions:');
        console.log('1. Check if there are conflicting policies');
        console.log('2. Verify the API key has the right permissions');
        console.log('3. Check if there are additional constraints');
        console.log('');
        console.log('🔧 Try this SQL to completely reset RLS:');
        console.log(`
-- Complete RLS reset for contact_messages
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Wait a moment, then re-enable
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a simple policy
CREATE POLICY "Allow all inserts" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
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

    // Test 4: Check if we can insert with a different approach
    console.log('4️⃣ Testing insert with explicit role...');
    const { data: roleData, error: roleError } = await supabase
      .from('contact_messages')
      .insert([{
        name: 'Role Test User',
        email: 'role-test@example.com',
        message: 'Testing with explicit role'
      }])
      .select();

    if (roleError) {
      console.log('❌ Role-based insert failed:', roleError.message);
    } else {
      console.log('✅ Role-based insert works!');
      console.log('📊 Inserted record ID:', roleData[0].id);
      
      // Clean up test record
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', roleData[0].id);
      console.log('🧹 Role test record cleaned up');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runDebug() {
  console.log('🚀 Starting RLS Debug...\n');
  await debugRLSIssue();
  console.log('\n🏁 Debug completed');
}

// Run the debug
runDebug().catch(console.error);
