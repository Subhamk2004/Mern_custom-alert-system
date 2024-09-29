import React, { useState, useEffect } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [notificationPermission, setNotificationPermission] = useState('default');

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        setNotificationPermission(permission);
        if (permission !== 'granted') {
          alert('You need to allow notifications to receive alerts.');
        }
      } catch (error) {
        console.error('Error requesting notification permission:', error);
        alert('There was an error requesting notification permission. Please check your browser settings.');
      }
    } else {
      alert('Your browser does not support notifications.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (notificationPermission === 'default') {
      await requestNotificationPermission();
    }

    try {
      const response = await fetch('https://custom-alert-backend.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setEmail('');
      } else {
        alert(data.message || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-[360px] flex flex-col sm:flex-row justify-center items-center'>
      <input
        className='w-full sm:w-auto outline-none p-2 sm:p-3 sm:pr-12 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl bg-[#1e1e38] drop-shadow-lg shadow-lg text-[#e0eecd] text-lg font-medium mb-2 sm:mb-0'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button 
        className='w-full sm:w-auto bg-[#71d671] p-2 sm:p-[10px] font-semibold text-lg sm:h-[52px] rounded-b-2xl sm:rounded-bl-none sm:rounded-r-2xl' 
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscriptionForm;