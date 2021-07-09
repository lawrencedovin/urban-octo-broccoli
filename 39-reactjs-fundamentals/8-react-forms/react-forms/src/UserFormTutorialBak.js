import React, { useState } from 'react';
import UserInput from './UserInput';

const UserFormTutorialBak = (() => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    // const handleUsernameChange = (e) => {
    //     let {value} = e.target;
    //     setUsername(value);
    // }

    // const handleEmailChange = (e) => {
    //     let {value} = e.target;
    //     setEmail(value);
    // }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Created user ${username} with email ${email}!`);
    //     setUsername('');
    // }
    return (
        <form>
            <UserInput 
                inputName="username" 
                inputValue={formData.username} 
                onChange={setFormData.username}
            />
            
            <UserInput 
                inputName="email" 
                inputValue={formData.email} 
                onChange={setFormData.email}
            />

            <button id="submitBtn">Add me to List!</button>
        </form>
    );
});

export default UserFormTutorialBak;