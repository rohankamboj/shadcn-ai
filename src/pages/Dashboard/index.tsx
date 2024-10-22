import Upgrade from '@/components/UpgradePremium';
import UserCard from './components/UserCard';
import EmployeeRetentionChart from './components/charts/AreaChart';
import StackedBarComponent from './components/charts/StakedBarChart';
const Dashboard = () => {
  return (
    <div className='w-full h-full bg-black  px-6'>
      <Upgrade />
      <div className='flex  justify-between gap-2'>
        {Array.from({ length: 4 }).map((_, index) => (
          <UserCard key={index} />
        ))}
      </div>
      <div className='mt-4 flex gap-4'>
        <EmployeeRetentionChart />

        <StackedBarComponent />
      </div>
    </div>
  );
};

export default Dashboard;
