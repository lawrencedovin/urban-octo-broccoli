import React, { useState, useEffect } from 'react';
import axios from 'axios';
// "https://api.github.com/users/lawrencedovin"

const ProfileViewer = (() => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function loadProfile() {
            const res = await axios.get("https://api.github.com/users/lawrencedovin");
            setData(res.data.name);
        }
        loadProfile();
    }, []);

    return (
        <h3>{data ? data : 'Loading...'}</h3>
    );
});

export default ProfileViewer;