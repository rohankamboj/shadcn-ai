import { Button } from '@/components/ui/button';
import ColorWheelComponent from './components/ColorComponent';
import DataSourcesComponent from './components/DataSourceCard';
import SettingsHeader from './components/header';
import IntegrationCard from './components/IntegrationCard';
import SelectIntegration from './components/IntegrationComponent';
import LogoComponent from './components/LogoComponent';
import { Bot } from 'lucide-react';

export default function Settings() {
  return (
    <div className='flex flex-col gap-4 mx-4 relative py-4'>
      <SettingsHeader />
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col  gap-4 w-full'>
          <IntegrationCard />
          <div className='flex flex-col sm:flex-row gap-4'>
            <ColorWheelComponent />
            <LogoComponent />
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <DataSourcesComponent />
          <SelectIntegration />
        </div>
      </div>
      <div className='fixed bottom-4 right-4'>
        <Button
          size='icon'
          className='rounded-full bg-red-600 hover:bg-red-700 text-white w-12 h-12'
        >
          <Bot className='h-6 w-6' />
        </Button>
      </div>
    </div>
  );
}
