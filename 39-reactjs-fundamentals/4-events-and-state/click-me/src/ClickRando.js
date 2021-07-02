import React, { useState } from "react";
import { getRandom } from "./helpers";

/** A random number that changes. */
function ClickRando(props) {
  const max = props.maxNum;
  const [num, setNum] = useState(getRandom(max));

  return (
    <button onClick={() => setNum(getRandom(max))}>
      Click Rando: {num}
    </button>
  );
}

export default ClickRando;
