import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import useUserStore from '@/store/userStore';
import { Bot, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
// import { SidebarTrigger } from './ui/sidebar';

export default function Header() {
  const { user, logout } = useUserStore();
  const [search, setSearch] = useState('');
  return (
    <header className='bg-black text-white p-4 w-full'>
      {/* <SidebarTrigger /> */}
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex w-full'>
          <div className='flex items-center space-x-4'>
            <span className='text-red-500 text-2xl font-bold mt-auto'>
              &raquo;
            </span>
            <div>
              <div className='text-xs text-gray-400'>Savant Enterprise</div>
              <div className='text-md font-semibold'>Savant Enterprise.</div>
            </div>
          </div>

          <div className='flex-1 max-w-md mx-4'>
            <div className='relative'>
              <Input
                type='search'
                placeholder='Search'
                className='w-full bg-gray-800 border-gray-700 focus:border-gray-600 focus-visible:ring-0'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                size='icon'
                variant='ghost'
                className='absolute right-0 top-0'
              >
                <Search className='h-4 w-4 bg-black mx-2' />
              </Button>
            </div>
          </div>
          <Button
            variant='outline'
            className='bg-gray-800 border-gray-700 hover:bg-gray-700'
            onClick={() => {
              alert(search);
            }}
          >
            <Bot className='h-4 w-4' />
            Search with AI
          </Button>
        </div>

        <div className='flex items-center space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='flex items-center space-x-2'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage
                    src='/placeholder.svg?height=32&width=32'
                    alt='Matt Andrew'
                  />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <div className='text-sm font-medium'>
                    {user.user_firstname}
                  </div>
                  <div className='text-xs text-gray-400'>{user.user_email}</div>
                </div>
                <ChevronDown className='h-4 w-4 text-gray-400' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
