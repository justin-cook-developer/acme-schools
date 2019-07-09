import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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

const NavEnd = () => (
  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">
        <Link to="/addStudent" className="button is-success is-small">
          Add a Student!
        </Link>
      </div>
    </div>
  </div>
);

const NavMenu = ({ students, schools, mostPopular, bestGPA }) => (
  <div className="navbar-menu">
    <div className="navbar-start">
      <NavLink className="navbar-item" to="/students">
        Students ({students.length})
      </NavLink>
      <NavLink className="navbar-item" to="/schools">
        Schools ({schools.length})
      </NavLink>
      {mostPopular && mostPopular.length === 2 && (
        <NavLink className="navbar-item" to={`/schools/${mostPopular[0].id}`}>
          Most Popular: {mostPopular[0].name} ({mostPopular[1]})
        </NavLink>
      )}
      {bestGPA && bestGPA.length === 2 && (
        <NavLink className="navbar-item" to={`/schools/${bestGPA[0].id}`}>
          Top School: {bestGPA[0].name} ({bestGPA[1]} AVG GPA)
        </NavLink>
      )}
    </div>
    <NavEnd />
  </div>
);

const Nav = props => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <NavBrand />
      <NavMenu {...props} />
    </nav>
  );
};

export default Nav;
