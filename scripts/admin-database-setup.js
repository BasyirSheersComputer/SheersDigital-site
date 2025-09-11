import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Supabase configuration
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://nbupfkhtkoggqnyvpdfl.supabase.co';
const supabaseServiceKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

// Check if service key is loaded
if (!supabaseServiceKey) {
  console.error('❌ VITE_SUPABASE_SERVICE_ROLE_KEY not found in environment variables');
  console.error('⚠️  SECURITY NOTICE: Service role key has been removed for security reasons');
  console.error('📋 For admin operations, temporarily add the service key to .env');
  console.error('🔒 Remember to remove it after use to prevent leaks');
  process.exit(1);
}

// Create admin client with service role key
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

async function testAdminAccess() {
  console.log('🔍 Testing Admin Access...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 Service Key (first 20 chars):', supabaseServiceKey.substring(0, 20) + '...');
  console.log('');

  try {
    // Test 1: Check if we can access the database with admin privileges
    console.log('1️⃣ Testing admin database access...');
    const { data: adminData, error: adminError } = await supabaseAdmin
      .from('contact_messages')
      .select('count')
      .limit(1);
    
    if (adminError) {
      console.log('❌ Admin database access failed:', adminError.message);
      return;
    } else {
      console.log('✅ Admin database access works');
    }

    // Test 2: Try to insert with admin privileges
    console.log('2️⃣ Testing admin insert...');
    const testData = {
      name: 'Admin Test User',
      email: 'admin-test@example.com',
      message: 'Testing admin insert privileges'
    };

    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('contact_messages')
      .insert([testData])
      .select();

    if (insertError) {
      console.log('❌ Admin insert failed:', insertError.message);
    } else {
      console.log('✅ Admin insert works!');
      console.log('📊 Inserted record ID:', insertData[0].id);
      
      // Clean up test record
      await supabaseAdmin
        .from('contact_messages')
        .delete()
        .eq('id', insertData[0].id);
      console.log('🧹 Admin test record cleaned up');
    }

    // Test 3: Check current policies
    console.log('3️⃣ Checking current RLS policies...');
    const { data: policyData, error: policyError } = await supabaseAdmin
      .rpc('get_table_policies', { table_name: 'contact_messages' });
    
    if (policyError) {
      console.log('⚠️ Could not query policies directly:', policyError.message);
    } else {
      console.log('📊 Current policies:', policyData);
    }

    console.log('');
    console.log('🎉 Admin access is working!');
    console.log('📋 You can now run database administration tasks.');

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runAdminTest() {
  console.log('🚀 Starting Admin Access Test...\n');
  await testAdminAccess();
  console.log('\n🏁 Admin test completed');
}

// Run the admin test
runAdminTest().catch(console.error);
