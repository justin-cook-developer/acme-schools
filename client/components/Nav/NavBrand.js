import React from 'react';
import { Link } from 'react-router-dom';

const NavBurger = ({ navExpanded, toggleBar }) => (
  <a
    role="button"
    className={`navbar-burger burger ${navExpanded ? 'is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
    onClick={toggleBar}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

const NavBrand = props => (
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img
        src="http://acmeschool.ca/images/template/logo.png"
        width="112"
        height="28"
      />
    </Link>
    <NavBurger {...props} />
  </div>
);

export default NavBrand;
