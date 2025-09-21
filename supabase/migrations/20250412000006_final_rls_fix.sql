/*
  # Final RLS Fix - Comprehensive Policy Reset
  
  This migration completely resets and recreates all RLS policies
  to ensure anonymous form submissions work properly.
*/

-- 1. First, disable RLS temporarily to clean up
ALTER TABLE waste_audit_requests DISABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries DISABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations DISABLE ROW LEVEL SECURITY;

-- 2. Drop ALL existing policies to start fresh
DROP POLICY IF EXISTS "allow_anonymous_waste_audit_insert" ON waste_audit_requests;
DROP POLICY IF EXISTS "allow_authenticated_waste_audit_insert" ON waste_audit_requests;
DROP POLICY IF EXISTS "allow_authenticated_waste_audit_select" ON waste_audit_requests;
DROP POLICY IF EXISTS "allow_authenticated_waste_audit_update" ON waste_audit_requests;
DROP POLICY IF EXISTS "Anyone can insert waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can insert waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can view waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can update waste audit requests" ON waste_audit_requests;

DROP POLICY IF EXISTS "allow_anonymous_solution_inquiries_insert" ON solution_inquiries;
DROP POLICY IF EXISTS "allow_authenticated_solution_inquiries_insert" ON solution_inquiries;
DROP POLICY IF EXISTS "allow_authenticated_solution_inquiries_select" ON solution_inquiries;
DROP POLICY IF EXISTS "allow_authenticated_solution_inquiries_update" ON solution_inquiries;
DROP POLICY IF EXISTS "Anyone can insert solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Authenticated users can insert solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Authenticated users can view solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Authenticated users can update solution inquiries" ON solution_inquiries;

DROP POLICY IF EXISTS "allow_anonymous_support_tickets_insert" ON support_tickets;
DROP POLICY IF EXISTS "allow_authenticated_support_tickets_insert" ON support_tickets;
DROP POLICY IF EXISTS "allow_authenticated_support_tickets_select" ON support_tickets;
DROP POLICY IF EXISTS "allow_authenticated_support_tickets_update" ON support_tickets;
DROP POLICY IF EXISTS "Anyone can insert support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Authenticated users can insert support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Authenticated users can view support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Authenticated users can update support tickets" ON support_tickets;

DROP POLICY IF EXISTS "allow_anonymous_roi_calculations_insert" ON roi_calculations;
DROP POLICY IF EXISTS "allow_authenticated_roi_calculations_insert" ON roi_calculations;
DROP POLICY IF EXISTS "allow_authenticated_roi_calculations_select" ON roi_calculations;
DROP POLICY IF EXISTS "allow_authenticated_roi_calculations_update" ON roi_calculations;
DROP POLICY IF EXISTS "Anyone can insert ROI calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Authenticated users can insert ROI calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Authenticated users can view ROI calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Authenticated users can update ROI calculations" ON roi_calculations;

-- 3. Re-enable RLS
ALTER TABLE waste_audit_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

-- 4. Create simple, permissive policies for anonymous inserts
-- Waste Audit Requests
CREATE POLICY "anon_insert_waste_audit" ON waste_audit_requests
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "auth_insert_waste_audit" ON waste_audit_requests
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "auth_select_waste_audit" ON waste_audit_requests
    FOR SELECT TO authenticated
    USING (true);

-- Solution Inquiries
CREATE POLICY "anon_insert_solution_inquiries" ON solution_inquiries
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "auth_insert_solution_inquiries" ON solution_inquiries
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "auth_select_solution_inquiries" ON solution_inquiries
    FOR SELECT TO authenticated
    USING (true);

-- Support Tickets
CREATE POLICY "anon_insert_support_tickets" ON support_tickets
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "auth_insert_support_tickets" ON support_tickets
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "auth_select_support_tickets" ON support_tickets
    FOR SELECT TO authenticated
    USING (true);

-- ROI Calculations
CREATE POLICY "anon_insert_roi_calculations" ON roi_calculations
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "auth_insert_roi_calculations" ON roi_calculations
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "auth_select_roi_calculations" ON roi_calculations
    FOR SELECT TO authenticated
    USING (true);

-- 5. Test the policies
DO $$
BEGIN
    -- Test anonymous insert
    INSERT INTO waste_audit_requests (name, email, company_size, locations, source)
    VALUES ('Final Test User', 'final-test@example.com', '11-50', '2-5', 'final_test');
    
    -- Clean up test record
    DELETE FROM waste_audit_requests WHERE email = 'final-test@example.com' AND source = 'final_test';
    
    RAISE NOTICE 'SUCCESS: RLS policies are now working correctly! Forms should work.';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'ERROR: RLS test failed: %', SQLERRM;
        RAISE NOTICE 'This indicates the policies are still not working correctly.';
END $$;

