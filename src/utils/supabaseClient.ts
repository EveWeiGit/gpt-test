// src/supabaseClient.js or .ts
import { createClient } from '@supabase/supabase-js';
console.log('%c [ createClient ]-6', 'font-size:13px; background:pink; color:#bf2f;',import.meta.env,process.env,import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  console.log('%c [ supabase ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', supabase)

