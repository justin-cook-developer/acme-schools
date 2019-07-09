import React from 'react';

import NavBrand from './NavBrand';
import NavMenu from './NavMenu';

const Nav = props => {
  const { navExpanded, toggleBar } = props;
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      onClick={navExpanded ? toggleBar : null}
    >
      <NavBrand navExpanded={navExpanded} toggleBar={toggleBar} />
      <NavMenu {...props} />
    </nav>
  );
};

export default Nav;
