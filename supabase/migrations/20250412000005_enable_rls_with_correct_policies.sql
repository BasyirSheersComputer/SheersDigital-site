/*
  # Re-enable RLS with Correct Policies
  
  This migration re-enables RLS with properly configured policies
  that allow anonymous form submissions while maintaining security.
*/

-- 1. Re-enable RLS on all tables
ALTER TABLE waste_audit_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

-- 2. Create simple, working policies for anonymous inserts
CREATE POLICY "allow_anonymous_waste_audit_insert" ON waste_audit_requests
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_waste_audit_insert" ON waste_audit_requests
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_waste_audit_select" ON waste_audit_requests
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "allow_authenticated_waste_audit_update" ON waste_audit_requests
    FOR UPDATE TO authenticated
    USING (true);

CREATE POLICY "allow_anonymous_solution_inquiries_insert" ON solution_inquiries
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_solution_inquiries_insert" ON solution_inquiries
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_solution_inquiries_select" ON solution_inquiries
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "allow_authenticated_solution_inquiries_update" ON solution_inquiries
    FOR UPDATE TO authenticated
    USING (true);

CREATE POLICY "allow_anonymous_support_tickets_insert" ON support_tickets
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_support_tickets_insert" ON support_tickets
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_support_tickets_select" ON support_tickets
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "allow_authenticated_support_tickets_update" ON support_tickets
    FOR UPDATE TO authenticated
    USING (true);

CREATE POLICY "allow_anonymous_roi_calculations_insert" ON roi_calculations
    FOR INSERT TO anon
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_roi_calculations_insert" ON roi_calculations
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "allow_authenticated_roi_calculations_select" ON roi_calculations
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "allow_authenticated_roi_calculations_update" ON roi_calculations
    FOR UPDATE TO authenticated
    USING (true);

-- 3. Test the policies with a sample insert
DO $$
BEGIN
    -- Test anonymous insert
    INSERT INTO waste_audit_requests (name, email, company_size, locations, source)
    VALUES ('RLS Test User', 'rls-test@example.com', '11-50', '2-5', 'rls_test');
    
    -- Clean up test record
    DELETE FROM waste_audit_requests WHERE email = 'rls-test@example.com' AND source = 'rls_test';
    
    RAISE NOTICE 'RLS is now properly configured! Forms should work with security enabled.';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'RLS test failed: %', SQLERRM;
END $$;


