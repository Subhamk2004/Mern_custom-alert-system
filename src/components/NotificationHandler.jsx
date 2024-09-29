import { useEffect, useCallback } from 'react';

const NotificationHandler = () => {
  const connectWebSocket = useCallback(() => {
    const ws = new WebSocket('ws://custom-alert-backend.onrender.com');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'alert' && 'Notification' in window) {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              new Notification('Alert', { body: data.message });
            }
          });
        }
      } catch (error) {
        console.error('Error processing message:', error);
      }
    };

    ws.onclose = (event) => {
      console.log('Disconnected from WebSocket server:', event.reason);
      setTimeout(connectWebSocket, 3000);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return ws;
  }, []);

  useEffect(() => {
    let ws;
    try {
      ws = connectWebSocket();
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
    }

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [connectWebSocket]);

  return null;
};

export default NotificationHandler;