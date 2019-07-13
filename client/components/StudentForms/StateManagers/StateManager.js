import React, { Component, Fragment } from 'react';

class StateManager extends Component {
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

  setErrors = errors => {
    this.setState(state => ({ ...state, errors }));
  };

  render() {
    const {
      handleTextChange,
      handleGpaChange,
      handleSchoolChange,
      setErrors,
      state,
    } = this;
    return (
      <Fragment>
        {this.props.render({
          state,
          setErrors,
          handleTextChange,
          handleGpaChange,
          handleSchoolChange,
        })}
      </Fragment>
    );
  }
}

StateManager.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  GPA: 0.0,
  schoolId: null,
};

export default StateManager;
