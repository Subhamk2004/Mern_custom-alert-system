import React from 'react';
import SubscriptionForm from './components/SubscriptionForm';
import AlertButton from './components/AlertButton';

function App() {
  return (
    <div className="App w-screen h-screen bg-blue-950  flex flex-col items-center p-5
    ">
      <h1 className='text-lime-400 font-bold text-3xl p-4'>MERN Alert System</h1>
      <SubscriptionForm />
      <AlertButton />
    </div>
  );
}

export default App;