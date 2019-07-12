import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as emailIcon } from '@fortawesome/free-solid-svg-icons';

const FormMarkup = ({
  state,
  handleTextChange,
  handleGpaChange,
  handleSchoolChange,
  handleSubmit,
  handleCancel,
  schools,
}) => {
  const { firstName, lastName, email, GPA, schoolId } = state.values;
  const {
    firstName: _first,
    lastName: _last,
    email: _email,
    GPA: _GPA,
  } = state.errors;

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="field">
        <label className="label" htmlFor="firstName">
          First Name
        </label>
        <div className="control">
          <input
            value={firstName}
            onChange={handleTextChange}
            name="firstName"
            className="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        {_first && <p className="help is-danger">{_first}</p>}
      </div>

      <div className="field">
        <label className="label" htmlFor="lastName">
          Last Name
        </label>
        <div className="control">
          <input
            value={lastName}
            onChange={handleTextChange}
            name="lastName"
            className="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
        {_last && <p className="help is-danger">{_last}</p>}
      </div>

      <div className="field">
        <label className="label" htmlFor="email">
          Email
        </label>
        <div className="control has-icons-left">
          <input
            value={email}
            onChange={handleTextChange}
            name="email"
            className="input"
            type="text"
            placeholder="Email input"
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={emailIcon} />
          </span>
        </div>
        {_email && <p className="help is-danger">{_email}</p>}
      </div>

      <div className="field">
        <label className="label" htmlFor="GPA">
          GPA
        </label>
        <div className="control">
          <input
            value={GPA}
            onChange={handleGpaChange}
            name="GPA"
            className="input"
            type="number"
          />
        </div>
        {_GPA && <p className="help is-danger">{_GPA}</p>}
      </div>

      <div className="field">
        <label className="label" htmlFor="school">
          School
        </label>
        <div className="control">
          <div className="select">
            <select name="school" onChange={handleSchoolChange}>
              <option value={null}>-- Not enrolled --</option>
              {schools.map(school => {
                return (
                  <option
                    key={school.id}
                    value={school.id}
                    selected={school.id === schoolId}
                  >
                    {school.name}
                  </option>
                );
              })}
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
          <button
            type="button"
            className="button is-text"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormMarkup;
