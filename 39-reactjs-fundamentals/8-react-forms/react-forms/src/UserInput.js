import React from 'react';
import capitalize from './helpers';

const UserInput = (({inputName, inputValue, handleChange}) => {
    return (
        <>
        <label htmlFor={inputName}>{capitalize(inputName)}</label>
        <input 
            id={inputName} 
            type={inputName === 'password' ? 'password' : 'text'} 
            name={inputName} 
            placeholder={inputName} 
            value={inputValue} 
            onChange={handleChange}
        />
        </>
    );
});

export default UserInput