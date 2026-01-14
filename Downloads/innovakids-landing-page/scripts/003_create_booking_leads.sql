-- Create table for storing booking/session leads
CREATE TABLE IF NOT EXISTS public.booking_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  country_code TEXT NOT NULL,
  country_name TEXT NOT NULL,
  timezone TEXT NOT NULL,
  selected_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add index for faster queries by email and date
CREATE INDEX IF NOT EXISTS idx_booking_leads_email ON public.booking_leads(email);
CREATE INDEX IF NOT EXISTS idx_booking_leads_date ON public.booking_leads(selected_date);
CREATE INDEX IF NOT EXISTS idx_booking_leads_created ON public.booking_leads(created_at);

-- Since this is for marketing/lead generation, we don't need RLS
-- The data is inserted from the public website without authentication
ALTER TABLE public.booking_leads DISABLE ROW LEVEL SECURITY;
