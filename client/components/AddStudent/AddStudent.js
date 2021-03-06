import React from 'react';

import StateManager from '../StudentForms/StateManagers/StateManager';
import PostForm from '../StudentForms/PostForm/PostForm';

const AddStudent = () => {
  return (
    <section className="section">
      <div className="content has-text-centered">
        <h2 className="title">Add a student!</h2>
      </div>
      <div className="columns is-centered">
        <div className="column is-half">
          <StateManager
            render={dependencies => <PostForm {...dependencies} />}
          />
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
