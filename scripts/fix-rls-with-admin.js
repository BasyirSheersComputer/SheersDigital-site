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

async function fixRLSPolicies() {
  console.log('🔧 Fixing RLS Policies with Admin Access...');
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
    for (const table of tables) {
      console.log(`🔧 Fixing RLS policies for ${table}...`);
      
      // Step 1: Disable RLS temporarily
      console.log(`  1️⃣ Disabling RLS for ${table}...`);
      const { error: disableError } = await supabaseAdmin.rpc('exec_sql', {
        sql: `ALTER TABLE ${table} DISABLE ROW LEVEL SECURITY;`
      });
      
      if (disableError) {
        console.log(`  ❌ Failed to disable RLS for ${table}:`, disableError.message);
        continue;
      } else {
        console.log(`  ✅ RLS disabled for ${table}`);
      }

      // Step 2: Drop all existing policies
      console.log(`  2️⃣ Dropping existing policies for ${table}...`);
      const { error: dropError } = await supabaseAdmin.rpc('exec_sql', {
        sql: `
          DROP POLICY IF EXISTS "contact_messages_insert_policy" ON ${table};
          DROP POLICY IF EXISTS "contact_messages_select_policy" ON ${table};
          DROP POLICY IF EXISTS "solution_inquiries_insert_policy" ON ${table};
          DROP POLICY IF EXISTS "solution_inquiries_select_policy" ON ${table};
          DROP POLICY IF EXISTS "support_tickets_insert_policy" ON ${table};
          DROP POLICY IF EXISTS "support_tickets_select_policy" ON ${table};
          DROP POLICY IF EXISTS "roi_calculations_insert_policy" ON ${table};
          DROP POLICY IF EXISTS "roi_calculations_select_policy" ON ${table};
          DROP POLICY IF EXISTS "waste_audit_requests_insert_policy" ON ${table};
          DROP POLICY IF EXISTS "waste_audit_requests_select_policy" ON ${table};
          DROP POLICY IF EXISTS "Anyone can insert contact messages" ON ${table};
          DROP POLICY IF EXISTS "Authenticated users can read contact messages" ON ${table};
          DROP POLICY IF EXISTS "Anyone can insert solution inquiries" ON ${table};
          DROP POLICY IF EXISTS "Authenticated users can read solution inquiries" ON ${table};
          DROP POLICY IF EXISTS "Anyone can insert support tickets" ON ${table};
          DROP POLICY IF EXISTS "Authenticated users can read support tickets" ON ${table};
          DROP POLICY IF EXISTS "Anyone can insert roi calculations" ON ${table};
          DROP POLICY IF EXISTS "Authenticated users can read roi calculations" ON ${table};
          DROP POLICY IF EXISTS "Anyone can insert waste audit requests" ON ${table};
          DROP POLICY IF EXISTS "Authenticated users can read waste audit requests" ON ${table};
        `
      });
      
      if (dropError) {
        console.log(`  ⚠️ Some policies may not exist for ${table}:`, dropError.message);
      } else {
        console.log(`  ✅ Existing policies dropped for ${table}`);
      }

      // Step 3: Re-enable RLS
      console.log(`  3️⃣ Re-enabling RLS for ${table}...`);
      const { error: enableError } = await supabaseAdmin.rpc('exec_sql', {
        sql: `ALTER TABLE ${table} ENABLE ROW LEVEL SECURITY;`
      });
      
      if (enableError) {
        console.log(`  ❌ Failed to enable RLS for ${table}:`, enableError.message);
        continue;
      } else {
        console.log(`  ✅ RLS enabled for ${table}`);
      }

      // Step 4: Create new policies
      console.log(`  4️⃣ Creating new policies for ${table}...`);
      const { error: policyError } = await supabaseAdmin.rpc('exec_sql', {
        sql: `
          CREATE POLICY "${table}_insert_policy" ON ${table} FOR INSERT TO anon, authenticated WITH CHECK (true);
          CREATE POLICY "${table}_select_policy" ON ${table} FOR SELECT TO authenticated USING (true);
        `
      });
      
      if (policyError) {
        console.log(`  ❌ Failed to create policies for ${table}:`, policyError.message);
      } else {
        console.log(`  ✅ New policies created for ${table}`);
      }

      console.log(`  🎉 ${table} RLS policies fixed!`);
      console.log('');
    }

    console.log('🎉 All RLS policies have been fixed!');
    console.log('📋 All forms should now work correctly.');

  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

async function runRLSFix() {
  console.log('🚀 Starting RLS Policy Fix with Admin Access...\n');
  await fixRLSPolicies();
  console.log('\n🏁 RLS fix completed');
}

// Run the RLS fix
runRLSFix().catch(console.error);
