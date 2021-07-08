import React, { useState } from 'react';

const UserForm = (() => {
    const [username, setUsername] = useState("ChickenLady");
    const handleChange = (e) => {
        let {value, style} = e.target;
        // Gets input value onChange
        let newValue = value;
        // Sets input value onChange
        if(newValue.length < 15) {
            setUsername(value);
            style.borderColor = 'green';
        }
        else {
            style.borderColor = 'red';
        }
    }
    return (
        <form>
            <input type="text" placeholder="username" value={username} onChange={handleChange}/>
            <button>Add me to List!</button>
        </form>
    );
});

export default UserForm;