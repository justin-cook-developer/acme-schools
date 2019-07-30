import React from 'react';
import { Link } from 'react-router-dom';

import UserForm from '../UserForm/UserForm/UserForm';

const Login = () => {
  return (
    <section className="section">
      <div className="content has-text-centered">
        <h2 className="title">
          Login! Or <Link to="/signup">sign up</Link>!
        </h2>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <UserForm method="put" route="/auth/login" />
        </div>
      </div>
    </section>
  );
};

export default Login;
