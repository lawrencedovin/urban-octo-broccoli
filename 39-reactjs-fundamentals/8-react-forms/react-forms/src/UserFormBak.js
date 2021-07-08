import React, { useState } from 'react';

const UserFormBak = (() => {
    const [username, setUsername] = useState('Chickenz');
    const updateUser = ((e) => {
        let {value} = e.target;
        setUsername(value);
    });
    const returnUser = (() => {
        console.log(username);
    })
    return (
        <form>
            <input type='text' placeholder='username' value={username} onChange={updateUser}/>
            <button onClick={returnUser}>Set User</button>
        </form>
    );
});

export default UserFormBak;