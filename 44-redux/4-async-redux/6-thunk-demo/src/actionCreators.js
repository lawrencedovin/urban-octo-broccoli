import axios from 'axios';
const API_URL = 'https://api.github.com/users';

export function fetchProfile(username) {
    return async function(dispatch) {
        const {data} = await axios.get(`${API_URL}/${username}`);
        dispatch(gotProfile(data))
    }
}

export function gotProfile(profile) {
    return {
        type: 'FETCH_PROFILE',
        profile
    }
}