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
import PageRoutes from '@/routes/PageRoutes';

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
    url: PageRoutes.settings,
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className='bg-black'>
      <SidebarHeader className='mt-10 px-6'>
        <img src={Logo} alt='logo' className='h-8 w-8' />
      </SidebarHeader>
      <SidebarContent className='px-6'>
        <SidebarGroup>
          <SidebarGroupLabel>Add Module</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6 hover:bg-gray-900'>
                  <Link to='#'>
                    <Plus className='text-white' />
                    <span className='text-white'>Add Module</span>
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
                    className='hover:border-r-4 hover:bg-gray-900 hover:border-red-700 py-6'
                  >
                    <Link to={item.url}>
                      <item.icon className='text-white' />
                      <span className='text-white'>{item.title}</span>
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
                  <SidebarMenuButton
                    asChild
                    className=' py-6 hover:bg-gray-900'
                  >
                    <Link to={item.url}>
                      <item.icon className='text-white' />
                      <span className='text-white'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Button
          variant='outline'
          className='rounded-full bg-gray-900 hover:bg-gray-900'
        >
          <StepBack className='text-white' />
          <span className='text-white'>Close</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
