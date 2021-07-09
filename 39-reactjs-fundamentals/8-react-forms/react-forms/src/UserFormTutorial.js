import React, { useState } from 'react';

const UserFormTutorial = (() => {
    const [username, setUsername] = useState('');
    const handleChange = (e) => {
        let {value} = e.target;
        setUsername(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username} created!`);
        setUsername('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="username" value={username} onChange={handleChange}/>
            <button id="submitBtn">Add me to List!</button>
        </form>
    );
});

export default UserFormTutorial;