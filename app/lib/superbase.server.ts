import { parseCookies } from '@supabase/auth-helpers-shared';
import { createServerClient, serialize } from '@supabase/ssr';

export const getSupabaseEnv = () => ({
  SUPABASE_URL: process.env.SUPABASE_URL!,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
});

export function getSupabaseWithHeaders({
  request,
}: {
  request: Request;
}) {
  const cookies = parseCookies(request.headers.get('Cookie') ?? '');
  const headers = new Headers();

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append(
            'Set-Cookie',
            serialize(key, value, options),
          );
        },
        remove(key, options) {
          headers.append('Set-Cookie', serialize(key, '', options));
        },
      },
    },
  );

  return { supabase, headers };
}

export async function getSupabaseWithSessionAndHeaders({
  request,
}: {
  request: Request;
}) {
  const { supabase, headers } = getSupabaseWithHeaders({
    request,
  });
  const {
    data: { user: userSession },
  } = await supabase.auth.getUser();
  const {
    data: { session: serverSession },
  } = await supabase.auth.getSession();

  return { userSession, serverSession, headers, supabase };
}
