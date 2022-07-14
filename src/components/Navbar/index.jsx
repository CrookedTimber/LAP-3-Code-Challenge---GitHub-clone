import React from 'react';
import github from "../../assets/github-icon.jpg";

import './style.css';

function Navbar() {
  // const navigate = useNavigate();

  return (
    <>
    <header>
      <nav className="navbar">
      <img className="header-img" src={github} alt="github logo"></img>
        <h1>Github Repo Tracker</h1>
      </nav>
    </header>
    </>
  );
}

export default Navbar;
