import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { SupabaseOutletContext } from '@/lib/supabase';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Link, useOutletContext } from '@remix-run/react';
import { Provider } from '@supabase/auth-js';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { getSupabaseWithSessionAndHeaders } = await import(
    '@/lib/superbase.server'
  );
  const { headers, userSession } =
    await getSupabaseWithSessionAndHeaders({
      request,
    });

  if (userSession) {
    return redirect('/', { headers });
  }
  return { success: true, headers };
};

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email không được để trống!' })
    .email('Đây không phải là email hợp lệ!'),
  password: z.string().min(6, { message: 'Mật khẩu không hợp lệ!' }),
});

export default function Page() {
  const { supabase } = useOutletContext<SupabaseOutletContext>();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof schema>) => {
    const { email, password } = values;
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error)
      return toast.error('Đăng nhập thất bại.', {
        richColors: true,
        description: 'Vui lòng thử lại sau!',
      });

    return toast.success('Đăng nhập thành công', {
      richColors: true,
    });
  };
  const handleSignIn = async (provider: Provider) => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: 'https://www.google.com/',
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl mb-3">
              Xin chào{' '}
              <span className="text-five-star">Nhà Lữ hành</span>
            </CardTitle>
            <CardDescription className="w-full">
              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => handleSignIn('google')}
                  variant="outline"
                  className="w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Đăng nhập bằng Google
                </Button>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                  <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                      Hoặc đăng nhập bằng
                    </span>
                  </div>
                  <div className="grid gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="m@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs ml-0.5" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs ml-0.5" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Đăng nhập
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    Chưa có tài khoản?{' '}
                    <Link
                      to="/"
                      className="underline underline-offset-4"
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
