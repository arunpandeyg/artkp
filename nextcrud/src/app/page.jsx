import ProfileList from '@/components/ProfileList';
import React from 'react';

export default function Home() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
    <ProfileList />
   
    </div>
    
  );
}
