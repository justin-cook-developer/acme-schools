import React from 'react';

import NavBrand from './NavBrand/NavBrand';
import NavMenu from './NavMenu/NavMenu';

const Nav = ({ navExpanded, toggleBar }) => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
    onClick={navExpanded ? toggleBar : null}
  >
    <NavBrand />
    <NavMenu />
  </nav>
);

export default Nav;
