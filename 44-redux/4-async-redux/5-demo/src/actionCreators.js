import axios from 'axios';
const API_URL = 'https://api.github.com/users/lawrencedovin';

export function fetchProfile() {
    return async function(dispatch) {
        const {data} = await axios.get(API_URL);
        dispatch(gotProfile(data))
    }
}

export function gotProfile(profile) {
    return {
        type: 'FETCH_PROFILE',
        profile
    }
}