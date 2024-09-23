import React, { useState } from 'react';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("28ff6416-7ee9-46a4-9ee9-dfd143722be3");

const AIAssistant = () => {
  const [isListening, setIsListening] = useState(false);

  const handleStart = () => {
    setIsListening(true);
    vapi.start("0e2cea8c-2315-4c18-8e0f-bcf85f2df271");
  };

  const handleStop = () => {
    setIsListening(false);
    vapi.stop();
  };

  return (
    <div className="bg-gray-100 p-4 py-60 m-4 min-h-[700px] text-center rounded-lg border-2">
      <h2 className="text-2xl font-bold mb-5">AI Voice Assistant</h2>
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
  );
};

export default AIAssistant;
