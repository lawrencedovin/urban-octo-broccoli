import React from 'react';
import Dice from './Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dice />
      <Dice numDice={5} title='Dice Game' maxVal={6}/>
    </div>
  );
}

export default App;
