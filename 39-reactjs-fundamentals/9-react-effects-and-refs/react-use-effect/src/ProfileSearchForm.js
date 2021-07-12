import React, { useState } from 'react';

const ProfileSearchForm = ({search}) => {
    const INITIAL_STATE = '';
    const [term, setTerm] = useState(INITIAL_STATE);

    // Changes the term based on input value
    const handleChange = evt => {
        // Gets the value of the input that it is attached to
        setTerm(evt.target.value);  
    };

    // Search is a function from the parent component
    // which takes in a term to search a profile
    const handleSubmit = evt => {
        evt.preventDefault();
        search(term);
        setTerm(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" name="search" value={term} onChange={handleChange}/>
            <button>Search</button>
        </form>
    );
};

export default ProfileSearchForm;