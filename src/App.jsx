import React, { useState, useEffect } from 'react';
import AIAssistant from './components/AIAssistant';
import Cart from './components/Cart';

const App = () => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-2 mx-4">
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
