import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileDataSetter, reposDataSetter } from '../../actions';
import axios from 'axios';

export default function UsernameForm() {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const setUserData = async (query) => {
    try {
      const result = await axios.get(
        `https://api.github.com/users/${query}/repos`
      );
      dispatch(reposDataSetter(result.data));
      dispatch(profileDataSetter(result.data[0].owner));
    } catch (error) {
      console.warn(error.message);
    }
  };

  function updateInput(e) {
    setInput(e.target.value);
  }

  function submitUsername(e) {
    e.preventDefault();
    setUserData(input);
    setInput('');
  }

  return (
    <div>
      <form onSubmit={submitUsername}>
        <label htmlFor="username">GitHub Username</label>
        <br />
        <input
          onChange={updateInput}
          type="text"
          id="username"
          name="username"
          value={input}
        />
        <br />
        <button type="submit">Get user repos</button>
      </form>
    </div>
  );
}
