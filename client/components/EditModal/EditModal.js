import React from 'react';

import PutStateManager from '../StudentForms/StateManagers/PutStateManager';
import PutForm from '../StudentForms/PutForm/PutForm';

const EditModal = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <PutStateManager
          render={dependencies => <PutForm {...dependencies} />}
        />
      </div>
    </div>
  );
};

export default EditModal;
