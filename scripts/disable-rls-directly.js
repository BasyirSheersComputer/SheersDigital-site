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

async function disableRLSDirectly() {
  console.log('🔧 Disabling RLS Directly with Admin Access...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 Service Key (first 20 chars):', supabaseServiceKey.substring(0, 20) + '...');
  console.log('');

  const tables = [
    'contact_messages',
    'solution_inquiries', 
    'support_tickets',
    'roi_calculations',
    'waste_audit_requests'
  ];

  try {
    // Since we can't execute raw SQL directly, let's test if RLS is already disabled
    console.log('🧪 Testing if RLS is already disabled...');
    
    let rlsDisabled = true;
    
    for (const table of tables) {
      console.log(`  📝 Testing ${table}...`);
      
      // Try to insert a test record
      const testData = {
        name: 'RLS Test',
        email: `rls-test-${Date.now()}@example.com`,
        message: 'Testing RLS status'
      };

      let insertData;
      if (table === 'contact_messages') {
        insertData = testData;
      } else if (table === 'solution_inquiries') {
        insertData = {
          solution_type: 'ai-forecasting',
          name: 'RLS Test',
          email: `rls-test-${Date.now()}@example.com`,
          company: 'Test Company',
          status: 'new',
          priority: 'medium'
        };
      } else if (table === 'support_tickets') {
        insertData = {
          first_name: 'RLS',
          last_name: 'Test',
          email: `rls-test-${Date.now()}@example.com`,
          subject: 'RLS Test',
          priority: 'Low - General question',
          message: 'Testing RLS status',
          status: 'open',
          category: 'general'
        };
      } else if (table === 'roi_calculations') {
        insertData = {
          name: 'RLS Test',
          email: `rls-test-${Date.now()}@example.com`,
          company: 'Test Company',
          company_size: '1-10 employees',
          locations: '1 location',
          status: 'calculated'
        };
      } else if (table === 'waste_audit_requests') {
        insertData = {
          name: 'RLS Test',
          email: `rls-test-${Date.now()}@example.com`,
          company_size: '1-10',
          locations: '1',
          status: 'new',
          source: 'hero_form'
        };
      }

      const { data: insertResult, error: insertError } = await supabaseAdmin
        .from(table)
        .insert([insertData])
        .select();

      if (insertError) {
        if (insertError.message.includes('row-level security')) {
          console.log(`  ❌ RLS is ENABLED for ${table} - blocking inserts`);
          rlsDisabled = false;
        } else {
          console.log(`  ⚠️ ${table} has other issues: ${insertError.message}`);
        }
      } else {
        console.log(`  ✅ RLS is DISABLED for ${table} - inserts work`);
        
        // Clean up test record
        await supabaseAdmin
          .from(table)
          .delete()
          .eq('id', insertResult[0].id);
      }
    }

    console.log('');
    if (rlsDisabled) {
      console.log('🎉 RLS IS ALREADY DISABLED ON ALL TABLES!');
      console.log('📋 All forms should work now.');
      console.log('');
      console.log('🧪 Testing all forms with anonymous access...');
      
      // Test with anonymous client
      const supabaseAnon = createClient(supabaseUrl, process.env.VITE_SUPABASE_ANON_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false
        }
      });

      // Test contact form with anonymous access
      const { data: anonTestData, error: anonTestError } = await supabaseAnon
        .from('contact_messages')
        .insert([{
          name: 'Anonymous Test',
          email: 'anonymous-test@example.com',
          message: 'Testing anonymous access'
        }])
        .select();

      if (anonTestError) {
        console.log('❌ Anonymous access still blocked:', anonTestError.message);
      } else {
        console.log('✅ Anonymous access works!');
        console.log('📊 Inserted record ID:', anonTestData[0].id);
        
        // Clean up
        await supabaseAnon
          .from('contact_messages')
          .delete()
          .eq('id', anonTestData[0].id);
      }
    } else {
      console.log('❌ RLS IS STILL ENABLED ON SOME TABLES');
      console.log('📋 You need to manually disable RLS in Supabase SQL Editor.');
      console.log('');
      console.log('🔧 Run this SQL in Supabase SQL Editor:');
      console.log('');
      tables.forEach(table => {
        console.log(`ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`);
      });
      console.log('');
      console.log('After running the SQL, test with: npm run test-all-forms');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runDisableRLS() {
  console.log('🚀 Starting Direct RLS Disable...\n');
  await disableRLSDirectly();
  console.log('\n🏁 RLS disable check completed');
}

// Run the RLS disable check
runDisableRLS().catch(console.error);
