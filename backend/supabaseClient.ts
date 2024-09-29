import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://xyzcompany.supabase.co', // Replace with your Supabase URL
  'your-public-anon-key'            // Replace with your Supabase anon key
);
