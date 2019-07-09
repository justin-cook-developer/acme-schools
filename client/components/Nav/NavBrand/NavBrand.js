import React from 'react';
import { Link } from 'react-router-dom';

import NavBurger from '../NavBurger/NavBurger';

const NavBrand = () => (
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img
        src="http://acmeschool.ca/images/template/logo.png"
        width="112"
        height="28"
      />
    </Link>
    <NavBurger />
  </div>
);

export default NavBrand;
