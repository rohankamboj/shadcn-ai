import UpgradeImage from '@/assets/icons/upgrade.svg';
// import Exclamation from '@/assets/icons/exclamation.svg';
import { X } from 'lucide-react';

export default function Upgrade() {
  return (
    <div
      className='w-full m-auto h-14 bg-no-repeat flex items-center pb-2'
      style={{
        backgroundImage: `url(${UpgradeImage})`,
        backgroundSize: '100%',
      }}
    >
      <div className='flex items-center justify-between w-full p-2 bg-red-950 rounded-lg'>
        <span className=' text-white'>
          Upgrade to premium, and get more details features!{' '}
          <span className='font-bold ml-1'> Upgrade Now</span>
        </span>
        <X className='text-white text-end w-4 h-4' />
      </div>
    </div>
  );
}
