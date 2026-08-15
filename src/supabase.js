import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function createFallbackClient() {
  const emptyQuery = {
    eq: () => ({
      single: async () => ({ data: null, error: null }),
      limit: async () => ({ data: [], error: null }),
    }),
    single: async () => ({ data: null, error: null }),
    limit: async () => ({ data: [], error: null }),
  };

  return {
    auth: {
      signUp: async () => ({ data: { user: null }, error: null }),
      signInWithPassword: async () => ({ data: { user: null }, error: null }),
      signOut: async () => ({ error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
    },
    from: () => ({
      select: () => emptyQuery,
      insert: async () => ({ error: null }),
      update: () => ({ eq: async () => ({ error: null }) }),
      upsert: async () => ({ error: null }),
      delete: async () => ({ error: null }),
    }),
  };
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars missing; using local fallback mode.');
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createFallbackClient();
