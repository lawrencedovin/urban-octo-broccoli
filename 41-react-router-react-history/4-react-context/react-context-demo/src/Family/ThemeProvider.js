import React, {useState} from 'react';
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState('purple');
    const toggleColor = () => {
        setColor(color => color === 'purple' ? 'orange' : 'purple');
    }
    return (
        <ThemeContext.Provider value={{color, toggleColor}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;