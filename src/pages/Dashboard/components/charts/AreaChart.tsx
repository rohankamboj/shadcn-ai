import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { CalendarIcon, RefreshCcw, Share2 } from 'lucide-react';

const data = [
  { date: '20 Aug', rate: 45 },
  { date: '21 Aug', rate: 60 },
  { date: '22 Aug', rate: 94.6 },
  { date: '23 Aug', rate: 70 },
  { date: '24 Aug', rate: 85 },
  { date: '25 Aug', rate: 50 },
];

export default function EmployeeRetentionChart() {
  const [dateRange] = useState('Aug,20 → Present');

  return (
    <Card className='w-full max-w-3xl bg-[#1c1c1c] text-white'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-xl font-normal'>
          Employee Retention Rate
        </CardTitle>
        <div className='flex items-center space-x-2'>
          <Button
            variant='ghost'
            className='text-white bg-[#2a2a2a] hover:bg-[#3a3a3a]'
          >
            <CalendarIcon className='w-4 h-4 mr-2' />
            {dateRange}
          </Button>
          <Button
            variant='ghost'
            className='p-2 text-white bg-[#2a2a2a] hover:bg-[#3a3a3a]'
          >
            <Share2 className='w-4 h-4' />
          </Button>
          <Button
            variant='ghost'
            className='p-2 text-white bg-[#2a2a2a] hover:bg-[#3a3a3a]'
          >
            <RefreshCcw className='w-4 h-4' />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            rate: {
              label: 'Retention Rate',
              color: 'hsl(0, 100%, 50%)',
            },
          }}
          className='h-[400px]'
        >
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray='3 3' stroke='#333' />
              <XAxis
                dataKey='date'
                stroke='#666'
                tick={{ fill: '#666' }}
                axisLine={{ stroke: '#666' }}
              />
              <YAxis
                stroke='#666'
                tick={{ fill: '#666' }}
                axisLine={{ stroke: '#666' }}
                tickFormatter={(value) => `${value}%`}
                domain={[20, 100]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent formatter={(value) => `${value}%`} />
                }
              />
              <ReferenceLine x='22 Aug' stroke='white' strokeDasharray='3 3'>
                <svg x='-6' y='0'>
                  <circle cx='6' cy='0' r='4' fill='black' />
                </svg>
                <svg x='-6' y='50%'>
                  <circle cx='6' cy='0' r='4' fill='black' />
                </svg>
                <svg x='-6' y='100%'>
                  <circle cx='6' cy='0' r='4' fill='black' />
                </svg>
              </ReferenceLine>
              <Line
                type='monotone'
                dataKey='rate'
                stroke='var(--color-rate)'
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
