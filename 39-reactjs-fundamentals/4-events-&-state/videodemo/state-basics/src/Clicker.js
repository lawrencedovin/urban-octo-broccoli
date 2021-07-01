import React from "react";
const Clicker = () => {
  const fireLasers = (e) => {
    console.log(e.currentTarget);
    console.log(e.nativeEvent);
    console.log(e);
    // console.log("THE LASERS HAVE BEEN FIRED!")
    // console.log("ZAP! PEW PEW PEW!")
  }
  return (
    <>
      <button onMouseOver={fireLasers}>CLICK ME!</button>
      <textarea onScroll={fireLasers} rows="2">
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
        askjd asdklj asdklj asdkjl asdjkl
      </textarea>
    </>
  )
}
export default Clicker;

