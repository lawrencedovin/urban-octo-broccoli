import React, { useRef, useEffect } from 'react';

const Focuser = () => {
    const focusRef = useRef();

    const changeFocus = () => {
        focusRef.current.focus();
    }  

    
    return (
        <>
            <h3>Focus Starts Here</h3>
            <input type="text" />
            <button onClick={changeFocus}>Focus the text input</button>
            <h3>Then Moves Here</h3>
            <input type="text" ref={focusRef} />
        </>
    );
}

export default Focuser;