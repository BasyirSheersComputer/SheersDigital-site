/*
  # Site Visits Tracking Table

  1. New Tables
    - `site_visits`
      - `id` (uuid, primary key)
      - `ip_address` (text) - Visitor's IP address
      - `user_agent` (text) - Browser/client information
      - `path` (text) - Page URL path visited
      - `created_at` (timestamp) - Visit timestamp
      - `is_bot` (boolean) - Bot detection flag
      - `country` (text) - Country code from IP (optional)

  2. Security
    - Enable RLS on site_visits table
    - Add policy for authenticated users to read visits
    - Add policy for edge functions to insert visits
*/

CREATE TABLE IF NOT EXISTS site_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  user_agent text,
  path text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_bot boolean DEFAULT false,
  country text
);

-- Enable Row Level Security
ALTER TABLE site_visits ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read visits
CREATE POLICY "Authenticated users can read visits"
  ON site_visits
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow edge functions to insert visits
CREATE POLICY "Edge functions can insert visits"
  ON site_visits
  FOR INSERT
  TO service_role
  WITH CHECK (true);