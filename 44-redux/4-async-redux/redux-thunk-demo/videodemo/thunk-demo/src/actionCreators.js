import axios from 'axios';

const API_URL = 'https://api.github.com/users';

export function fetchProfile(username) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${API_URL}/${username}`);
      dispatch(gotProfile(data))
    } catch (e) {
      dispatch(gotError())
    }
  }
}


export function gotProfile(profile) {
  return {
    type: 'FETCH_PROFILE',
    profile
  }
}

export function gotError() {
  return {
    type: 'ERROR'
  }
}

