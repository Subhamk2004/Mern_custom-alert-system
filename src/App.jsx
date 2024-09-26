import React from 'react';
import SubscriptionForm from './components/SubscriptionForm';
import AlertButton from './components/AlertButton';
import NotificationHandler from './components/NotificationHandler';

function App() {
  return (
    <div className="App w-screen h-screen bg-[#020d1b]  flex flex-col items-center justify-center 
    ">
      <div className='h-[70%] w-[80%] relative flex flex-col items-center justify-center'>
        <div className='bg-[#e4656591] h-full w-full absolute z-0 rounded-full blur-3xl top-0'></div>
        <div className='bg-[#1b296877] h-full w-full absolute z-0 rounded-full blur-3xl top-[10%] left-0'></div>
        <div className='bg-[#63ff3465] h-full w-full absolute z-0 rounded-full blur-[170px] top-[70%]'></div>
        <div className='h-[70%]'>
          <h1 className=' font-bold text-5xl leading-tight p-7 sm:p-4 rounded-lg bg-gradient-to-r from-[#75ff35b4] to-[#d554f5] text-transparent bg-clip-text transition-transform transform hover:scale-100'>
            MERN Alert System
          </h1>
          <div className='relative z-10 flex flex-col gap-5 w-full items-center'>
            <SubscriptionForm />
            <AlertButton />
            <NotificationHandler />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;