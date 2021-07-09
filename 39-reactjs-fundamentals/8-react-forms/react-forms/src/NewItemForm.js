import React, { useState } from 'react';
import UserInput from './UserInput';

const NewItemForm = ({ addItem }) => {
    const INITIAL_STATE = {
        name: '',
        quantity: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, quantity} = formData;
        addItem(name, quantity);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <UserInput 
                inputName="name" 
                inputValue={formData.name} 
                handleChange={handleChange}
            />
            <UserInput 
                inputName="quantity" 
                inputValue={formData.quantity} 
                handleChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    );
}

export default NewItemForm;