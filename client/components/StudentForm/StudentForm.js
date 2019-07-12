import React, { Component } from 'react';

import FormMarkup from './FormMarkup/FormMarkup';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, email, GPA, schoolId } = props;
    this.state = {
      values: {
        firstName,
        lastName,
        email,
        GPA,
        schoolId,
      },
      errors: {},
    };
  }

  handleTextChange = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({
      ...state,
      values: { ...state.values, [name]: value },
    }));
  };

  handleGpaChange = ({ target }) => {
    const value = target.value;
    const GPA = value === '' ? value : parseFloat(target.value, 10);
    this.setState(state => ({
      ...state,
      values: { ...state.values, GPA },
    }));
  };

  handleSchoolChange = ({ target }) => {
    const value = target.value;
    const schoolId = target.value === '-- Not enrolled --' ? null : value;
    this.setState(state => ({
      ...state,
      values: { ...state.values, schoolId },
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await this.props.apiCall(this.state.values);
      if (data.errors) {
        this.setState(state => ({ ...state, errors: data.errors }));
      } else {
        this.props.affectStore(data);
        this.props.navigate();
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {
      handleTextChange,
      handleGpaChange,
      handleSchoolChange,
      handleSubmit,
      state,
    } = this;
    const { handleCancel } = this.props;
    return (
      <FormMarkup
        state={state}
        handleTextChange={handleTextChange}
        handleGpaChange={handleGpaChange}
        handleSchoolChange={handleSchoolChange}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    );
  }
}

StudentForm.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  GPA: 0.0,
  schoolId: null,
  schools: [],
};

export default StudentForm;
