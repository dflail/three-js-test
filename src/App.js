import React, { useEffect } from 'react';
import TripleCube from './components/TripleCube';
import './App.css';

const App = () => {
  return (
    <div>
      <h3>three.js / React Component Test</h3>
      <TripleCube />
      <h3>Success</h3>
    </div>
  );
};

export default App;
