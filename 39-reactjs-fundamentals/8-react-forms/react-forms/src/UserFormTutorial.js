import React, { useState } from 'react';
import UserInput from './UserInput';

const UserFormTutorial = (() => {
    const INITIALSTATE = {
        username: '',
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(INITIALSTATE);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            // All of the previous data stays the same and passes in.
            // Only 1 value changes while the other fields stay same.
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {username, email, password} = formData;
        alert(`Created user, ${username} w/ email ${email} & password ${password}`);
        setFormData(INITIALSTATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <UserInput 
                inputName="username" 
                inputValue={formData.username} 
                handleChange={handleChange}
            />
            
            <UserInput 
                inputName="email" 
                inputValue={formData.email} 
                handleChange={handleChange}
            />

            <UserInput 
                inputName="password" 
                inputValue={formData.password} 
                handleChange={handleChange}
            />
            <button id="submitBtn">Add me to List!</button>
        </form>
    );
});

export default UserFormTutorial;