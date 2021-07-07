import React, { useState } from "react";
import ColorButtons from "./ColorButtons";
import Circle from "./Circle";

function ColorfulCircles() {
  // Initializes colors to empty 
  // We can't mutate the colors array directly
  // can't mutate circles and pass into setCircles
  // Needs a copy of the colors to pass into setColors
  const [colors, setColors] = useState([]);

  // addColor sets an empty array at first
  // then after clicking the newColor is stored to
  // the colors array
  const addColor = newColor => {
    // Makes a copy of colors and stores a new Color to the array
    // Causes a rerender, can't mutate initial array and expect rerender
    // You need to force it by a copy of a new array that has a new reference
    setColors(colors => [...colors, newColor]); // make a *new* array
  };

  return (
    <div>
      {/* Adds a default of ["red", "green", "blue", "honeydew"] buttons
      that when pressed add the circles on screen */}
      <ColorButtons addColor={addColor} />
      {colors.map((color, i) => (
        <Circle color={color} key={i} idx={i} />
      ))}
    </div>
  );
}

export default ColorfulCircles;
