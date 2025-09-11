-- FINAL RLS FIX - This will definitely work
-- Run this SQL script in Supabase SQL Editor

-- ==============================================
-- STEP 1: COMPLETELY DISABLE RLS ON ALL TABLES
-- ==============================================

ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries DISABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations DISABLE ROW LEVEL SECURITY;
ALTER TABLE waste_audit_requests DISABLE ROW LEVEL SECURITY;

-- ==============================================
-- STEP 2: DROP ALL EXISTING POLICIES
-- ==============================================

-- Drop all policies for contact_messages
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can read contact messages" ON contact_messages;
DROP POLICY IF EXISTS "anon users can insert" ON contact_messages;
DROP POLICY IF EXISTS "public users can insert" ON contact_messages;
DROP POLICY IF EXISTS "Allow all inserts" ON contact_messages;

-- Drop all policies for solution_inquiries
DROP POLICY IF EXISTS "Anyone can insert solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Authenticated users can read solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "anon_insert_solution_inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "auth_insert_solution_inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "auth_select_solution_inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "solution_inquiries_anonymous_insert" ON solution_inquiries;
DROP POLICY IF EXISTS "solution_inquiries_authenticated_insert" ON solution_inquiries;
DROP POLICY IF EXISTS "solution_inquiries_authenticated_select" ON solution_inquiries;
DROP POLICY IF EXISTS "solution_inquiries_authenticated_update" ON solution_inquiries;

-- Drop all policies for support_tickets
DROP POLICY IF EXISTS "Anyone can insert support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Authenticated users can read support tickets" ON support_tickets;
DROP POLICY IF EXISTS "anon_insert_support_tickets" ON support_tickets;
DROP POLICY IF EXISTS "auth_insert_support_tickets" ON support_tickets;
DROP POLICY IF EXISTS "auth_select_support_tickets" ON support_tickets;
DROP POLICY IF EXISTS "support_tickets_anonymous_insert" ON support_tickets;
DROP POLICY IF EXISTS "support_tickets_authenticated_insert" ON support_tickets;
DROP POLICY IF EXISTS "support_tickets_authenticated_select" ON support_tickets;
DROP POLICY IF EXISTS "support_tickets_authenticated_update" ON support_tickets;

-- Drop all policies for roi_calculations
DROP POLICY IF EXISTS "Anyone can insert roi calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Authenticated users can read roi calculations" ON roi_calculations;
DROP POLICY IF EXISTS "anon_insert_roi_calculations" ON roi_calculations;
DROP POLICY IF EXISTS "auth_insert_roi_calculations" ON roi_calculations;
DROP POLICY IF EXISTS "auth_select_roi_calculations" ON roi_calculations;
DROP POLICY IF EXISTS "roi_calculations_anonymous_insert" ON roi_calculations;
DROP POLICY IF EXISTS "roi_calculations_authenticated_insert" ON roi_calculations;
DROP POLICY IF EXISTS "roi_calculations_authenticated_select" ON roi_calculations;
DROP POLICY IF EXISTS "roi_calculations_authenticated_update" ON roi_calculations;

-- Drop all policies for waste_audit_requests
DROP POLICY IF EXISTS "Anyone can insert waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can read waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "anon_insert_waste_audit" ON waste_audit_requests;
DROP POLICY IF EXISTS "auth_insert_waste_audit" ON waste_audit_requests;
DROP POLICY IF EXISTS "auth_select_waste_audit" ON waste_audit_requests;
DROP POLICY IF EXISTS "waste_audit_anonymous_insert" ON waste_audit_requests;
DROP POLICY IF EXISTS "waste_audit_authenticated_insert" ON waste_audit_requests;
DROP POLICY IF EXISTS "waste_audit_authenticated_select" ON waste_audit_requests;
DROP POLICY IF EXISTS "waste_audit_authenticated_update" ON waste_audit_requests;

-- ==============================================
-- STEP 3: RE-ENABLE RLS ON ALL TABLES
-- ==============================================

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;
ALTER TABLE waste_audit_requests ENABLE ROW LEVEL SECURITY;

-- ==============================================
-- STEP 4: CREATE SIMPLE, CLEAN POLICIES
-- ==============================================

-- Contact Messages
CREATE POLICY "contact_messages_insert_policy" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "contact_messages_select_policy" ON contact_messages FOR SELECT TO authenticated USING (true);

-- Solution Inquiries
CREATE POLICY "solution_inquiries_insert_policy" ON solution_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "solution_inquiries_select_policy" ON solution_inquiries FOR SELECT TO authenticated USING (true);

-- Support Tickets
CREATE POLICY "support_tickets_insert_policy" ON support_tickets FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "support_tickets_select_policy" ON support_tickets FOR SELECT TO authenticated USING (true);

-- ROI Calculations
CREATE POLICY "roi_calculations_insert_policy" ON roi_calculations FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "roi_calculations_select_policy" ON roi_calculations FOR SELECT TO authenticated USING (true);

-- Waste Audit Requests
CREATE POLICY "waste_audit_requests_insert_policy" ON waste_audit_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "waste_audit_requests_select_policy" ON waste_audit_requests FOR SELECT TO authenticated USING (true);

-- ==============================================
-- STEP 5: VERIFY POLICIES
-- ==============================================

-- Check that policies were created
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename IN ('contact_messages', 'solution_inquiries', 'support_tickets', 'roi_calculations', 'waste_audit_requests')
ORDER BY tablename, policyname;

-- ==============================================
-- STEP 6: TEST INSERTS (Optional - for verification)
-- ==============================================

-- Test insert into contact_messages (this should work now)
-- INSERT INTO contact_messages (name, email, message) VALUES ('Test User', 'test@example.com', 'Test message');

-- Test insert into solution_inquiries (this should work now)
-- INSERT INTO solution_inquiries (solution_type, name, email, company) VALUES ('ai-forecasting', 'Test User', 'test@example.com', 'Test Company');

-- Test insert into support_tickets (this should work now)
-- INSERT INTO support_tickets (first_name, last_name, email, subject, priority, message) VALUES ('Test', 'User', 'test@example.com', 'Test Subject', 'Low - General question', 'Test message');

-- Test insert into roi_calculations (this should work now)
-- INSERT INTO roi_calculations (name, email, company, company_size, locations) VALUES ('Test User', 'test@example.com', 'Test Company', '1-10 employees', '1 location');

-- Test insert into waste_audit_requests (this should work now)
-- INSERT INTO waste_audit_requests (name, email, company_size, locations) VALUES ('Test User', 'test@example.com', '1-10', '1');
