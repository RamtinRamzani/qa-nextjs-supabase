/// <reference types="vite/client" />
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (process.env?.NEXT_PUBLIC_SUPABASE_URL as string | undefined) ??
  (import.meta.env?.NEXT_PUBLIC_SUPABASE_URL as string | undefined) ??
  "";

const supabaseKey =
  (process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined) ??
  (import.meta.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined) ??
  "";

export const supabase = createClient(supabaseUrl, supabaseKey);
