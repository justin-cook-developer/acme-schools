import React, { Component } from 'react';

import FormMarkup from './StudentFormMarkup';

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

  render() {
    const { handleTextChange, handleGpaChange, handleSchoolChange } = this;
    return (
      <FormMarkup
        state={this.state}
        handleTextChange={handleTextChange}
        handleGpaChange={handleGpaChange}
        handleSchoolChange={handleSchoolChange}
        schools={this.props.schools}
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
