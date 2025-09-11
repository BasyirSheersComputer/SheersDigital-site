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

async function fixDatabasePolicies() {
  console.log('🔧 Fixing database RLS policies...');
  
  try {
    // Test if we can insert a message (this will fail if policies are wrong)
    const testData = {
      name: 'Policy Test',
      email: 'test@example.com',
      service: 'Policy Test',
      message: 'Testing RLS policies'
    };

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (error) {
      console.log('❌ Current policies are blocking inserts:', error.message);
      console.log('');
      console.log('📋 Manual Fix Required:');
      console.log('1. Go to Supabase Dashboard → Authentication → Policies');
      console.log('2. Find the contact_messages table');
      console.log('3. Ensure there is a policy that allows INSERT for anon users');
      console.log('4. The policy should be:');
      console.log('   - Name: "Anyone can insert messages"');
      console.log('   - Operation: INSERT');
      console.log('   - Target roles: anon, authenticated');
      console.log('   - Check expression: true');
      console.log('');
      console.log('🔗 Or run this SQL in the Supabase SQL Editor:');
      console.log(`
DROP POLICY IF EXISTS "Anyone can insert messages" ON contact_messages;
CREATE POLICY "Anyone can insert messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
      `);
      return false;
    }

    console.log('✅ Database policies are working correctly!');
    console.log('📊 Test record inserted with ID:', data[0].id);
    
    // Clean up test record
    await supabase
      .from('contact_messages')
      .delete()
      .eq('id', data[0].id);
    
    console.log('🧹 Test record cleaned up');
    return true;
  } catch (error) {
    console.error('❌ Error testing database policies:', error.message);
    return false;
  }
}

async function runPolicyFix() {
  console.log('🚀 Starting Database Policy Fix...\n');
  
  const success = await fixDatabasePolicies();
  
  if (success) {
    console.log('\n🎉 Database policies are working correctly!');
    console.log('✅ Forms should now work properly');
  } else {
    console.log('\n⚠️  Database policies need manual fixing');
    console.log('📋 Follow the instructions above to fix the policies');
  }
}

// Run the policy fix
runPolicyFix().catch(console.error);
