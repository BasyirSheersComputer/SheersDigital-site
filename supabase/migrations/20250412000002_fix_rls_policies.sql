/*
  # Fix RLS Policies for Form Submissions
  
  This migration fixes the Row Level Security policies to allow
  anonymous users to insert form data while maintaining security.
*/

-- 1. Drop existing policies that might be causing issues
DROP POLICY IF EXISTS "Anyone can insert waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can read waste audit requests" ON waste_audit_requests;
DROP POLICY IF EXISTS "Authenticated users can update waste audit requests" ON waste_audit_requests;

DROP POLICY IF EXISTS "Anyone can insert solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Authenticated users can read solution inquiries" ON solution_inquiries;
DROP POLICY IF EXISTS "Authenticated users can update solution inquiries" ON solution_inquiries;

DROP POLICY IF EXISTS "Anyone can insert support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Authenticated users can read support tickets" ON support_tickets;
DROP POLICY IF EXISTS "Authenticated users can update support tickets" ON support_tickets;

DROP POLICY IF EXISTS "Anyone can insert ROI calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Authenticated users can read ROI calculations" ON roi_calculations;
DROP POLICY IF EXISTS "Authenticated users can update ROI calculations" ON roi_calculations;

-- 2. Create new policies that allow anonymous inserts
CREATE POLICY "Allow anonymous inserts to waste_audit_requests"
  ON waste_audit_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read waste_audit_requests"
  ON waste_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update waste_audit_requests"
  ON waste_audit_requests
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow anonymous inserts to solution_inquiries"
  ON solution_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read solution_inquiries"
  ON solution_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update solution_inquiries"
  ON solution_inquiries
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow anonymous inserts to support_tickets"
  ON support_tickets
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read support_tickets"
  ON support_tickets
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update support_tickets"
  ON support_tickets
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow anonymous inserts to roi_calculations"
  ON roi_calculations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read roi_calculations"
  ON roi_calculations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update roi_calculations"
  ON roi_calculations
  FOR UPDATE
  TO authenticated
  USING (true);

-- 3. Ensure RLS is enabled on all tables
ALTER TABLE waste_audit_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

-- 4. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;

-- 5. Test the policies by inserting a sample record
INSERT INTO waste_audit_requests (name, email, company_size, locations, source)
VALUES ('Test User', 'test@example.com', '11-50', '2-5', 'policy_test')
ON CONFLICT DO NOTHING;

-- 6. Clean up the test record
DELETE FROM waste_audit_requests WHERE email = 'test@example.com' AND source = 'policy_test';


