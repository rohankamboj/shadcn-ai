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
  Camera,
  ChevronDown,
  Crop,
  Settings,
  Trash2,
  Upload,
} from 'lucide-react';
import { useState } from 'react';

const LogoComponent = () => {
  const [isLogoOpen, setIsLogoOpen] = useState(true);

  return (
    <Card className='w-full sm:w-1/2 border-border-primary  bg-secondary text-white'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-xl font-bold'>
          <Collapsible>
            <CollapsibleTrigger
              onClick={() => setIsLogoOpen(!isLogoOpen)}
              className='flex items-center'
            >
              Logo <ChevronDown className='ml-2 h-4 w-4' />
            </CollapsibleTrigger>
          </Collapsible>
        </CardTitle>
        <Button
          variant='ghost'
          size='icon'
          className='text-white bg-primary rounded-md'
        >
          <Upload className='h-4 w-4' />
        </Button>
      </CardHeader>
      <Collapsible open={isLogoOpen}>
        <CollapsibleContent>
          <CardContent className='space-y-4'>
            <div className='border-2 border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center space-y-2'>
              <div className='bg-[#2a2a2a] p-4 rounded-full'>
                <Camera className='h-8 w-8 text-gray-400' />
              </div>
              <p className='text-sm text-gray-400'>or Drag and Drop here</p>
              <p className='text-xs text-gray-500'>PNG, JPEG, SVG</p>
            </div>
          </CardContent>
          <CardFooter className='flex justify-between items-center mt-auto'>
            <div className='flex space-x-2'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-[#2a2a2a]'
              >
                <Crop className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-[#2a2a2a]'
              >
                <Trash2 className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full bg-[#2a2a2a]'
              >
                <Settings className='h-4 w-4' />
              </Button>
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
};

export default LogoComponent;
