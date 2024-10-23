import { ArrowLeft, ChevronDown, Link, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

export default function SettingsHeader() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <header className='flex items-center justify-between py-2'>
      <div className='flex items-center space-x-4'>
        <Button
          variant='outline'
          size='sm'
          className='text-white bg-secondary'
          onClick={handleGoBack}
        >
          <ArrowLeft className='mr-2 h-4 w-4 text-border-primary' />
          Go Back
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='sm' className='text-white'>
              Dashboard Settings
              <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex items-center space-x-2'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              size='sm'
              className='bg-secondary text-white border-gray-600'
            >
              Layout
              <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Layout 1</DropdownMenuItem>
            <DropdownMenuItem>Layout 2</DropdownMenuItem>
            <DropdownMenuItem>Layout 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant='outline'
          size='sm'
          className='bg-secondary text-white border-border-primary'
        >
          + Custom Settings
        </Button>
        <Button size='sm' className='bg-primary hover:bg-red-700 text-white'>
          Save
        </Button>
        <Button variant='outline' size='icon' className='text-border-primary'>
          <Link className='h-4 w-4' />
        </Button>
        <Button variant='outline' size='icon' className='text-border-primary'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </div>
    </header>
  );
}
