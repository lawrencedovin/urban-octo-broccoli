import axios from 'axios';

const API_URL = 'https://api.github.com/users/elie';

export async function fetchProfile() {
    const res = await axios.get(API_URL);
    const { data } = res;
    return {
        type: 'FETCH_PROFILE',
        profile: data
    }
}