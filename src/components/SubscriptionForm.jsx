import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className='flex flex-row justify-center items-center'>
      <input
        className='outline-none p-3 pr-12 rounded-tl-2xl rounded-bl-2xl bg-[#1e1e38] drop-shadow-lg shadow-lg text-[#e0eecd] text-lg font-medium'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button className='bg-[#71d671] p-[10px] font-semibold text-lg h-[52px] rounded-tr-2xl rounded-br-2xl' type="submit">Subscribe</button>
    </form>
  );
};

export default SubscriptionForm;