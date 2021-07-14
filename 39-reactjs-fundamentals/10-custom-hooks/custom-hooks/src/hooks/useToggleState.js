import React, { useState} from 'react';

const useToggleState = (initialState) => {
    const [state, setState] = useState(initialState);

    const toggleState = () => {
        setState(!state);
    }

    // return a destructured state and stateChange like useState
    return [state, toggleState]
}

export default useToggleState;
// Making piece of state - starts as true or false
// making a function to toggle state from true/false to false/true
// const [isHappy, setIsHappy] = useState(true);
// const [isDarkMode, setIsDarkMode] = useState(false);
// let body = document.querySelector('body');

// const toggleMood = () => {
//     setIsHappy(!isHappy)
// }

// const toggleIsDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
// }