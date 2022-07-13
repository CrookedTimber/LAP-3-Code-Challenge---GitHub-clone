import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

function Navbar() {
  // const navigate = useNavigate();

  return (
    <>
    <header className="header">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
      
        <NavLink to="/repos">Repos</NavLink>
      </nav>
    </header>
    </>
  );
}

export default Navbar;
