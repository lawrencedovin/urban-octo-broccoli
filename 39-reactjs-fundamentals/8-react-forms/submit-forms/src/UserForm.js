import React, { useState } from 'react';

const UserForm = (() =>{
    const [username, setUsername] = useState('');

    let handleChange = ((e) => {
        let {value} = e.target;
        console.log(value);
        setUsername(value);
    });

    return (
        <form>
            <input type="text" value={username} placeholder='username' onChange={handleChange}/>
            <button>Click me</button>
        </form>
    );
});

export default UserForm;