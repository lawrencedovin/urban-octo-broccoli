import React from "react";

function NumberItem(props) {
  const handleRemove = () => {
    props.remove(props.value);
  };

  return (
    <li>
      {props.value}
      <button onClick={handleRemove}>X</button>
    </li>
  );
}
// end

export default NumberItem;
