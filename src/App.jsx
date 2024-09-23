import React, { useState, useEffect } from 'react';
import AIAssistant from './components/AIAssistant';
import Cart from './components/Cart';

const App = () => {
  
  return (
    <div className="grid grid-cols-2 m-4">
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
