import React from 'react';

const AlertButton = () => {
    const handleAlert = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/alert', {
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
        <button onClick={handleAlert}>Send Alert</button>
    );
};

export default AlertButton;