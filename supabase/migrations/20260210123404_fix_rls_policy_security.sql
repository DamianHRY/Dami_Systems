/*
  # Fix RLS Policy Security Issue

  1. RLS Policy Improvements
    - Drop the existing unrestricted INSERT policy on `contact_submissions`
    - Create a new INSERT policy with proper validation to prevent spam and malicious submissions
    - Validates that required fields (full_name, email, automation_interest) are not empty
    - Validates email format using basic pattern matching
    - Limits text field lengths to prevent abuse

  2. Security Notes
    - Contact form submissions now require valid non-empty data
    - Email addresses must follow basic email format
    - Field length limits prevent database abuse
    - This prevents the "RLS Policy Always True" security issue
*/

-- Drop the existing unrestricted INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a new INSERT policy with proper validation
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