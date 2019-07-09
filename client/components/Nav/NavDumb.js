import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import NavBrand from './NavBrand'
import NavMenu from './NavMenu'

const Nav = props => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <NavBrand />
      <NavMenu {...props} />
    </nav>
  );
};

export default Nav;
