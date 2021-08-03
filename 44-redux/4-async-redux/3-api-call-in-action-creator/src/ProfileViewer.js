import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {fetchProfile} from './actionCreators';

const ProfileViewer = ({ username = 'elie' }) => {
    const profile = useSelector(state => state.profile, shallowEqual);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        // Uses a promise and doesn't work
        dispatch(fetchProfile())
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