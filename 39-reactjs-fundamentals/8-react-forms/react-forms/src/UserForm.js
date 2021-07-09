import React, { useState } from 'react';

const UserForm = (() => {
    const [username, setUsername] = useState('');
    const handleChange = (e) => {
        let {value, style} = e.target;
        let submitBtn = document.querySelector('#submitBtn');
        // Gets input value onChange
        let newValue = value;
        // Sets input value onChange
        if(newValue.length < 15) {
            setUsername(value);
            style.borderColor = 'green';
            submitBtn.disabled = false;
        }
        else {
            style.borderColor = 'red';
            submitBtn.disabled = true;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username} created!`);
        setUsername('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={handleChange}/>
            <button id="submitBtn">Add me to List!</button>
        </form>
    );
});

export default UserForm;