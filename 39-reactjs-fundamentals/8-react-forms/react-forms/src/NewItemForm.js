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
        // Good for scaling, if you have more fields
        // other than name and quantity it automatically
        // adds that to the spread.
        addItem({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <UserInput 
                name="name" 
                value={formData.name} 
                type="text"
                handleChange={handleChange}
            />
            <UserInput 
                name="quantity" 
                value={formData.quantity}
                type="number" 
                handleChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    );
}

export default NewItemForm;