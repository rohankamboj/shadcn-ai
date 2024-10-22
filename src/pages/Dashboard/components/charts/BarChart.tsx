import { Card } from '@/components/ui/card';
import { Bot, RotateCcw } from 'lucide-react';

const DepartmentBar = ({
  name,
  count,
  total,
  color,
}: {
  name: string;
  count: number;
  total: number;
  color: string;
}) => {
  const percentage = (count / total) * 100;

  return (
    <div className='flex flex-col gap-2'>
      <div className='w-full bg-gray-800 rounded-lg overflow-hidden'>
        <div
          className='h-8 rounded-lg transition-all duration-500'
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <div className='flex items-center gap-2'>
        <div
          className='w-3 h-3 rounded-full'
          style={{ backgroundColor: color }}
        />
        <span className='text-gray-400'>{name}</span>
        <span className='text-white ml-1'>{count}</span>
      </div>
    </div>
  );
};

const FTEsByDepartment = () => {
  const departments = [
    { name: 'Engineering', count: 45, color: '#dc2626' },
    { name: 'Marketing', count: 15, color: '#ff8a8a' },
    { name: 'Sales', count: 30, color: '#ffffff' },
    { name: 'HR', count: 20, color: '#ffa6d4' },
    { name: 'Operations', count: 10, color: '#9ca3af' },
  ];

  const total = departments.reduce((sum, dept) => sum + dept.count, 0);

  return (
    <Card className='w-full p-6 bg-gray-900 text-white'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-2xl font-semibold'>FTEs by Department</h2>
        <div className='flex gap-4'>
          <button className='p-2 rounded-lg bg-gray-800 hover:bg-gray-700'>
            <Bot className='w-5 h-5 text-gray-400' />
          </button>
          <button className='p-2 rounded-lg bg-gray-800 hover:bg-gray-700'>
            <RotateCcw className='w-5 h-5 text-gray-400' />
          </button>
        </div>
      </div>

      <div className='mb-8'>
        <div className='flex items-center gap-2'>
          <span className='text-4xl font-bold'>{total}</span>
          <span className='text-2xl text-gray-400'>(Total)</span>
          <div className='ml-auto p-2 rounded-full bg-gray-800'>
            <svg
              className='w-5 h-5 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        </div>
      </div>

      <div className='space-y-6'>
        {departments.map((dept, index) => (
          <DepartmentBar
            key={index}
            name={dept.name}
            count={dept.count}
            total={total}
            color={dept.color}
          />
        ))}
      </div>
    </Card>
  );
};

export default FTEsByDepartment;
