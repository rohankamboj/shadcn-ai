import { useState } from 'react';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  Globe,
  MoreHorizontal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
import { Separator } from '@/components/ui/separator';

export default function DataSourcesComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const [databaseType, setDatabaseType] = useState('postgresql');

  console.log(databaseType);

  return (
    <Card className='w-full bg-secondary text-white border-border-primary'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-xl font-bold'>
          <Collapsible>
            <CollapsibleTrigger
              onClick={() => setIsOpen(!isOpen)}
              className='flex items-center'
            >
              Data Sources <ChevronDown className='ml-2 h-4 w-4' />
            </CollapsibleTrigger>
          </Collapsible>
        </CardTitle>
        <div className='flex items-center space-x-2'>
          <div className='relative ml-4'>
            <Search className='absolute left-2 top-3 h-4 w-4 text-border-primary' />
            <Input
              placeholder='Search'
              className='pl-8 bg-[hsl(185,12%,20%)] border-none text-white placeholder-border-primary focus-visible:ring-0 focus-visible:ring-offset-0 '
            />
          </div>
          <Button className='bg-red-600 hover:bg-red-700'>
            Add Data Source
          </Button>
        </div>
      </CardHeader>
      <Collapsible open={isOpen}>
        <CollapsibleContent>
          <CardContent className='space-y-4'>
            <div className='flex items-center gap-4'>
              <h3 className='text-lg font-semibold'>Database Connection</h3>
              <ChevronDown className='h-4 w-4' />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <Input
                placeholder='Hostname'
                className='bg-transparent border-border-primary focus-visible:ring-0 focus-visible:ring-offset-0  text-white'
              />
              <Input
                placeholder='Port'
                className='bg-transparent border-border-primary focus-visible:ring-0 focus-visible:ring-offset-0  text-white'
              />
            </div>
            <Input
              placeholder='Username and Password fields'
              className='bg-transparent border-border-primary focus-visible:ring-0 focus-visible:ring-offset-0  text-white'
            />
            <div className='flex w-full gap-4'>
              <div className='flex items-center gap-2'>
                <h3 className='text-lg font-semibold'>Database Type</h3>
                <ChevronLeft className='h-4 w-4' />
              </div>
              <div className='flex items-center justify-between flex-1'>
                <RadioGroup
                  defaultValue='postgresql'
                  onValueChange={setDatabaseType}
                  className='flex space-x-4'
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='mysql' id='mysql' />
                    <Label htmlFor='mysql'>MySQL</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='postgresql' id='postgresql' />
                    <Label htmlFor='postgresql'>PostgreSQL</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='sqlite' id='sqlite' />
                    <Label htmlFor='sqlite'>SQLite</Label>
                  </div>
                </RadioGroup>
                <Button variant='link' className='text-blue-500 p-0'>
                  More
                </Button>
              </div>
            </div>

            <Separator
              orientation='horizontal'
              className='w-full bg-border-primary'
            />

            <div className='flex'>
              <div className='flex items-center '>
                <h3 className='text-lg font-semibold'>Persistence Settings</h3>
                <ChevronLeft className='h-4 w-4' />
              </div>
              <Separator orientation='vertical' className='h-full' />
              <div className='relative flex-1'>
                <Input
                  placeholder='Lorem Ips'
                  className='bg-transparent border-border-primary text-white pr-8 focus-visible:ring-0 focus-visible:ring-offset-0'
                />
                <Globe className='absolute right-2 top-2.5 h-4 w-4 text-gray-500' />
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button
              variant='secondary'
              className='bg-[hsl(185,12%,20%)] text-white hover:bg-[hsl(185,12%,24%)]'
            >
              Advanced Settings
            </Button>
            <div className='flex items-center space-x-2'>
              <Button
                variant='outline'
                className='bg-white text-black hover:bg-gray-200'
              >
                Cancel
              </Button>
              <Button variant='outline' size='icon'>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </div>
          </CardFooter>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
