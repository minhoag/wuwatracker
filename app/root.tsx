import { AppSidebar } from '@/components/app-sidebar';
import { Footer } from '@/components/footer';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ScrollProgress from '@/components/ui/scroll-progress';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { BadgeCheck, CreditCard, LogIn, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import styles from './tailwind.css?url';

export const links: LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  { rel: 'stylesheet', href: styles },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export const vietnamese: { [key: string]: string } = {
  '/': 'Trang chủ',
  '/trackers': 'Theo dõi triệu tập',
  '/global': 'Số liệu toàn cầu',
  '/import': 'Nhập dữ liệu',
};

export function Layout({ children }: { children: React.ReactNode }) {
  const currentRoute = useLocation();
  const matches = vietnamese[currentRoute.pathname];
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset>
            <ScrollProgress className="top-0" />
            <div className="border-b relative border-border px-4 py-2 bg-sidebar/95 shadow backdrop-blur supports-[backdrop-filter]:bg-sidebar/60 dark:shadow-none">
              <div className="flex gap-2">
                <div className="flex grow gap-3">
                  <div className="flex grow flex-col justify-start gap-3 md:flex-row text-xs sm:text-sm text-muted-foreground">
                    <a
                      className="px-2.5 py-0.5 group hover:text-foreground transition-colors"
                      href="/en/import/legacy"
                    >
                      Upgrade your old pulls to the new format here
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-2000 ease-in-out group-hover:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-10 bg-black/5 dark:bg-white/15"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                  aria-label="Close banner"
                >
                  <X />
                </button>
              </div>
            </div>
            <header className="flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/60 px-4 border-b shadow dark:shadow-none sticky top-0 z-30">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/">
                      Trang chủ
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{matches}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="ml-auto flex items-center justify-center gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={''} alt={''} />
                      <AvatarFallback className="rounded-lg">
                        CN
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    side={'bottom'}
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel>Guest</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <BadgeCheck />
                        Account
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard />
                        Billing
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogIn />
                      Sign In
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
            <main className="min-h-[calc(100vh-2rem)] relative z-0 pb-8 sm:pb-0">
              {children}
            </main>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
