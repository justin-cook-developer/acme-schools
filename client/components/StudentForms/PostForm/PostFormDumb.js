import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import FormMarkup from '../FormMarkup/FormMarkup';

class PostForm extends Component {
  goBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        '/api/students',
        this.props.state.values
      );

      if (data.errors) {
        this.props.setErrors(data.errors);
      } else {
        console.log(this.props.addStudent);
        this.props.addStudent(data);
        this.goBack();
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { goBack, handleSubmit } = this;
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
        handleCancel={goBack}
        handleSubmit={handleSubmit}
      />
    );
  }
}

export default withRouter(PostForm);
