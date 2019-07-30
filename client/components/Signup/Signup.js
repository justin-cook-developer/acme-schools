import React from 'react';
import { Link } from 'react-router-dom';

import UserForm from '../UserForm/UserForm/UserForm';

const Signup = () => {
  return (
    <section className="section">
      <div className="content has-text-centered">
        <h2 className="title">
          Signup! Or <Link to="/login">login</Link>!
        </h2>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <UserForm method="post" route="/auth/signup" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
