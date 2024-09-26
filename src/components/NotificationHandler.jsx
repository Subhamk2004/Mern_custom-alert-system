import { useEffect } from 'react';

const NotificationHandler = () => {
  useEffect(() => {
    const connectWebSocket = () => {
      const ws = new WebSocket('wss://custom-alert-backend.onrender.com');

      ws.onopen = () => {
        console.log('Connected to WebSocket server');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'alert') {
          new Notification('Alert', { body: data.message });
        }
      };

      ws.onclose = () => {
        console.log('Disconnected from WebSocket server. Attempting to reconnect...');
        setTimeout(connectWebSocket, 5000);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    };

    connectWebSocket();
  }, []);

  return null;
};

export default NotificationHandler;