import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MoreHorizontal, Users } from 'lucide-react';

export default function UserCard() {
  return (
    <Card className='w-[270px] bg-zinc-900 text-white'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-lg font-bold'>Employee</CardTitle>
        <MoreHorizontal className='h-4 w-4 text-zinc-400' />
      </CardHeader>
      <CardContent>
        <div className='flex items-center space-x-4'>
          <div className='rounded-full bg-zinc-800 p-2'>
            <Users className='h-4 w-4 text-zinc-400' />
          </div>
          <div className='text-xl font-bold'>85%</div>
          <Select defaultValue='this-month'>
            <SelectTrigger className='p-0 h-6 border-red-500  bg-red-950 text-red-200 rounded-full px-1 outline-none ring-0 focus-visible:ring-0'>
              <SelectValue placeholder='Select period' />
            </SelectTrigger>
            <SelectContent className='bg-zinc-800 border-zinc-700 text-zinc-400'>
              <SelectItem value='this-month'>This Month</SelectItem>
              <SelectItem value='last-month'>Last Month</SelectItem>
              <SelectItem value='this-year'>This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
