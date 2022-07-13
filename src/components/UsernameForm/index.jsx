import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function UsernameForm() {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const repoData = useSelector((state) => state.repoData);
  const profileData = useSelector((state) => state.profileData);

  const repoDataSetter = (reposData) => {
    dispatch({ type: 'REPO_DATA', payload: reposData });
  };

  const profileDataSetter = (userDetails) => {
    dispatch({ type: 'PROFILE_DATA', payload: userDetails });
  };

  async function setUserData(query) {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${query}/repos`
      );
      await repoDataSetter(result.data);
      await profileDataSetter(result.data[0].owner);
      console.log('repoData: ' + JSON.stringify(repoData));
      console.log('profileData: ' + JSON.stringify(profileData));
      console.log(
        profileData.login,
        profileData.avatar_url,
        profileData.showProfile
      );

      console.log(repoData);
    } catch (error) {
      console.log(error);
    }
  }

  function updateInput(e) {
    setInput(e.target.value);
  }

  async function submitUsername(e) {
    e.preventDefault();
    await setUserData(input);
    setInput('');
  }

  return (
    <div>
      <form onSubmit={submitUsername}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          onChange={updateInput}
          type="text"
          id="username"
          name="username"
          value={input}
        />
        <br />
        <button type="submit">Get Repos!</button>
      </form>
    </div>
  );
}
