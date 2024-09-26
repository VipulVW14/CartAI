import React, { useState, useEffect } from 'react';
import AIAssistant from './components/AIAssistant';
import Cart from './components/Cart';

const App = () => {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource('https://voicedemoapi.soluperts.com/events');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Automatically open the popup with the received URL
      window.open(data.url, '_blank', 'width=800,height=600');

      // Assuming data contains the sessionId
      if (data.sessionId) {
        setSessionId(data.sessionId); // Set sessionId when received
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-4">
      <div className="">
        <AIAssistant setSessionId={setSessionId} />
      </div>
      <div className="">
        <Cart sessionId={sessionId} />
      </div>
    </div>
  );
};

export default App;
