import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileDataSetter, reposDataSetter } from '../../actions';
import { Button } from "react-bootstrap";
import axios from 'axios';
import "./index.css";

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
    <div className="form-container">
      <form className="search-form" onSubmit={submitUsername}>
        <label className="search-form-label" htmlFor="username">GitHub Username</label>
        <br />
        <input
          onChange={updateInput}
          type="text"
          id="username"
          name="username"
          value={input}
        />
        <br />
        <Button className="search-form-btn" type="submit">Get User Repos!</Button>
      </form>
    </div>
  );
}
