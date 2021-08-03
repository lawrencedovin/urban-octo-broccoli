import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {fetchProfile} from './actionCreators';
import axios from 'axios';

const API_URL = 'https://api.github.com/users/lawrencedovin';

const ProfileViewer = ({ username = 'lawrencedovin' }) => {
    const profile = useSelector(state => state.profile, shallowEqual);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProfile() {
            const {data} = await axios.get(API_URL);
            // sets profile store to data stored from response
            dispatch(fetchProfile(data))
        }
        getProfile();
    }, [dispatch, username])

    if (error) {
        return <h1>Something bad happened. Please try again later...</h1>;
    }
    
    return (
        <div>
            <h1>Hello {profile.name}</h1>
            <img src={profile['avatar_url']} alt='avatar of github user' />
            <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
    );
}

export default ProfileViewer;