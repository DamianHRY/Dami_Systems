/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `company_name` (text) - Company name
      - `full_name` (text, required) - Full name of the contact
      - `email` (text, required) - Email address
      - `phone` (text, optional) - Phone number
      - `automation_interest` (text, required) - What they want to automate
      - `budget_range` (text, optional) - Budget range
      - `timeline` (text, optional) - Project timeline
      - `created_at` (timestamptz) - Submission timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions with proper validation
    - Add policy for reading submissions (authenticated users only - for admin panel)

  3. Important Notes
    - This table stores all contact form submissions from the website
    - Public users can insert valid submissions but cannot read them
    - Only authenticated users (admins) can view submissions
    - All submissions are timestamped for tracking purposes
    - Validation ensures required fields are present and email format is valid
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  automation_interest text NOT NULL,
  budget_range text,
  timeline text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit valid contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure required fields are not null and not empty
    full_name IS NOT NULL AND 
    length(trim(full_name)) > 0 AND 
    length(full_name) <= 200 AND
    
    email IS NOT NULL AND 
    length(trim(email)) > 0 AND 
    length(email) <= 320 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    
    automation_interest IS NOT NULL AND 
    length(trim(automation_interest)) > 0 AND 
    length(automation_interest) <= 1000 AND
    
    -- Optional fields have reasonable length limits
    (company_name IS NULL OR length(company_name) <= 200) AND
    (phone IS NULL OR length(phone) <= 50) AND
    (budget_range IS NULL OR length(budget_range) <= 100) AND
    (timeline IS NULL OR length(timeline) <= 100)
  );

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);