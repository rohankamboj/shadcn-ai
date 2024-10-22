'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeftIcon, Calendar, Info } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    Engineering: 45,
    Marketing: 15,
    Sales: 30,
    HR: 20,
    Operations: 10,
  },
];

const departments = [
  { name: 'Engineering', color: '#D04848' },
  { name: 'Marketing', color: '#F3B95F' },
  { name: 'Sales', color: '#FFF7D4' },
  { name: 'HR', color: '#F2AFEF' },
  { name: 'Operations', color: '#C5C5C5' },
];

const total = departments.reduce((sum, dept) => sum + data[0][dept.name], 0);

export default function StackedBarComponent() {
  return (
    <Card className='w-full max-w-md bg-[#1C1C1E] text-white'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-xl font-bold'>FTEs by Department</CardTitle>
        <div className='flex space-x-2'>
          <button className='text-gray-400 hover:text-white'>
            <Calendar className='w-6 h-6' />
          </button>
          <button className='text-gray-400 hover:text-white'>
            <ArrowLeftIcon className='w-6 h-6' />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex items-center mb-2'>
          <span className='text-4xl font-bold'>{total}</span>
          <span className='text-xl font-normal text-gray-400 ml-2'>
            (Total)
          </span>
          <Info className='w-5 h-5 text-gray-400 ml-2' />
        </div>
        <div className='h-16 mb-4'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart layout='vertical' data={data} barSize={40}>
              <XAxis type='number' hide />
              <YAxis type='category' hide />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: '#2C2C2E',
                  border: 'none',
                  borderRadius: '4px',
                }}
                itemStyle={{ color: '#fff' }}
              />
              {departments.map((dept, index) => (
                <Bar
                  key={dept.name}
                  dataKey={dept.name}
                  stackId='a'
                  fill={dept.color}
                  radius={
                    index === 0
                      ? [4, 0, 0, 4]
                      : index === departments.length - 1
                      ? [0, 4, 4, 0]
                      : [0, 0, 0, 0]
                  }
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='grid grid-cols-2 gap-y-2'>
          {departments.map((dept) => (
            <div key={dept.name} className='flex items-center'>
              <div
                className='w-3 h-3 rounded-full mr-2'
                style={{ backgroundColor: dept.color }}
              ></div>
              <span className='text-sm'>
                {dept.name}{' '}
                <span className='font-medium'>{data[0][dept.name]}</span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
