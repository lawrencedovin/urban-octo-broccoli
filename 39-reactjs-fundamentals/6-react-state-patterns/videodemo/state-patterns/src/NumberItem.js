import React from "react";

const NumberItem = ({ number, remove }) => {
  const handleRemove = () => {
    // alert("REMOVING!")
    remove(number)
  }
  return (
    <li>
      <button onClick={handleRemove}>{number}</button>
    </li>
  )
}

export default NumberItem;