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

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

async function testWithoutRLS() {
  console.log('🔍 Testing without RLS constraints...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 API Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');

  try {
    // Test 1: Check if we can query the table structure
    console.log('1️⃣ Testing table structure access...');
    const { data: structureData, error: structureError } = await supabase
      .from('contact_messages')
      .select('*')
      .limit(0);
    
    if (structureError) {
      console.log('❌ Table structure access failed:', structureError.message);
      return;
    } else {
      console.log('✅ Table structure accessible');
    }

    // Test 2: Try to insert with the exact same data structure as the form
    console.log('2️⃣ Testing insert with exact form data structure...');
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+60123456789',
      company: 'Test Company',
      service: 'General Inquiry',
      message: 'This is a test contact form submission'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('contact_messages')
      .insert([formData])
      .select();

    if (insertError) {
      console.log('❌ Insert failed:', insertError.message);
      console.log('🔍 Error code:', insertError.code);
      console.log('🔍 Error details:', insertError.details);
      console.log('🔍 Error hint:', insertError.hint);
      
      // Check if it's a data validation error
      if (insertError.message.includes('violates check constraint')) {
        console.log('');
        console.log('🚨 Data Validation Error!');
        console.log('📋 The issue is with the data structure, not RLS policies.');
        console.log('🔧 Check the table constraints and data types.');
      } else if (insertError.message.includes('row-level security')) {
        console.log('');
        console.log('🚨 RLS Policy Error!');
        console.log('📋 The RLS policies are still blocking inserts.');
        console.log('🔧 This suggests a deeper Supabase configuration issue.');
      } else {
        console.log('');
        console.log('🚨 Unknown Error!');
        console.log('📋 The error is not related to RLS or data validation.');
        console.log('🔧 Check the Supabase project configuration.');
      }
    } else {
      console.log('✅ Insert successful!');
      console.log('📊 Inserted record ID:', insertData[0].id);
      
      // Clean up test record
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', insertData[0].id);
      console.log('🧹 Test record cleaned up');
    }

    // Test 3: Check if we can insert with minimal data
    console.log('3️⃣ Testing insert with minimal required data...');
    const minimalData = {
      name: 'Minimal Test',
      email: 'minimal@example.com',
      message: 'Minimal test message'
    };

    const { data: minimalInsertData, error: minimalError } = await supabase
      .from('contact_messages')
      .insert([minimalData])
      .select();

    if (minimalError) {
      console.log('❌ Minimal insert failed:', minimalError.message);
    } else {
      console.log('✅ Minimal insert successful!');
      console.log('📊 Inserted record ID:', minimalInsertData[0].id);
      
      // Clean up test record
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', minimalInsertData[0].id);
      console.log('🧹 Minimal test record cleaned up');
    }

    // Test 4: Check the current user context
    console.log('4️⃣ Checking current user context...');
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError) {
      console.log('⚠️ Could not get user context:', userError.message);
    } else {
      console.log('👤 Current user:', user ? 'Authenticated' : 'Anonymous');
      console.log('🔑 User ID:', user?.id || 'N/A');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runTest() {
  console.log('🚀 Starting RLS Bypass Test...\n');
  await testWithoutRLS();
  console.log('\n🏁 Test completed');
}

// Run the test
runTest().catch(console.error);
