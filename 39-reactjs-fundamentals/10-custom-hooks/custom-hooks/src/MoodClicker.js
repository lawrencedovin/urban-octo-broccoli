import React, { useState, useEffect } from 'react';
import useToggleState from './hooks/useToggleState';

const MoodClicker = () => {
    const [isHappy, toggleMood] = useToggleState(true);
    const [isDarkMode, toggleIsDarkMode] = useToggleState(false);
    let body = document.querySelector('body');
    // Runs after first render
    useEffect(() => {
        body.classList.add(isDarkMode ? 'Clicker-Dark' : 'Clicker-Light');
        body.classList.remove(isDarkMode ? 'Clicker-Light' : 'Clicker-Dark');  
    })

    
    return (
        <>
            <h1>{isHappy ? '😁' : '🍕'}</h1>
            <button onClick={toggleMood}>Change Mood</button>
            <button onClick={toggleIsDarkMode}>{isDarkMode ? 'Set to Light Mode' : 'Set to Dark Mode'}</button>
        </>
    );
};  

export default MoodClicker;