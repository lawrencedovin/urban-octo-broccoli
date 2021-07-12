import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProfileSearchForm from './ProfileSearchForm';

const ProfileViewerWithSearch = () => {
    const [profile, setProfile] = useState(null);
    const [url, setUrl] = useState("https://api.github.com/users/lawrencedovin");

    // search uses input value as a parameter
    // from child component in form to update setUrl
    const search = term => {
        setUrl(`https://api.github.com/users/${term}`);
    };

    // sends a request to the current url value and returns 
    // a response with the github data, which then updates the 
    // profile state.
    useEffect(() => {
        async function loadProfile() {
            try {
                const res = await axios.get(url);
                setProfile(res.data.name);
            }
            catch(e) {
                console.log(e);
            }
        }
        loadProfile();
    }, [url]);

    return (
        <div>
            {profile ? <h1>Hi {profile}</h1> : <h1>Loading...</h1>}
            <ProfileSearchForm search={search} />
        </div>
    );
};

export default ProfileViewerWithSearch;