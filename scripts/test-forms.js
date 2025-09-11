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
  console.error('Please ensure the .env file contains VITE_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testDatabaseConnection() {
  console.log('🔍 Testing Supabase database connection...');
  
  try {
    // Test connection by querying the contact_messages table
    const { data, error } = await supabase
      .from('contact_messages')
      .select('count')
      .limit(1);

    if (error) {
      console.error('❌ Database connection failed:', error.message);
      return false;
    }

    console.log('✅ Database connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
    return false;
  }
}

async function testContactFormSubmission() {
  console.log('📝 Testing contact form submission...');
  
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+60123456789',
      company: 'Test Company',
      service: 'Contact Form Test',
      message: 'This is a test submission from the form audit script.',
      status: 'new'
    };

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Contact form submission failed:', error.message);
      return false;
    }

    console.log('✅ Contact form submission successful!');
    console.log('📊 Inserted record ID:', data[0].id);
    return true;
  } catch (error) {
    console.error('❌ Contact form submission error:', error.message);
    return false;
  }
}

async function testSolutionFormSubmission() {
  console.log('🔧 Testing solution form submission...');
  
  try {
    const testData = {
      name: 'Solution Test User',
      email: 'solution@example.com',
      phone: '+60123456789',
      company: 'Solution Test Company',
      service: 'AI Forecasting Test',
      message: `Solution Request: AI Forecasting Test
Company Size: 51-200 employees
Locations: 2-5 locations
Current Waste: RM 15,000 - RM 25,000
Monthly Revenue: RM 200,000 - RM 500,000
Specific Needs: Need AI forecasting for demand prediction`,
      status: 'new'
    };

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Solution form submission failed:', error.message);
      return false;
    }

    console.log('✅ Solution form submission successful!');
    console.log('📊 Inserted record ID:', data[0].id);
    return true;
  } catch (error) {
    console.error('❌ Solution form submission error:', error.message);
    return false;
  }
}

async function testSupportFormSubmission() {
  console.log('🎧 Testing support form submission...');
  
  try {
    const testData = {
      name: 'Support Test User',
      email: 'support@example.com',
      phone: '+60123456789',
      company: 'Support Test Company',
      service: 'Support Ticket',
      message: `Subject: Test Support Ticket
Priority: medium
Message: This is a test support ticket submission from the form audit script.`,
      status: 'new'
    };

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ Support form submission failed:', error.message);
      return false;
    }

    console.log('✅ Support form submission successful!');
    console.log('📊 Inserted record ID:', data[0].id);
    return true;
  } catch (error) {
    console.error('❌ Support form submission error:', error.message);
    return false;
  }
}

async function testROICalculatorSubmission() {
  console.log('📊 Testing ROI calculator submission...');
  
  try {
    const testData = {
      name: 'ROI Test User',
      email: 'roi@example.com',
      phone: null,
      company: 'ROI Test Company',
      service: 'ROI Calculator',
      message: `ROI Calculator Results:
Monthly Revenue: 100000
Current Waste: 20000
Locations: 2
Employees: 25
Calculated ROI: 150%
Calculated Savings: RM 8000`,
      status: 'new'
    };

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([testData])
      .select();

    if (error) {
      console.error('❌ ROI calculator submission failed:', error.message);
      return false;
    }

    console.log('✅ ROI calculator submission successful!');
    console.log('📊 Inserted record ID:', data[0].id);
    return true;
  } catch (error) {
    console.error('❌ ROI calculator submission error:', error.message);
    return false;
  }
}

async function runAllTests() {
  console.log('🚀 Starting Form Audit Tests...\n');
  
  const results = {
    connection: false,
    contactForm: false,
    solutionForm: false,
    supportForm: false,
    roiCalculator: false
  };

  // Test database connection
  results.connection = await testDatabaseConnection();
  console.log('');

  if (results.connection) {
    // Test all form submissions
    results.contactForm = await testContactFormSubmission();
    console.log('');
    
    results.solutionForm = await testSolutionFormSubmission();
    console.log('');
    
    results.supportForm = await testSupportFormSubmission();
    console.log('');
    
    results.roiCalculator = await testROICalculatorSubmission();
    console.log('');
  }

  // Summary
  console.log('📋 Test Results Summary:');
  console.log('========================');
  console.log(`Database Connection: ${results.connection ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Contact Form: ${results.contactForm ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Solution Form: ${results.solutionForm ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Support Form: ${results.supportForm ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`ROI Calculator: ${results.roiCalculator ? '✅ PASS' : '❌ FAIL'}`);
  
  const totalTests = Object.keys(results).length;
  const passedTests = Object.values(results).filter(Boolean).length;
  
  console.log(`\n🎯 Overall Result: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! Forms are ready for production.');
  } else {
    console.log('⚠️  Some tests failed. Please check the errors above.');
  }
}

// Run the tests
runAllTests().catch(console.error);
