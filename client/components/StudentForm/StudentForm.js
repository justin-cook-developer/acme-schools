import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as emailIcon } from '@fortawesome/free-solid-svg-icons';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, email, GPA, schoolId } = props;
    this.state = {
      firstName,
      lastName,
      email,
      GPA,
      schoolId,
    };
  }

  handleTextChange = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({ ...state, [name]: value }));
  };

  handleGpaChange = ({ target }) => {
    const value = target.value;
    const GPA = Number.isNaN(value) ? 0 : parseFloat(target.value, 10);
    console.log(GPA);
    this.setState(state => ({ ...state, GPA }));
  };

  render() {
    const { firstName, lastName, email, GPA } = this.state;
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label" htmlFor="firstName">
            First Name
          </label>
          <div className="control">
            <input
              value={firstName}
              onChange={this.handleTextChange}
              name="firstName"
              className="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="lastName">
            Last Name
          </label>
          <div className="control">
            <input
              value={lastName}
              onChange={this.handleTextChange}
              name="lastName"
              className="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="control has-icons-left">
            <input
              value={email}
              onChange={this.handleTextChange}
              name="email"
              className="input"
              type="text"
              placeholder="Email input"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={emailIcon} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="GPA">
            GPA
          </label>
          <div className="control">
            <input
              value={GPA}
              onChange={this.handleGpaChange}
              name="GPA"
              className="input"
              type="number"
              min="0.0"
              max="5.0"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="school">
            School
          </label>
          <div className="control">
            <div className="select">
              <select name="school">
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button type="button" className="button is-text">
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

StudentForm.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  GPA: 0.0,
  schoolId: null,
};

export default StudentForm;
