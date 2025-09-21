/*
  # Clean Forms Database Schema (Handles Existing Objects)
  
  This migration creates all necessary tables for the WasteWise application forms
  and handles cases where some objects might already exist.
*/

-- 1. Drop existing policies if they exist (to avoid conflicts)
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

-- 2. Create tables if they don't exist
CREATE TABLE IF NOT EXISTS waste_audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company_size text NOT NULL CHECK (company_size IN ('1-10', '11-50', '51-200', '200+')),
  locations text NOT NULL CHECK (locations IN ('1', '2-5', '6-20', '20+')),
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'audit_scheduled', 'audit_completed', 'proposal_sent', 'closed')),
  source text DEFAULT 'hero_form',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  notes text,
  assigned_to uuid REFERENCES auth.users(id),
  estimated_waste_savings numeric(10,2),
  follow_up_date timestamptz
);

CREATE TABLE IF NOT EXISTS solution_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  solution_type text NOT NULL CHECK (solution_type IN (
    'ai-forecasting', 'compliance-automation', 'waste-logging-automation', 
    'inventory-integration', 'supplier-integration', 'waste-wise-platform', 'roi-calculator'
  )),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  phone text,
  company_size text CHECK (company_size IN ('1-10 employees', '11-50 employees', '51-200 employees', '200+ employees')),
  locations text CHECK (locations IN ('1 location', '2-5 locations', '6-20 locations', '20+ locations')),
  current_waste text CHECK (current_waste IN ('Under RM 5,000', 'RM 5,000 - RM 15,000', 'RM 15,000 - RM 25,000', 'RM 25,000+')),
  monthly_revenue text CHECK (monthly_revenue IN ('Under RM 50,000', 'RM 50,000 - RM 200,000', 'RM 200,000 - RM 500,000', 'RM 500,000+')),
  specific_needs text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'proposal_sent', 'negotiating', 'closed', 'converted')),
  priority text DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  assigned_to uuid REFERENCES auth.users(id),
  estimated_value numeric(10,2),
  follow_up_date timestamptz,
  notes text
);

CREATE TABLE IF NOT EXISTS support_tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  priority text NOT NULL CHECK (priority IN ('Low - General question', 'Medium - Feature request', 'High - System issue', 'Urgent - System down')),
  message text NOT NULL,
  status text DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'waiting_for_customer', 'resolved', 'closed')),
  category text DEFAULT 'general' CHECK (category IN ('general', 'technical', 'billing', 'feature_request', 'bug_report')),
  assigned_to uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  resolved_at timestamptz,
  customer_satisfaction_rating integer CHECK (customer_satisfaction_rating >= 1 AND customer_satisfaction_rating <= 5),
  internal_notes text,
  tags text[]
);

CREATE TABLE IF NOT EXISTS roi_calculations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  company_size text CHECK (company_size IN ('1-10 employees', '11-50 employees', '51-200 employees', '200+ employees')),
  locations text CHECK (locations IN ('1 location', '2-5 locations', '6-20 locations', '20+ locations')),
  monthly_revenue numeric(12,2),
  current_waste numeric(12,2),
  calculated_savings numeric(12,2),
  roi_percentage numeric(5,2),
  payback_period_months numeric(5,2),
  status text DEFAULT 'calculated' CHECK (status IN ('calculated', 'proposal_sent', 'negotiating', 'closed', 'converted')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  assigned_to uuid REFERENCES auth.users(id),
  follow_up_date timestamptz,
  notes text
);

-- 3. Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_waste_audit_requests_email ON waste_audit_requests(email);
CREATE INDEX IF NOT EXISTS idx_waste_audit_requests_status ON waste_audit_requests(status);
CREATE INDEX IF NOT EXISTS idx_waste_audit_requests_created_at ON waste_audit_requests(created_at);

CREATE INDEX IF NOT EXISTS idx_solution_inquiries_email ON solution_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_solution_inquiries_solution_type ON solution_inquiries(solution_type);
CREATE INDEX IF NOT EXISTS idx_solution_inquiries_status ON solution_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_solution_inquiries_created_at ON solution_inquiries(created_at);

CREATE INDEX IF NOT EXISTS idx_support_tickets_email ON support_tickets(email);
CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);
CREATE INDEX IF NOT EXISTS idx_support_tickets_priority ON support_tickets(priority);
CREATE INDEX IF NOT EXISTS idx_support_tickets_created_at ON support_tickets(created_at);

