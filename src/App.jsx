import React, { useState, useEffect } from 'react';
import AIAssistant from './components/AIAssistant';
import Cart from './components/Cart';
import config from '../config'; 

const App = () => {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(`${config.apiUrl}/events`); // Use config

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      window.open(data.url, '_blank', 'width=800,height=600');
      if (data.sessionId) {
        setSessionId(data.sessionId); // Set sessionId when received
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <AIAssistant setSessionId={setSessionId} />
      </div>
      <div>
        <Cart sessionId={sessionId} />
      </div>
    </div>
  );
};

export default App;
