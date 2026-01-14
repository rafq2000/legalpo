-- Create waitlist table for upcoming courses
CREATE TABLE IF NOT EXISTS public.course_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  country_code TEXT,
  course_name TEXT NOT NULL,
  child_age TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_course_waitlist_email ON public.course_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_course_waitlist_course ON public.course_waitlist(course_name);
CREATE INDEX IF NOT EXISTS idx_course_waitlist_created ON public.course_waitlist(created_at);

-- Enable Row Level Security
ALTER TABLE public.course_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (join waitlist)
CREATE POLICY "Anyone can join waitlist" ON public.course_waitlist
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- Add comments
COMMENT ON TABLE public.course_waitlist IS 'Waitlist registrations for upcoming courses';
COMMENT ON COLUMN public.course_waitlist.email IS 'Contact email';
COMMENT ON COLUMN public.course_waitlist.course_name IS 'Name of the course they are interested in';
