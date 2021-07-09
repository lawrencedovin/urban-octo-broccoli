import React, { useState } from 'react';

const UserForm = (() =>{
    const [username, setUsername] = useState('');

    const handleChange = ((e) => {
        let {value} = e.target;
        setUsername(value);
    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        alert(`Created user: ${username}`);
        setUsername('');
    })

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='username' value={username} onChange={handleChange}/>
            <button>Click me</button>
        </form>
    );
});

export default UserForm;