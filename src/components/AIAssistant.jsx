import React, { useState } from 'react';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("35b355e3-f72e-40f5-bd4b-c34a5652eae7");

const AIAssistant = ({ setSessionId }) => {
  const [isListening, setIsListening] = useState(false);

  const handleStart = async () => {
    setIsListening(true);
    try {
      const response = await vapi.start("708057be-3439-4ca7-8fb2-1d27b7e2a13e");
      // Assuming response contains the sessionId
      if (response && response.id) {
        setSessionId(response.id); // Set sessionId in the parent component
      }
    } catch (error) {
      console.error('Error starting AI assistant:', error);
    }
  };

  const handleStop = () => {
    setIsListening(false);
    vapi.stop();
  };

  return (
    <div className="relative p-4 mb-2 md:m-4 md:py-60 md:min-h-[700px] flex justify-center text-center rounded-lg border-2">
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/0yRh2nBN/Whats-App-Image-2024-09-24-at-15-53-34.jpg')] opacity-70 bg-cover bg-center z-0"></div>
      
      <div className="relative p-4 w-fit h-fit">
        <div className='absolute inset-0 bg-white opacity-80 z-10 shadow-md rounded-lg border'></div>
        
        <div className='relative z-20'>
          <div className="flex justify-center mb-2">
            <img className="w-48 h-20 mx-2" src="https://i.postimg.cc/rsrCnKrw/3-Ai-Yyg7-X-400x400-removebg-preview-removebg-preview-Photoroom.png" alt="logo" />
            <h2 className="text-2xl font-medium pt-4">AI Voice Assistant</h2>
          </div>
          <button
            onClick={handleStart}
            className={`transition-transform duration-150 ease-in-out ${isListening ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'} text-white text-center px-4 py-2 rounded-lg mr-2`}
          >
            {isListening ? 'Listening...' : 'Start'}
          </button>
          <button
            onClick={handleStop}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
