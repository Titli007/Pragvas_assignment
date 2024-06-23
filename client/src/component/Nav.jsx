import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css'; // Import the CSS file for styling

const Nav = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/list" activeClassName="active">
        Employee List
      </NavLink>
    </nav>
  );
};

export default Nav;
