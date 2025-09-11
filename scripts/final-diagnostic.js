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

async function finalDiagnostic() {
  console.log('🔍 Final Diagnostic - Supabase Configuration...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 API Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');

  try {
    // Test 1: Check if we can access the database at all
    console.log('1️⃣ Testing basic database access...');
    const { data: basicData, error: basicError } = await supabase
      .from('contact_messages')
      .select('count')
      .limit(1);
    
    if (basicError) {
      console.log('❌ Basic database access failed:', basicError.message);
      console.log('🔍 This suggests a fundamental connection issue');
      return;
    } else {
      console.log('✅ Basic database access works');
    }

    // Test 2: Check if we can query existing data
    console.log('2️⃣ Testing data query...');
    const { data: queryData, error: queryError } = await supabase
      .from('contact_messages')
      .select('*')
      .limit(1);
    
    if (queryError) {
      console.log('❌ Data query failed:', queryError.message);
    } else {
      console.log('✅ Data query works');
      console.log('📊 Found', queryData.length, 'records');
    }

    // Test 3: Try to insert with a completely different approach
    console.log('3️⃣ Testing alternative insert approach...');
    
    // Try using the REST API directly
    const insertPayload = {
      name: 'Direct API Test',
      email: 'direct-api@example.com',
      message: 'Testing direct API insert'
    };

    const { data: insertData, error: insertError } = await supabase
      .from('contact_messages')
      .insert([insertPayload])
      .select();

    if (insertError) {
      console.log('❌ Alternative insert failed:', insertError.message);
      console.log('🔍 Error code:', insertError.code);
      console.log('🔍 Error details:', insertError.details);
      console.log('🔍 Error hint:', insertError.hint);
      
      // Check if it's specifically an RLS error
      if (insertError.message.includes('row-level security')) {
        console.log('');
        console.log('🚨 RLS Policy Issue Confirmed!');
        console.log('📋 The RLS policies are still blocking inserts despite being correctly configured.');
        console.log('');
        console.log('🔧 Possible Solutions:');
        console.log('1. Check if the API key has the correct permissions');
        console.log('2. Verify the Supabase project settings');
        console.log('3. Check if there are any additional security settings');
        console.log('');
        console.log('🔧 Try this SQL to completely disable RLS temporarily:');
        console.log(`
-- Temporarily disable RLS to test
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Test insert (this should work)
INSERT INTO contact_messages (name, email, message) VALUES ('Test', 'test@example.com', 'Test message');

-- Re-enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
        `);
      }
    } else {
      console.log('✅ Alternative insert works!');
      console.log('📊 Inserted record ID:', insertData[0].id);
      
      // Clean up test record
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', insertData[0].id);
      console.log('🧹 Test record cleaned up');
    }

    // Test 4: Check the API key permissions
    console.log('4️⃣ Checking API key permissions...');
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError) {
      console.log('⚠️ Could not get user context:', userError.message);
    } else {
      console.log('👤 Current user:', user ? 'Authenticated' : 'Anonymous');
      console.log('🔑 User ID:', user?.id || 'N/A');
    }

    // Test 5: Check if we can access other tables
    console.log('5️⃣ Testing access to other tables...');
    const tables = ['solution_inquiries', 'support_tickets', 'roi_calculations', 'waste_audit_requests'];
    
    for (const table of tables) {
      const { error } = await supabase
        .from(table)
        .select('count')
        .limit(1);

      if (error) {
        console.log(`❌ Access failed for ${table}:`, error.message);
      } else {
        console.log(`✅ Access successful for ${table}`);
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runDiagnostic() {
  console.log('🚀 Starting Final Diagnostic...\n');
  await finalDiagnostic();
  console.log('\n🏁 Diagnostic completed');
}

// Run the diagnostic
runDiagnostic().catch(console.error);
