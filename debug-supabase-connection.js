/*
  # Supabase Connection Debug Script
  
  This script will test your Supabase connection and form submissions
  to help identify the exact issue with RLS policies.
*/

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

// Load environment variables from .env file
function loadEnv() {
    try {
        const envContent = readFileSync('.env', 'utf8');
        const envVars = {};
        envContent.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split('=');
            if (key && valueParts.length > 0) {
                envVars[key.trim()] = valueParts.join('=').trim();
            }
        });
        return envVars;
    } catch (error) {
        console.log('No .env file found, using process.env');
        return process.env;
    }
}

const env = loadEnv();

// Get Supabase credentials
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

console.log('🔍 Supabase Debug Information:');
console.log('URL:', supabaseUrl);
console.log('Anon Key:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'NOT FOUND');
console.log('');

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing Supabase credentials in .env file');
    console.log('Make sure you have:');
    console.log('VITE_SUPABASE_URL=your_url_here');
    console.log('VITE_SUPABASE_ANON_KEY=your_anon_key_here');
    process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    console.log('🧪 Testing Supabase Connection...');
    
    try {
        // Test basic connection
        const { data, error } = await supabase
            .from('waste_audit_requests')
            .select('count')
            .limit(1);
            
        if (error) {
            console.error('❌ Connection test failed:', error);
            return false;
        }
        
        console.log('✅ Connection successful');
        return true;
    } catch (err) {
        console.error('❌ Connection error:', err.message);
        return false;
    }
}

async function testFormSubmission() {
    console.log('📝 Testing Form Submission...');
    
    const testData = {
        name: 'Test User',
        email: 'test@example.com',
        company_size: '11-50',
        locations: '2-5',
        source: 'debug_test'
    };
    
    try {
        const { data, error } = await supabase
            .from('waste_audit_requests')
            .insert([testData])
            .select();
            
        if (error) {
            console.error('❌ Form submission failed:');
            console.error('Error Code:', error.code);
            console.error('Error Message:', error.message);
            console.error('Error Details:', error.details);
            console.error('Error Hint:', error.hint);
            return false;
        }
        
        console.log('✅ Form submission successful');
        console.log('Inserted data:', data);
        return true;
    } catch (err) {
        console.error('❌ Form submission error:', err.message);
        return false;
    }
}

async function checkRLSPolicies() {
    console.log('🔒 Checking RLS Policies...');
    
    try {
        // Check if RLS is enabled
        const { data, error } = await supabase
            .rpc('check_rls_status', { table_name: 'waste_audit_requests' });
            
        if (error) {
            console.log('ℹ️  Could not check RLS status via RPC (this is normal)');
        } else {
            console.log('RLS Status:', data);
        }
        
        // Try to get table info
        const { data: tableInfo, error: tableError } = await supabase
            .from('information_schema.tables')
            .select('*')
            .eq('table_name', 'waste_audit_requests');
            
        if (tableError) {
            console.log('ℹ️  Could not access table metadata (this is normal for anon users)');
        } else {
            console.log('Table Info:', tableInfo);
        }
        
    } catch (err) {
        console.log('ℹ️  RLS check error (this is normal):', err.message);
    }
}

async function testAllTables() {
    console.log('🗄️  Testing All Form Tables...');
    
    const tables = [
        'waste_audit_requests',
        'solution_inquiries', 
        'support_tickets',
        'roi_calculations'
    ];
    
    for (const table of tables) {
        console.log(`\nTesting table: ${table}`);
        
        try {
            const { data, error } = await supabase
                .from(table)
                .select('count')
                .limit(1);
                
            if (error) {
                console.error(`❌ ${table}:`, error.message);
            } else {
                console.log(`✅ ${table}: Accessible`);
            }
        } catch (err) {
            console.error(`❌ ${table}:`, err.message);
        }
    }
}

async function main() {
    console.log('🚀 Starting Supabase Debug Session...\n');
    
    // Test 1: Basic connection
    const connectionOk = await testConnection();
    if (!connectionOk) {
        console.log('\n❌ Basic connection failed. Check your credentials.');
        return;
    }
    
    // Test 2: Check RLS policies
    await checkRLSPolicies();
    
    // Test 3: Test all tables
    await testAllTables();
    
    // Test 4: Form submission
    const formOk = await testFormSubmission();
    
    console.log('\n📊 Debug Summary:');
    console.log('Connection:', connectionOk ? '✅' : '❌');
    console.log('Form Submission:', formOk ? '✅' : '❌');
    
    if (!formOk) {
        console.log('\n🔧 Next Steps:');
        console.log('1. Run the RLS fix migration in Supabase SQL Editor');
        console.log('2. Check that your anon key has the correct permissions');
        console.log('3. Verify the table structure matches the form data');
    }
}

// Run the debug session
main().catch(console.error);
