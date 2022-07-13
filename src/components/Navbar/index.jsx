import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchPage } from '../../pages';
import './style.css';

function Navbar() {
  // const navigate = useNavigate();

  return (
    <>
    <nav>
      <NavLink to="/">Home</NavLink>
      <SearchPage />
      <NavLink to="/repos">Repos</NavLink>
    </nav>
    </>
  );
}

export default Navbar;
