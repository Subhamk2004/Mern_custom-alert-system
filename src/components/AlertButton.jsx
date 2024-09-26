import React, { useState } from 'react';

const AlertButton = () => {

    let [isAdmin, setIsAdmin] = useState(false);
    let [showIsAdmin, setShowIsAdmin] = useState(true)

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
        <div className='flex flex-col items-center'>
            {
                !isAdmin && showIsAdmin ?
                    <div className='p-4 flex flex-row justify-center items-center gap-4
                    '>
                        <p className='mr-3 font-semibold text-lg text-transparent  bg-clip-text bg-gradient-to-r from-[#c1ffa9] to-[#eeeef0]'>Are you admin?</p>
                        <button className='bg-[#64d86441] p-1 px-5 font-semibold border border-[#78ff78] text-lg text-[#99e999] rounded-lg' onClick={() => {
                            setIsAdmin(true)
                        }} >Yes</button>
                        <button className='bg-[#fc949479] text-[#ffb6b6] p-1 px-5 border border-[#fd9c9c] font-semibold text-lg rounded-lg' onClick={() => {
                            setIsAdmin(false)
                            setShowIsAdmin(false)
                        }} >No</button>
                    </div>
                    :
                    null
            }

            {isAdmin ?
                <button className='mt-7 bg-[#71d671] p-3 px-7 hover:p-4 hover:px-8 hover:shadow-lg shadow-black transition-all  rounded-2xl text-lg font-semibold  ' onClick={handleAlert}>Send Alert</button>
                :
                null
            }
            {!showIsAdmin ?
                <p className='mt-4 text-xl font-semibold text-white'>Subscribe for push notifications :)</p>
                :
                null
            }

        </div>
    );
};

export default AlertButton;