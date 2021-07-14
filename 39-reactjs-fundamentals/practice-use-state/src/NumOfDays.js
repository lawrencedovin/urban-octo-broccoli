import React, { useState } from 'react';

const NumOfDays = () => {
    const [days, setDays] = useState(0);

    const handleChange = () => {
        setDays(days + 1);
    }

    return (
        <>
            <h3>{days} days learning React!</h3>
            <button onClick={handleChange}>Update</button>
        </>
    );
};

export default NumOfDays;