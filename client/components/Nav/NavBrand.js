import React from 'react';
import { Link } from 'react-router-dom';

const NavBurger = () => (
  <a
    role="button"
    className="navbar-burger burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

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
