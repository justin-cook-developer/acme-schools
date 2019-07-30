import React, { Component } from 'react';
import Axios from 'axios';
import FormMarkup from '../FormMarkup/Form';

class UserForm extends Component {
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
      const res = await Axios[this.props.method](
        this.props.route,
        this.state.values
      );

      console.log(res);

      if (res.data.errors) {
        this.handleErrors(res.data.errors);
      } else {
        this.props.addUser(res.data);
      }
    } catch (error) {
      if (error.message.includes('401')) {
        this.handleErrors({ auth: 'Invalid email or password.' });
      } else {
        console.error(error);
      }
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
