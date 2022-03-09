import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          VIDEOS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/videos">MY VIDEO</NavLink>
      </li>
      <li>
        <NavLink to="/video/new">ADD VIDEO</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
