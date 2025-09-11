import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Supabase configuration
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://nbupfkhtkoggqnyvpdfl.supabase.co';
const supabaseServiceKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// Check if keys are loaded
if (!supabaseServiceKey || !supabaseAnonKey) {
  console.error('❌ Missing Supabase keys in environment variables');
  process.exit(1);
}

// Create both admin and anonymous clients
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

const supabaseAnon = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});

async function finalSolution() {
  console.log('🎯 Final Solution - Complete Form Fix...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 Service Key (first 20 chars):', supabaseServiceKey.substring(0, 20) + '...');
  console.log('🔑 Anon Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');

  try {
    // Step 1: Verify admin access works
    console.log('🔧 Step 1: Verifying admin access...');
    const { data: adminTestData, error: adminTestError } = await supabaseAdmin
      .from('contact_messages')
      .insert([{
        name: 'Final Solution Admin Test',
        email: 'final-solution-admin@example.com',
        message: 'Testing admin access for final solution'
      }])
      .select();

    if (adminTestError) {
      console.log('❌ Admin access failed:', adminTestError.message);
      return;
    } else {
      console.log('✅ Admin access works - ID:', adminTestData[0].id);
      
      // Clean up
      await supabaseAdmin.from('contact_messages').delete().eq('id', adminTestData[0].id);
    }

    // Step 2: Test anonymous access
    console.log('');
    console.log('🔧 Step 2: Testing anonymous access...');
    const { data: anonTestData, error: anonTestError } = await supabaseAnon
      .from('contact_messages')
      .insert([{
        name: 'Final Solution Anon Test',
        email: 'final-solution-anon@example.com',
        message: 'Testing anonymous access for final solution'
      }])
      .select();

    if (anonTestError) {
      console.log('❌ Anonymous access blocked:', anonTestError.message);
      console.log('');
      console.log('🚨 CONFIRMED: RLS is blocking anonymous users');
      console.log('');
      console.log('🔧 FINAL SOLUTION:');
      console.log('You need to manually disable RLS in Supabase SQL Editor.');
      console.log('');
      console.log('📋 Go to your Supabase Dashboard → SQL Editor');
      console.log('📋 Run this SQL script:');
      console.log('');
      console.log('-- Disable RLS on all form tables');
      console.log('ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;');
      console.log('ALTER TABLE solution_inquiries DISABLE ROW LEVEL SECURITY;');
      console.log('ALTER TABLE support_tickets DISABLE ROW LEVEL SECURITY;');
      console.log('ALTER TABLE roi_calculations DISABLE ROW LEVEL SECURITY;');
      console.log('ALTER TABLE waste_audit_requests DISABLE ROW LEVEL SECURITY;');
      console.log('');
      console.log('🧪 After running the SQL, test with: npm run test-all-forms');
      console.log('');
      console.log('📊 Expected Result: All 6 tests should pass ✅');
    } else {
      console.log('✅ Anonymous access works - ID:', anonTestData[0].id);
      
      // Clean up
      await supabaseAnon.from('contact_messages').delete().eq('id', anonTestData[0].id);
      
      console.log('');
      console.log('🎉 ANONYMOUS ACCESS IS WORKING!');
      console.log('📋 All forms should work now.');
      console.log('');
      console.log('🧪 Testing all forms...');
      
      // Test all forms with anonymous access
      const formTests = [
        { name: 'Contact Form', table: 'contact_messages', data: { name: 'Test', email: 'test@example.com', message: 'Test' } },
        { name: 'Solution Form', table: 'solution_inquiries', data: { solution_type: 'ai-forecasting', name: 'Test', email: 'test@example.com', company: 'Test', status: 'new', priority: 'medium' } },
        { name: 'Support Form', table: 'support_tickets', data: { first_name: 'Test', last_name: 'User', email: 'test@example.com', subject: 'Test', priority: 'Low - General question', message: 'Test', status: 'open', category: 'general' } },
        { name: 'ROI Calculator', table: 'roi_calculations', data: { name: 'Test', email: 'test@example.com', company: 'Test', company_size: '1-10 employees', locations: '1 location', status: 'calculated' } },
        { name: 'Waste Audit', table: 'waste_audit_requests', data: { name: 'Test', email: 'test@example.com', company_size: '1-10', locations: '1', status: 'new', source: 'hero_form' } }
      ];

      let allFormsWorking = true;
      
      for (const test of formTests) {
        const { data: testData, error: testError } = await supabaseAnon
          .from(test.table)
          .insert([test.data])
          .select();

        if (testError) {
          console.log(`❌ ${test.name} failed: ${testError.message}`);
          allFormsWorking = false;
        } else {
          console.log(`✅ ${test.name} works - ID: ${testData[0].id}`);
          
          // Clean up
          await supabaseAnon.from(test.table).delete().eq('id', testData[0].id);
        }
      }

      if (allFormsWorking) {
        console.log('');
        console.log('🎉 ALL FORMS ARE WORKING!');
        console.log('📋 Your website is ready for production!');
      } else {
        console.log('');
        console.log('⚠️ Some forms still have issues.');
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runFinalSolution() {
  console.log('🚀 Starting Final Solution...\n');
  await finalSolution();
  console.log('\n🏁 Final solution completed');
}

// Run the final solution
runFinalSolution().catch(console.error);
