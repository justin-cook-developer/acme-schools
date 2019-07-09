import React from 'react';

const NavBurger = ({ navExpanded, toggleBar }) => (
  <a
    role="button"
    className={`navbar-burger burger ${navExpanded ? 'is-active' : ''}`}
    aria-label="menu"
    aria-expanded="false"
    data-target="navbarBasicExample"
    onClick={e => {
      e.stopPropagation();
      toggleBar();
    }}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

export default NavBurger;
