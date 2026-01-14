-- Add qualification fields to booking_leads table
ALTER TABLE public.booking_leads 
ADD COLUMN IF NOT EXISTS child_age TEXT,
ADD COLUMN IF NOT EXISTS child_interest TEXT;

-- Add indexes for the new fields
CREATE INDEX IF NOT EXISTS idx_booking_leads_child_age ON public.booking_leads(child_age);
CREATE INDEX IF NOT EXISTS idx_booking_leads_child_interest ON public.booking_leads(child_interest);

-- Add comments
COMMENT ON COLUMN public.booking_leads.child_age IS 'Age range of the child: 8-10, 11-13, other';
COMMENT ON COLUMN public.booking_leads.child_interest IS 'Primary interest of the child: games, creation, logic, unsure';
