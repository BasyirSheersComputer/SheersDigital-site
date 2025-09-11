-- Comprehensive RLS Policy Fix for contact_messages table
-- This script will ensure anonymous users can insert contact form data

-- First, disable RLS temporarily to clean up any conflicting policies
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies to start fresh
DROP POLICY IF EXISTS "Authenticated users can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert messages" ON contact_messages;
DROP POLICY IF EXISTS "anon users can insert" ON contact_messages;
DROP POLICY IF EXISTS "public users can insert" ON contact_messages;

-- Re-enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read messages
CREATE POLICY "Authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for ANYONE (including anonymous users) to insert messages
CREATE POLICY "Anyone can insert messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Verify the policies were created
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
WHERE tablename = 'contact_messages';

-- Test insert as anonymous user (this should work now)
-- Note: This is just for verification - the actual test will be done by the application
