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

async function testAllForms() {
  console.log('🚀 Starting Comprehensive Form Tests...');
  console.log('📊 Supabase URL:', supabaseUrl);
  console.log('🔑 API Key (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...');
  console.log('');

  const results = {
    databaseConnection: false,
    contactForm: false,
    solutionForm: false,
    supportForm: false,
    roiCalculator: false,
    wasteAuditRequest: false
  };

  try {
    // Test 1: Database Connection
    console.log('🔍 Testing database connection for all tables...');
    const tables = ['contact_messages', 'solution_inquiries', 'support_tickets', 'roi_calculations', 'waste_audit_requests'];
    
    let connectionSuccess = true;
    for (const table of tables) {
      const { error } = await supabase
        .from(table)
        .select('count')
        .limit(1);

      if (error) {
        console.log(`❌ Connection failed for ${table}:`, error.message);
        connectionSuccess = false;
      } else {
        console.log(`✅ Connection successful for ${table}`);
      }
    }
    
    results.databaseConnection = connectionSuccess;
    console.log('');

    // Test 2: Contact Form (contact_messages table)
    console.log('📝 Testing contact form submission...');
    const contactData = {
      name: 'Test Contact User',
      email: 'contact-test@example.com',
      phone: '+60123456789',
      company: 'Test Company',
      service: 'General Inquiry',
      message: 'This is a test contact form submission'
    };

    const { data: contactInsertData, error: contactError } = await supabase
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
      await supabase
        .from('contact_messages')
        .delete()
        .eq('id', contactInsertData[0].id);
      console.log('🧹 Contact test record cleaned up');
    }
    console.log('');

    // Test 3: Solution Form (solution_inquiries table)
    console.log('🔧 Testing solution form submission...');
    const solutionData = {
      solution_type: 'ai-forecasting',
      name: 'Test Solution User',
      email: 'solution-test@example.com',
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

    const { data: solutionInsertData, error: solutionError } = await supabase
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
      await supabase
        .from('solution_inquiries')
        .delete()
        .eq('id', solutionInsertData[0].id);
      console.log('🧹 Solution test record cleaned up');
    }
    console.log('');

    // Test 4: Support Form (support_tickets table)
    console.log('🎧 Testing support form submission...');
    const supportData = {
      first_name: 'Test',
      last_name: 'Support User',
      email: 'support-test@example.com',
      subject: 'Test Support Ticket',
      priority: 'Medium - Feature request',
      message: 'This is a test support ticket submission',
      status: 'open',
      category: 'general'
    };

    const { data: supportInsertData, error: supportError } = await supabase
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
      await supabase
        .from('support_tickets')
        .delete()
        .eq('id', supportInsertData[0].id);
      console.log('🧹 Support test record cleaned up');
    }
    console.log('');

    // Test 5: ROI Calculator (roi_calculations table)
    console.log('📊 Testing ROI calculator submission...');
    const roiData = {
      name: 'Test ROI User',
      email: 'roi-test@example.com',
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

    const { data: roiInsertData, error: roiError } = await supabase
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
      await supabase
        .from('roi_calculations')
        .delete()
        .eq('id', roiInsertData[0].id);
      console.log('🧹 ROI test record cleaned up');
    }
    console.log('');

    // Test 6: Waste Audit Request (waste_audit_requests table)
    console.log('🗑️ Testing waste audit request submission...');
    const wasteAuditData = {
      name: 'Test Waste Audit User',
      email: 'waste-audit-test@example.com',
      company_size: '11-50',
      locations: '2-5',
      status: 'new',
      source: 'hero_form'
    };

    const { data: wasteAuditInsertData, error: wasteAuditError } = await supabase
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
      await supabase
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
  console.log('📋 Test Results Summary:');
  console.log('========================');
  console.log(`Database Connection: ${results.databaseConnection ? '✅ PASS' : '❌ FAIL'}`);
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
    console.log('🎉 All tests passed! All forms are working correctly!');
  } else {
    console.log('⚠️ Some tests failed. Please check the errors above.');
  }
}

// Run the comprehensive test
testAllForms().catch(console.error);
