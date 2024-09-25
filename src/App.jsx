import React, { useState, useEffect } from 'react';
import AIAssistant from './components/AIAssistant';
import Cart from './components/Cart';
import { toast } from 'react-toastify';

const App = () => {
   useEffect(() => {
    // Open the connection to the SSE endpoint
    const eventSource = new EventSource('https://voicedemoapi.soluperts.com/events');

    // Listen for messages from the server
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Automatically open the popup with the received URL
      window.open(data.url, '_blank', 'width=800,height=600');
    };

    // Cleanup when component unmounts
    return () => {
      eventSource.close();
    };
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-4">
      
      <div className="">
        <AIAssistant />
      </div>
      <div className="">
        <Cart/>
      </div>
    </div>
  );
};

export default App;
