import React, { useState } from 'react';
import './App.css';
import Slide from './components/Slide.jsx'; // Correct import path for Slide component
 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Slide />
    </div>
  );
}

export default App;
