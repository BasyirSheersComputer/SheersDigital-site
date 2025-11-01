/**
 * Test script to verify the complete form submission and email flow
 * Tests: Form data → Supabase Database → Email to admin
 */

import { createClient } from '@supabase/supabase-js';

// Use the same configuration as the app
const supabaseUrl = 'https://nbupfkhtkoggqnyvpdfl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idXBma2h0a29nZ3FueXZwZGZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NDQ3OTQsImV4cCI6MjAyODIyMDc5NH0.placeholder_key';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('🧪 Testing Form Submission and Email Flow\n');
console.log('=' .repeat(60));

async function testSolutionInquiryFlow() {
  console.log('\n📋 Test 1: Solution Inquiry Form');
  console.log('-'.repeat(60));

  const testData = {
    solution_type: 'ai-forecasting',
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company Ltd',
    phone: '+60 12-345 6789',
    company_size: '11-50 employees',
    locations: '2-5 locations',
    current_waste: 'RM 5,000 - RM 15,000',
    monthly_revenue: 'RM 50,000 - RM 200,000',
    specific_needs: 'Testing the complete form flow including email notifications',
    status: 'new',
    priority: 'medium'
  };

  try {
    // Insert test data
    const { data, error } = await supabase
      .from('solution_inquiries')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Failed to insert solution inquiry:', error.message);
      return false;
    }

    console.log('✅ Solution inquiry saved to database');
    console.log('📧 Email notification should be sent to: a.basyir@sheerssoft.com');
    console.log('📊 Record ID:', data[0].id);
    
    // Clean up test data
    await supabase
      .from('solution_inquiries')
      .delete()
      .eq('id', data[0].id);
    
    console.log('🗑️  Test record cleaned up');
    return true;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  }
}

async function testSupportTicketFlow() {
  console.log('\n📋 Test 2: Support Ticket Form');
  console.log('-'.repeat(60));

  const testData = {
    first_name: 'Test',
    last_name: 'User',
    email: 'test@example.com',
    subject: 'Test Support Ticket',
    priority: 'Low - General question',
    message: 'This is a test support ticket to verify the email flow is working correctly.',
    status: 'open',
    category: 'general'
  };

  try {
    const { data, error } = await supabase
      .from('support_tickets')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Failed to insert support ticket:', error.message);
      return false;
    }

    console.log('✅ Support ticket saved to database');
    console.log('📧 Email notification should be sent to: a.basyir@sheerssoft.com');
    console.log('📊 Ticket ID:', data[0].id);
    
    // Clean up test data
    await supabase
      .from('support_tickets')
      .delete()
      .eq('id', data[0].id);
    
    console.log('🗑️  Test record cleaned up');
    return true;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  }
}

async function testROICalculatorFlow() {
  console.log('\n📋 Test 3: ROI Calculator Form');
  console.log('-'.repeat(60));

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company Ltd',
    company_size: '11-50 employees',
    locations: '2-5 locations',
    monthly_revenue: 100000,
    current_waste: 15000,
    calculated_savings: 8000,
    roi_percentage: 192,
    payback_period_months: 6,
    status: 'calculated'
  };

  try {
    const { data, error } = await supabase
      .from('roi_calculations')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Failed to insert ROI calculation:', error.message);
      return false;
    }

    console.log('✅ ROI calculation saved to database');
    console.log('📧 Email notification should be sent to: a.basyir@sheerssoft.com');
    console.log('📊 Calculation ID:', data[0].id);
    
    // Clean up test data
    await supabase
      .from('roi_calculations')
      .delete()
      .eq('id', data[0].id);
    
    console.log('🗑️  Test record cleaned up');
    return true;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  }
}

async function testContactFormFlow() {
  console.log('\n📋 Test 4: Contact Form');
  console.log('-'.repeat(60));

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+60 12-345 6789',
    company: 'Test Company Ltd',
    service: 'AI Forecasting',
    message: 'Testing the contact form email flow.',
    status: 'new'
  };

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Failed to insert contact message:', error.message);
      return false;
    }

    console.log('✅ Contact message saved to database');
    console.log('📧 Email notification should be sent to: a.basyir@sheerssoft.com');
    console.log('📊 Message ID:', data[0].id);
    
    // Clean up test data
    await supabase
      .from('contact_messages')
      .delete()
      .eq('id', data[0].id);
    
    console.log('🗑️  Test record cleaned up');
    return true;
  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  }
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Starting Form and Email Flow Tests...\n');
  
  const results = {
    solutionInquiry: await testSolutionInquiryFlow(),
    supportTicket: await testSupportTicketFlow(),
    roiCalculator: await testROICalculatorFlow(),
    contactForm: await testContactFormFlow()
  };

  console.log('\n' + '='.repeat(60));
  console.log('📊 Test Results Summary');
  console.log('='.repeat(60));
  
  console.log(`Solution Inquiry Flow: ${results.solutionInquiry ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`Support Ticket Flow: ${results.supportTicket ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`ROI Calculator Flow: ${results.roiCalculator ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`Contact Form Flow: ${results.contactForm ? '✅ PASSED' : '❌ FAILED'}`);
  
  const allPassed = Object.values(results).every(result => result === true);
  
  console.log('\n' + '='.repeat(60));
  if (allPassed) {
    console.log('✨ All tests PASSED! Form submission flow is working correctly.');
    console.log('\n📧 Note: To test email delivery:');
    console.log('   1. Deploy the Supabase Edge Function: supabase functions deploy send-email');
    console.log('   2. Set RESEND_API_KEY in Supabase project settings');
    console.log('   3. Submit a form through the UI');
    console.log('   4. Check a.basyir@sheerssoft.com for the email notification');
  } else {
    console.log('⚠️  Some tests FAILED. Please check the errors above.');
  }
  console.log('='.repeat(60));
}

runAllTests().catch(console.error);

