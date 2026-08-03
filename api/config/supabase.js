import { createClient } from '@supabase/supabase-js';

function safeCreateClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
  } catch {
    return null;
  }

  try {
    return createClient(url, key);
  } catch (e) {
    console.warn('Supabase client could not be initialized:', e.message);
    return null;
  }
}

export const supabase = safeCreateClient();
