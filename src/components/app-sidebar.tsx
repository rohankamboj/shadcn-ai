import Logo from '@/assets/logo.svg';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Inbox, Plus, StepBack } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

// Menu items.
const items = [
  {
    title: 'Overview',
    url: '#',
    icon: Home,
  },
  {
    title: 'Employee Retention',
    url: '#',
    icon: Inbox,
  },
];

const footerItems = [
  {
    title: 'Notifications',
    url: '#',
    icon: Home,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className='light:bg-black'>
      <SidebarHeader className='mt-10 px-6'>
        <img src={Logo} alt='logo' className='h-8 w-8' />
      </SidebarHeader>
      <SidebarContent className='px-6'>
        <SidebarGroup>
          <SidebarGroupLabel>Add Module</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <Link to='#'>
                    <Plus />
                    <span>Add Module</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className='hover:border-r-4 hover:border-red-700 py-6'
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='px-6 mb-10'>
        <SidebarGroup>
          <SidebarGroupLabel>More</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className=' py-6'>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Button variant='outline' className='rounded-full'>
          <StepBack />
          <span>Close</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
