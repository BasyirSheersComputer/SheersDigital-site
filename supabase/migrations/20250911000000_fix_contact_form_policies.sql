/*
  # Fix Contact Form RLS Policies

  This migration ensures that anonymous users can insert contact form messages
  while maintaining security for reading messages.
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Authenticated users can read messages" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert messages" ON contact_messages;

-- Create policy for authenticated users to read messages
CREATE POLICY "Authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for anyone (including anonymous users) to insert messages
CREATE POLICY "Anyone can insert messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Verify RLS is enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
