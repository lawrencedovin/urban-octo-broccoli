import React from 'react';
import Dice from './Dice'
import ColoredCircles from './ColoredCircles1/ColoredCircles'
import './App.css';

function App() {
  return (
    <div className="App">
      <ColoredCircles />
      <Dice numDice={4} maxVal={6} title="Roll Me!" />
      <Dice />
    </div>
  );
}

export default App;


