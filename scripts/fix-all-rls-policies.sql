-- Comprehensive RLS Policy Fix for ALL Form Tables
-- This script will ensure anonymous users can insert data into all form tables

-- ==============================================
-- 1. CONTACT_MESSAGES TABLE
-- ==============================================

-- Disable RLS temporarily
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies
DROP POLICY IF EXISTS "Authenticated users can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert messages" ON contact_messages;
DROP POLICY IF EXISTS "anon users can insert" ON contact_messages;
DROP POLICY IF EXISTS "public users can insert" ON contact_messages;

-- Re-enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ==============================================
-- 2. SOLUTION_INQUIRIES TABLE
-- ==============================================

-- Disable RLS temporarily
ALTER TABLE solution_inquiries DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies
DROP POLICY IF EXISTS "Authenticated users can read solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Anyone can insert solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "anon users can insert" ON solution_inquiries;
DROP POLICY IF EXISTS "public users can insert" ON solution_inquiries;

-- Re-enable RLS
ALTER TABLE solution_inquiries ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Authenticated users can read solution inquiries"
  ON solution_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert solution inquiries"
  ON solution_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ==============================================
-- 3. SUPPORT_TICKETS TABLE
-- ==============================================

-- Disable RLS temporarily
ALTER TABLE support_tickets DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies
DROP POLICY IF EXISTS "Authenticated users can read support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Anyone can insert support tickets" ON support_tickets;
DROP POLICY IF EXISTS "anon users can insert" ON support_tickets;
DROP POLICY IF EXISTS "public users can insert" ON support_tickets;

-- Re-enable RLS
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Authenticated users can read support tickets"
  ON support_tickets
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert support tickets"
  ON support_tickets
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ==============================================
-- 4. ROI_CALCULATIONS TABLE
-- ==============================================

-- Disable RLS temporarily
ALTER TABLE roi_calculations DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies
DROP POLICY IF EXISTS "Authenticated users can read roi calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Anyone can insert roi calculations" ON roi_calculations;
DROP POLICY IF EXISTS "anon users can insert" ON roi_calculations;
DROP POLICY IF EXISTS "public users can insert" ON roi_calculations;

-- Re-enable RLS
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Authenticated users can read roi calculations"
  ON roi_calculations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert roi calculations"
  ON roi_calculations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ==============================================
-- 5. WASTE_AUDIT_REQUESTS TABLE
-- ==============================================

-- Disable RLS temporarily
ALTER TABLE waste_audit_requests DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies
DROP POLICY IF EXISTS "Authenticated users can read waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Anyone can insert waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "anon users can insert" ON waste_audit_requests;
DROP POLICY IF EXISTS "public users can insert" ON waste_audit_requests;

-- Re-enable RLS
ALTER TABLE waste_audit_requests ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Authenticated users can read waste audit requests"
  ON waste_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert waste audit requests"
  ON waste_audit_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- ==============================================
-- VERIFICATION QUERIES
-- ==============================================

-- Verify all policies were created
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

-- Test inserts (these should work now)
-- Note: These are just for verification - the actual test will be done by the application
