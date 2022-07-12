import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import './style.css';

function Navbar() {
  // const navigate = useNavigate();

  return (
    <nav>
      <h1
      // to="/"
      >
        Pull Requests
      </h1>
      <h1
      // to="/about"
      >
        Issues
      </h1>
      <h1
      // to="/search"
      >
        Market Place
      </h1>
    </nav>
  );
}

export default Navbar;
