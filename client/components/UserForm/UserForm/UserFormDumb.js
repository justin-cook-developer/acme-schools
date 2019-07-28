import React, { Class } from 'react';
import Axios from 'axios';
import FormMarkup from '../FormMarkup/Form';

class UserForm extends Class {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: '',
        password: '',
      },
      errors: {},
    };
  }

  clear = () => {
    this.setState({
      values: {
        email: '',
        password: '',
      },
      errors: {},
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({
      ...state,
      values: { ...state.values, [name]: value },
    }));
  };

  handleErrors = errors => {
    this.setState(state => ({
      ...state,
      errors,
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await Axios[this.props.method](
        this.props.route,
        this.props.values
      );

      if (data.errors) {
        this.props.handleErrors(data.errors);
      } else {
        this.props.addUser(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { handleChange, handleSubmit, clear } = this;
    return (
      <FormMarkup
        {...this.state}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        clear={clear}
      />
    );
  }
}

export default UserForm;
