'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const ColorWheel = () => (
  <div className='relative w-48 h-48'>
    <div
      className='absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 to-red-500'
      style={{ transform: 'rotate(-90deg)' }}
    ></div>
    <div className='absolute inset-2 rounded-full bg-[#1c1c1c]'></div>
    <div className='absolute top-0 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-white rounded-full shadow-md'></div>
  </div>
);

export default function ColorWheelComponent() {
  const [isColorOpen, setIsColorOpen] = useState(true);

  return (
    <Card className='w-full sm:w-1/2 border-border-primary bg-secondary text-white'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-xl font-bold'>
          <Collapsible>
            <CollapsibleTrigger
              onClick={() => setIsColorOpen(!isColorOpen)}
              className='flex items-center'
            >
              Color <ChevronDown className='ml-2 h-4 w-4' />
            </CollapsibleTrigger>
          </Collapsible>
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='sm' className='text-gray-400'>
              Custom <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <Collapsible open={isColorOpen}>
        <CollapsibleContent>
          <CardContent className='space-y-4'>
            <ColorWheel />
            <div className='flex items-center justify-between bg-[#2a2a2a] rounded-md p-2'>
              <div className='flex items-center space-x-2'>
                <div className='w-4 h-4 bg-[#F70C67] rounded-full'></div>
                <span>F70C67</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='sm' className='text-white'>
                    100% <ChevronDown className='ml-2 h-4 w-4' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>75%</DropdownMenuItem>
                  <DropdownMenuItem>50%</DropdownMenuItem>
                  <DropdownMenuItem>25%</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
          <CardFooter className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-gray-400'>Latest</span>
              <div className='flex space-x-1'>
                <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
                <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                <div className='w-4 h-4 bg-blue-500 rounded-full'></div>
              </div>
              <ChevronDown className='h-4 w-4 text-gray-400' />
            </div>
            <Button
              variant='outline'
              size='sm'
              className='text-white bg-transparent border-gray-600'
            >
              Cancel
            </Button>
          </CardFooter>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
