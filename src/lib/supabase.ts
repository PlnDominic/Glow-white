import { createClient } from "@supabase/supabase-js";

// Server-only: uses the service-role key, which bypasses RLS. Never import this
// from a client component or expose the key via a NEXT_PUBLIC_ variable.
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
