import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/applications" activeStyle={activeStyle}>
        Applications
      </NavLink>
      {' | '}
      <NavLink to="/applicationTypes" activeStyle={activeStyle}>
        Application Types
      </NavLink>
    </nav>
  );
}

export default Header;
