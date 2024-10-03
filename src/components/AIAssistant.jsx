import React, { useState } from 'react';
import Vapi from "@vapi-ai/web";
import config from '../../config'; 

const vapi = new Vapi(config.vapiKey); // Use config for Vapi key

const AIAssistant = ({ setSessionId }) => {
  const [isListening, setIsListening] = useState(false);

  const handleStart = async () => {
    setIsListening(true);
    try {
      const response = await vapi.start(config.aiAssistantId); // Use config for AI assistant ID
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
    <div className="relative p-4 md:h-screen md:py-60 md:min-h-[700px] flex justify-center text-center border-2">
        <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${config.backgroundImg})`, opacity: 0.7 }}
        ></div>      
        <div className="relative p-4 w-fit h-fit">
        <div className='absolute inset-0 bg-white opacity-80 z-10 shadow-md rounded-lg border'></div>
        <div className='relative z-20'>
          <div className="flex justify-center mb-2">            
            <img className="w-48 h-20 mx-2" src={config.companyLogo} alt="logo" />
            <h2 className="text-2xl font-medium pt-4">{config.assistantTitle}</h2>
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
