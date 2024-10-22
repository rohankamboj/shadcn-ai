import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import Header from './Header';
// import { ModeToggle } from './mode-toggle';

const Layout = () => {
  return (
    <SidebarProvider className='bg-black'>
      <AppSidebar />
      <main className='flex flex-col w-full'>
        <Header />
        {/* <ModeToggle /> */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
