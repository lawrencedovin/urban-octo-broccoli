import React from 'react';
import SimpleCounter from './SimpleCounter';
import NumbersList from './NumbersList'
import Circle from './Circle'
import ColoredCircles from './ColoredCircles'
// import PositionedColorfulCircles from "./PositionedColorfulCircles";

function App() {
  return (
    <div className="App">
      <ColoredCircles />
      {/* <PositionedColorfulCircles /> */}
      {/* <NumbersList />
      <SimpleCounter /> */}
    </div>
  );
}

export default App;
