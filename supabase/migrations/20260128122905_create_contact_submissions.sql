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
    - Add policy for inserting new submissions (public access for form submission)
    - Add policy for reading submissions (authenticated users only - for admin panel)

  3. Important Notes
    - This table stores all contact form submissions from the website
    - Public users can insert new submissions but cannot read them
    - Only authenticated users (admins) can view submissions
    - All submissions are timestamped for tracking purposes
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

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);