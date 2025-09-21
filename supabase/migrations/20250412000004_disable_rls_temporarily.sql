/*
  # Temporarily Disable RLS for Testing
  
  This migration temporarily disables RLS to test if forms work
  without security policies. Use this only for testing!
*/

-- Temporarily disable RLS on all form tables
ALTER TABLE waste_audit_requests DISABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries DISABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations DISABLE ROW LEVEL SECURITY;

-- Grant full access to anonymous users (TEMPORARY - FOR TESTING ONLY)
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Test insert
INSERT INTO waste_audit_requests (name, email, company_size, locations, source)
VALUES ('No RLS Test', 'no-rls-test@example.com', '11-50', '2-5', 'no_rls_test');

-- Clean up test record
DELETE FROM waste_audit_requests WHERE email = 'no-rls-test@example.com' AND source = 'no_rls_test';

SELECT 'RLS temporarily disabled for testing. Forms should now work!' as status;


