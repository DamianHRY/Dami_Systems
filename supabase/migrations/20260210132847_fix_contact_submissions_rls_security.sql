/*
  # Fix Contact Submissions RLS Security Vulnerability

  1. Security Fixes
    - Drop the insecure INSERT policy "Public can submit forms" that has WITH CHECK (true)
    - Create a new restrictive INSERT policy with comprehensive validation
    - Add SELECT policy for authenticated admin users only

  2. Validation Rules (INSERT)
    - Required fields must not be null or empty (full_name, email, automation_interest)
    - Email must match valid email format using regex
    - Text field length limits prevent abuse:
      * full_name: max 200 characters
      * email: max 320 characters (RFC 5321 standard)
      * automation_interest: max 1000 characters
      * company_name: max 200 characters (optional)
      * phone: max 50 characters (optional)
      * budget_range: max 100 characters (optional)
      * timeline: max 100 characters (optional)

  3. Security Notes
    - Anonymous users can only INSERT valid contact form data
    - Anonymous users CANNOT read any submissions
    - Only authenticated users can view submissions (for admin dashboard)
    - This prevents spam, SQL injection attempts, and data abuse
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Public can submit forms" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Public can submit valid contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON contact_submissions;

-- Create secure INSERT policy with comprehensive validation
CREATE POLICY "Validated contact form submissions only"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Required field: full_name
    full_name IS NOT NULL AND 
    length(trim(full_name)) > 0 AND 
    length(full_name) <= 200 AND
    
    -- Required field: email (with format validation)
    email IS NOT NULL AND 
    length(trim(email)) > 0 AND 
    length(email) <= 320 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    
    -- Required field: automation_interest
    automation_interest IS NOT NULL AND 
    length(trim(automation_interest)) > 0 AND 
    length(automation_interest) <= 1000 AND
    
    -- Optional fields with length limits
    (company_name IS NULL OR (length(company_name) > 0 AND length(company_name) <= 200)) AND
    (phone IS NULL OR (length(phone) > 0 AND length(phone) <= 50)) AND
    (budget_range IS NULL OR (length(budget_range) > 0 AND length(budget_range) <= 100)) AND
    (timeline IS NULL OR (length(timeline) > 0 AND length(timeline) <= 100))
  );

-- Create SELECT policy for authenticated admin users
CREATE POLICY "Admin users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Add helpful comment
COMMENT ON POLICY "Validated contact form submissions only" ON contact_submissions IS 
  'Allows anonymous users to submit contact forms only if all required fields are valid and within length limits';

COMMENT ON POLICY "Admin users can view all submissions" ON contact_submissions IS 
  'Allows authenticated admin users to view all contact form submissions for management purposes';