import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import FormMarkup from '../FormMarkup/FormMarkup';

class PutForm extends Component {
  goStudents = () => {
    this.props.history.push('/students');
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `/api/students/${this.props.match.params.id}`,
        this.props.state.values
      );

      if (data.errors) {
        this.props.setErrors(data.errors);
      } else {
        this.props.updateStudent(data);
        this.goStudents();
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { goStudents, handleSubmit } = this;
    const {
      state,
      handleTextChange,
      handleGpaChange,
      handleSchoolChange,
    } = this.props;

    return (
      <FormMarkup
        state={state}
        handleTextChange={handleTextChange}
        handleGpaChange={handleGpaChange}
        handleSchoolChange={handleSchoolChange}
        handleCancel={goStudents}
        handleSubmit={handleSubmit}
      />
    );
  }
}

export default withRouter(PutForm);
