import React from 'react';

const AlertButton = () => {
    const handleAlert = async () => {
        try {
            const response = await fetch('https://custom-alert-backend.onrender.com/api/alert', {
                method: 'POST',
            });
            const data = await response.json();
            if (response.ok) {
                alert(`Alert sent successfully to ${data.count} subscribers`);
            } else {
                alert(data.message || 'Failed to send alert. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <button className='mt-7 bg-[#71d671] p-3 px-7 hover:p-4 hover:px-8 hover:shadow-lg shadow-black transition-all  rounded-2xl text-lg font-semibold  ' onClick={handleAlert}>Send Alert</button>
    );
};

export default AlertButton;