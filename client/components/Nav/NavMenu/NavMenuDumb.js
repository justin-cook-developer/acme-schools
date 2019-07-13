import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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

const NavStart = ({ students, schools, mostPopular, bestGPA }) => (
  <div className="navbar-start">
    <NavLink className="navbar-item is-size-5" to="/students">
      Students ({students.length})
    </NavLink>
    <NavLink className="navbar-item is-size-5" to="/schools">
      Schools ({schools.length})
    </NavLink>
    {mostPopular && mostPopular.length === 2 && (
      <NavLink
        className="navbar-item is-size-5"
        to={`/schools/${mostPopular[0].id}`}
      >
        Most Popular: {mostPopular[0].name} ({mostPopular[1]})
      </NavLink>
    )}
    {bestGPA && bestGPA.length === 2 && (
      <NavLink
        className="navbar-item is-size-5"
        to={`/schools/${bestGPA[0].id}`}
      >
        Top School: {bestGPA[0].name} ({bestGPA[1]})
      </NavLink>
    )}
  </div>
);

const NavMenu = props => {
  const { navExpanded } = props;
  return (
    <div className={`navbar-menu ${navExpanded ? 'is-active' : ''}`}>
      <NavStart {...props} />
      <NavEnd />
    </div>
  );
};

export default NavMenu;
