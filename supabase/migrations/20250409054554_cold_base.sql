/*
  # Contact Form Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `company` (text)
      - `service` (text)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text) - For tracking message status (new, read, replied, etc.)

  2. Security
    - Enable RLS on contact_messages table
    - Add policy for authenticated users to read messages
    - Add policy for anon/authenticated users to insert messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read messages
CREATE POLICY "Authenticated users can read messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow anyone to insert messages
CREATE POLICY "Anyone can insert messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);