CREATE INDEX IF NOT EXISTS idx_roi_calculations_email ON roi_calculations(email);
CREATE INDEX IF NOT EXISTS idx_roi_calculations_status ON roi_calculations(status);
CREATE INDEX IF NOT EXISTS idx_roi_calculations_created_at ON roi_calculations(created_at);

-- 4. Enable Row Level Security on all tables
ALTER TABLE waste_audit_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE roi_calculations ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS policies
CREATE POLICY "Anyone can insert waste audit requests"
  ON waste_audit_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read waste audit requests"
  ON waste_audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update waste audit requests"
  ON waste_audit_requests
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert solution inquiries"
  ON solution_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read solution inquiries"
  ON solution_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update solution inquiries"
  ON solution_inquiries
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert support tickets"
  ON support_tickets
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read support tickets"
  ON support_tickets
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update support tickets"
  ON support_tickets
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can insert ROI calculations"
  ON roi_calculations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read ROI calculations"
  ON roi_calculations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update ROI calculations"
  ON roi_calculations
  FOR UPDATE
  TO authenticated
  USING (true);

-- 6. Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 7. Create triggers for updated_at columns
DROP TRIGGER IF EXISTS update_waste_audit_requests_updated_at ON waste_audit_requests;
CREATE TRIGGER update_waste_audit_requests_updated_at
    BEFORE UPDATE ON waste_audit_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_solution_inquiries_updated_at ON solution_inquiries;
CREATE TRIGGER update_solution_inquiries_updated_at
    BEFORE UPDATE ON solution_inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_support_tickets_updated_at ON support_tickets;
CREATE TRIGGER update_support_tickets_updated_at
    BEFORE UPDATE ON support_tickets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_roi_calculations_updated_at ON roi_calculations;
CREATE TRIGGER update_roi_calculations_updated_at
    BEFORE UPDATE ON roi_calculations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 8. Create views for common queries
CREATE OR REPLACE VIEW form_submissions_summary AS
SELECT 
  'waste_audit' as form_type,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN status = 'new' THEN 1 END) as new_submissions,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_submissions,
  AVG(EXTRACT(EPOCH FROM (updated_at - created_at))/86400) as avg_days_to_resolution
FROM waste_audit_requests
UNION ALL
SELECT 
  'solution_inquiry' as form_type,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN status = 'new' THEN 1 END) as new_submissions,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_submissions,
  AVG(EXTRACT(EPOCH FROM (updated_at - created_at))/86400) as avg_days_to_resolution
FROM solution_inquiries
UNION ALL
SELECT 
  'support_ticket' as form_type,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN status = 'open' THEN 1 END) as new_submissions,
  COUNT(CASE WHEN status = 'resolved' THEN 1 END) as converted_submissions,
  AVG(EXTRACT(EPOCH FROM (resolved_at - created_at))/86400) as avg_days_to_resolution
FROM support_tickets
UNION ALL
SELECT 
  'roi_calculation' as form_type,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN status = 'calculated' THEN 1 END) as new_submissions,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_submissions,
  AVG(EXTRACT(EPOCH FROM (updated_at - created_at))/86400) as avg_days_to_resolution
FROM roi_calculations;

-- 9. Create function to get form statistics
CREATE OR REPLACE FUNCTION get_form_statistics(days_back integer DEFAULT 30)
RETURNS TABLE (
  form_type text,
  total_submissions bigint,
  new_submissions bigint,
  converted_submissions bigint,
  conversion_rate numeric
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    summary.form_type,
    summary.total_submissions,
    summary.new_submissions,
    summary.converted_submissions,
    CASE 
      WHEN summary.total_submissions > 0 
      THEN ROUND((summary.converted_submissions::numeric / summary.total_submissions::numeric) * 100, 2)
      ELSE 0 
    END as conversion_rate
  FROM form_submissions_summary summary
  WHERE summary.total_submissions > 0;
END;
$$ LANGUAGE plpgsql;

-- 10. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;

-- 11. Add table comments
COMMENT ON TABLE waste_audit_requests IS 'Stores waste audit requests from the Hero component form';
COMMENT ON TABLE solution_inquiries IS 'Stores solution-specific inquiries from the SolutionForms component';
COMMENT ON TABLE support_tickets IS 'Stores support tickets from the SupportCenter component';
COMMENT ON TABLE roi_calculations IS 'Stores ROI calculations from the ROI calculator form';
COMMENT ON VIEW form_submissions_summary IS 'Summary view of all form submissions across different form types';
COMMENT ON FUNCTION get_form_statistics IS 'Function to get form submission statistics for the last N days';


