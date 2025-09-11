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

async function testFormsWithAdmin() {
  console.log('🧪 Testing Forms with Admin Access...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 Service Key (first 20 chars):', supabaseServiceKey.substring(0, 20) + '...');
  console.log('');

  const results = {
    contactForm: false,
    solutionForm: false,
    supportForm: false,
    roiCalculator: false,
    wasteAuditRequest: false
  };

  try {
    // Test 1: Contact Form
    console.log('📝 Testing contact form submission...');
    const contactData = {
      name: 'Admin Test Contact User',
      email: 'admin-contact-test@example.com',
      phone: '+60123456789',
      company: 'Test Company',
      service: 'General Inquiry',
      message: 'This is a test contact form submission with admin access'
    };

    const { data: contactInsertData, error: contactError } = await supabaseAdmin
      .from('contact_messages')
      .insert([contactData])
      .select();

    if (contactError) {
      console.log('❌ Contact form submission failed:', contactError.message);
    } else {
      console.log('✅ Contact form submission successful');
      console.log('📊 Inserted record ID:', contactInsertData[0].id);
      results.contactForm = true;
      
      // Clean up test record
      await supabaseAdmin
        .from('contact_messages')
        .delete()
        .eq('id', contactInsertData[0].id);
      console.log('🧹 Contact test record cleaned up');
    }
    console.log('');

    // Test 2: Solution Form
    console.log('🔧 Testing solution form submission...');
    const solutionData = {
      solution_type: 'ai-forecasting',
      name: 'Admin Test Solution User',
      email: 'admin-solution-test@example.com',
      company: 'Test Solution Company',
      phone: '+60123456789',
      company_size: '11-50 employees',
      locations: '2-5 locations',
      current_waste: 'RM 5,000 - RM 15,000',
      monthly_revenue: 'RM 50,000 - RM 200,000',
      specific_needs: 'Need AI forecasting for inventory management',
      status: 'new',
      priority: 'medium'
    };

    const { data: solutionInsertData, error: solutionError } = await supabaseAdmin
      .from('solution_inquiries')
      .insert([solutionData])
      .select();

    if (solutionError) {
      console.log('❌ Solution form submission failed:', solutionError.message);
    } else {
      console.log('✅ Solution form submission successful');
      console.log('📊 Inserted record ID:', solutionInsertData[0].id);
      results.solutionForm = true;
      
      // Clean up test record
      await supabaseAdmin
        .from('solution_inquiries')
        .delete()
        .eq('id', solutionInsertData[0].id);
      console.log('🧹 Solution test record cleaned up');
    }
    console.log('');

    // Test 3: Support Form
    console.log('🎧 Testing support form submission...');
    const supportData = {
      first_name: 'Admin',
      last_name: 'Test Support User',
      email: 'admin-support-test@example.com',
      subject: 'Admin Test Support Ticket',
      priority: 'Medium - Feature request',
      message: 'This is a test support ticket submission with admin access',
      status: 'open',
      category: 'general'
    };

    const { data: supportInsertData, error: supportError } = await supabaseAdmin
      .from('support_tickets')
      .insert([supportData])
      .select();

    if (supportError) {
      console.log('❌ Support form submission failed:', supportError.message);
    } else {
      console.log('✅ Support form submission successful');
      console.log('📊 Inserted record ID:', supportInsertData[0].id);
      results.supportForm = true;
      
      // Clean up test record
      await supabaseAdmin
        .from('support_tickets')
        .delete()
        .eq('id', supportInsertData[0].id);
      console.log('🧹 Support test record cleaned up');
    }
    console.log('');

    // Test 4: ROI Calculator
    console.log('📊 Testing ROI calculator submission...');
    const roiData = {
      name: 'Admin Test ROI User',
      email: 'admin-roi-test@example.com',
      company: 'Test ROI Company',
      company_size: '51-200 employees',
      locations: '6-20 locations',
      monthly_revenue: 500000,
      current_waste: 25000,
      calculated_savings: 15000,
      roi_percentage: 60,
      payback_period_months: 20,
      status: 'calculated'
    };

    const { data: roiInsertData, error: roiError } = await supabaseAdmin
      .from('roi_calculations')
      .insert([roiData])
      .select();

    if (roiError) {
      console.log('❌ ROI calculator submission failed:', roiError.message);
    } else {
      console.log('✅ ROI calculator submission successful');
      console.log('📊 Inserted record ID:', roiInsertData[0].id);
      results.roiCalculator = true;
      
      // Clean up test record
      await supabaseAdmin
        .from('roi_calculations')
        .delete()
        .eq('id', roiInsertData[0].id);
      console.log('🧹 ROI test record cleaned up');
    }
    console.log('');

    // Test 5: Waste Audit Request
    console.log('🗑️ Testing waste audit request submission...');
    const wasteAuditData = {
      name: 'Admin Test Waste Audit User',
      email: 'admin-waste-audit-test@example.com',
      company_size: '11-50',
      locations: '2-5',
      status: 'new',
      source: 'hero_form'
    };

    const { data: wasteAuditInsertData, error: wasteAuditError } = await supabaseAdmin
      .from('waste_audit_requests')
      .insert([wasteAuditData])
      .select();

    if (wasteAuditError) {
      console.log('❌ Waste audit request submission failed:', wasteAuditError.message);
    } else {
      console.log('✅ Waste audit request submission successful');
      console.log('📊 Inserted record ID:', wasteAuditInsertData[0].id);
      results.wasteAuditRequest = true;
      
      // Clean up test record
      await supabaseAdmin
        .from('waste_audit_requests')
        .delete()
        .eq('id', wasteAuditInsertData[0].id);
      console.log('🧹 Waste audit test record cleaned up');
    }
    console.log('');

  } catch (error) {
    console.error('❌ Unexpected error during testing:', error.message);
  }

  // Print Results Summary
  console.log('📋 Admin Test Results Summary:');
  console.log('==============================');
  console.log(`Contact Form: ${results.contactForm ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Solution Form: ${results.solutionForm ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Support Form: ${results.supportForm ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`ROI Calculator: ${results.roiCalculator ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Waste Audit Request: ${results.wasteAuditRequest ? '✅ PASS' : '❌ FAIL'}`);
  console.log('');

  const totalTests = Object.keys(results).length;
  const passedTests = Object.values(results).filter(result => result === true).length;
  
  console.log(`🎯 Overall Result: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All forms work with admin access!');
    console.log('📋 The issue is with RLS policies blocking anonymous users.');
    console.log('');
    console.log('🔧 Next Steps:');
    console.log('1. Disable RLS temporarily to get forms working');
    console.log('2. Test forms with anonymous access');
    console.log('3. Re-enable RLS with proper policies');
  } else {
    console.log('⚠️ Some forms failed even with admin access.');
    console.log('📋 This suggests a deeper database schema issue.');
  }
}

async function runAdminFormTest() {
  console.log('🚀 Starting Admin Form Test...\n');
  await testFormsWithAdmin();
  console.log('\n🏁 Admin form test completed');
}

// Run the admin form test
runAdminFormTest().catch(console.error);
