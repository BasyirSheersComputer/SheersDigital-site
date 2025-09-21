#!/usr/bin/env node

/**
 * Database Connection Test Script
 * 
 * This script tests the connection to your Supabase database and verifies
 * that all tables have been created correctly.
 * 
 * Usage: node scripts/test-db-connection.js
 */

import pg from 'pg';
const { Client } = pg;

// Database connection configuration
const config = {
  host: 'db.nbupfkhtkoggqnyvpdfl.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: process.env.DATABASE_PASSWORD || '[YOUR-PASSWORD]', // Set this in your environment
  ssl: {
    rejectUnauthorized: false
  }
};

async function testConnection() {
  const client = new Client(config);
  
  try {
    console.log('🔌 Testing database connection...');
    await client.connect();
    console.log('✅ Successfully connected to database');
    
    // Test basic connection
    const result = await client.query('SELECT NOW() as current_time');
    console.log('⏰ Current database time:', result.rows[0].current_time);
    
    // Check if tables exist
    console.log('\n📋 Checking table existence...');
    const tables = [
      'waste_audit_requests',
      'solution_inquiries', 
      'support_tickets',
      'roi_calculations',
      'contact_messages',
      'site_visits'
    ];
    
    for (const table of tables) {
      try {
        const tableCheck = await client.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = $1
          );
        `, [table]);
        
        if (tableCheck.rows[0].exists) {
          console.log(`✅ Table '${table}' exists`);
          
          // Get row count
          const countResult = await client.query(`SELECT COUNT(*) FROM ${table}`);
          console.log(`   📊 Rows: ${countResult.rows[0].count}`);
        } else {
          console.log(`❌ Table '${table}' does not exist`);
        }
      } catch (error) {
        console.log(`❌ Error checking table '${table}':`, error.message);
      }
    }
    
    // Test inserting a sample record
    console.log('\n🧪 Testing data insertion...');
    try {
      const insertResult = await client.query(`
        INSERT INTO waste_audit_requests (name, email, company_size, locations, notes)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, name, email, created_at
      `, ['Test User', 'test@example.com', '11-50', '2-5', 'Connection test']);
      
      console.log('✅ Successfully inserted test record:');
      console.log('   ID:', insertResult.rows[0].id);
      console.log('   Name:', insertResult.rows[0].name);
      console.log('   Email:', insertResult.rows[0].email);
      console.log('   Created:', insertResult.rows[0].created_at);
      
      // Clean up test record
      await client.query('DELETE FROM waste_audit_requests WHERE email = $1', ['test@example.com']);
      console.log('🧹 Cleaned up test record');
      
    } catch (error) {
      console.log('❌ Error inserting test record:', error.message);
    }
    
    // Test views and functions
    console.log('\n🔍 Testing views and functions...');
    try {
      const viewResult = await client.query('SELECT * FROM form_submissions_summary LIMIT 5');
      console.log('✅ View "form_submissions_summary" works');
      console.log('   Sample data:', viewResult.rows.length, 'rows');
      
      const functionResult = await client.query('SELECT * FROM get_form_statistics(30)');
      console.log('✅ Function "get_form_statistics" works');
      console.log('   Statistics:', functionResult.rows.length, 'rows');
      
    } catch (error) {
      console.log('❌ Error testing views/functions:', error.message);
    }
    
    console.log('\n🎉 Database connection test completed successfully!');
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('\nTroubleshooting tips:');
    console.error('1. Check if DATABASE_PASSWORD environment variable is set');
    console.error('2. Verify your database password is correct');
    console.error('3. Ensure your IP is whitelisted in Supabase');
    console.error('4. Check if the database is accessible');
    
    process.exit(1);
  } finally {
    await client.end();
    console.log('\n🔌 Database connection closed');
  }
}

// Check if password is provided
if (!process.env.DATABASE_PASSWORD && config.password === '[YOUR-PASSWORD]') {
  console.error('❌ Please set the DATABASE_PASSWORD environment variable');
  console.error('Example: DATABASE_PASSWORD=your_password node scripts/test-db-connection.js');
  console.error('\nOr create a .env file with: DATABASE_PASSWORD=your_password');
  process.exit(1);
}

// Run the test
testConnection().catch(console.error);
