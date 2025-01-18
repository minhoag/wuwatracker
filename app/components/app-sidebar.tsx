import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@remix-run/react';
import {
  AudioLinesIcon,
  CalendarHeart,
  ChevronRight,
  DownloadIcon,
  Globe,
  ListEnd,
  MessageCircleQuestionIcon,
  SwordsIcon,
  Users2Icon,
  XCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import * as React from 'react';

type Props = {
  title: string;
  url: string;
  name?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  avatar?: string;
  email?: string;
  items: Omit<Props, 'items'>[];
};
// This is sample data.
const data: { [key: string]: Props[] } = {
  'Tính năng chính': [
    {
      title: 'Theo dõi pity',
      url: '/trackers',
      icon: ListEnd,
      isActive: true,
      items: [],
    },
    {
      title: 'Thông số toàn cầu',
      url: '/global',
      icon: Globe,
      isActive: false,
      items: [],
    },
    {
      title: 'Sự kiện',
      url: '/events',
      icon: CalendarHeart,
      isActive: false,
      items: [],
    },
  ],
  'Cách chơi': [
    {
      title: 'Nhân vật',
      url: '/resonators',
      icon: Users2Icon,
      isActive: true,
      items: [],
    },
    {
      title: 'Vũ khí',
      url: '/weapons',
      icon: SwordsIcon,
      isActive: false,
      items: [],
    },
    {
      title: 'Echos',
      url: '/echos',
      icon: AudioLinesIcon,
      isActive: false,
      items: [],
    },
  ],
  'Hướng dẫn': [
    {
      title: 'Cách nhập lịch sử',
      url: '/howto',
      icon: DownloadIcon,
      isActive: true,
      items: [],
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: MessageCircleQuestionIcon,
      isActive: false,
      items: [],
    },
  ],
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/">
          <SidebarMenuButton tooltip="wuwatracker">
            <XCircle />
            wuwatracker
          </SidebarMenuButton>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {Object.entries(data).map(([label, items]) => (
          <SidebarGroup key={label + '-key'}>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) =>
                item.items.length > 0 ? (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={item.isActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <Link to={item.url}>
                          {' '}
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            {item.title}
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </Link>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) =>
                            subItem ? (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ) : null,
                          )}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <Link to={item.url}>
                      {' '}
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        {item.title}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
