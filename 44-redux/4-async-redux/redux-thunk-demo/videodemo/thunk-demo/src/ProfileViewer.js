import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchProfile } from './actionCreators';


function ProfileViewer({ username = 'elie' }) {
  const profile = useSelector(st => st.profile, shallowEqual);
  const error = useSelector(st => st.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile(username))
  }, [dispatch, username])


  if (error) {
    return <h1>Something bad happened. Please try again later...</h1>;
  }

  return (
    <div>
      <h1>Hello {profile.name}</h1>
      <img src={profile['avatar_url']} />
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}

export default ProfileViewer;
