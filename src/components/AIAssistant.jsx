import React, { useState } from 'react';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("35b355e3-f72e-40f5-bd4b-c34a5652eae7");

const AIAssistant = () => {
  const [isListening, setIsListening] = useState(false);

  const handleStart = () => {
    setIsListening(true);
    vapi.start("708057be-3439-4ca7-8fb2-1d27b7e2a13e");
  };

  const handleStop = () => {
    setIsListening(false);
    vapi.stop();
  };

  return (
    <div className="relative p-4 mb-2 md:m-4 md:py-60 md:min-h-[700px] flex justify-center text-center rounded-lg border-2">
      {/* Pseudo-element for background image */}
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/0yRh2nBN/Whats-App-Image-2024-09-24-at-15-53-34.jpg')] opacity-50 bg-cover bg-center z-0"></div>

      {/* Content */}
      <div className="relative bg-gray-50 p-4 w-fit h-fit rounded-lg">
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
  );
};

export default AIAssistant;
