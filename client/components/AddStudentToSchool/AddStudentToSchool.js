import { connect } from 'react-redux';

import { updateStudentsSchool } from '../../actions/students';
import Select from './Select';

const mapStateToProps = ({ students }, { school }) => {
  const notAttending = students.filter(s => s.schoolId !== school.id);
  return { notAttending };
};

const mapDispatchToProps = (dispatch, { school }) => ({
  changeStudentsSchool(studentId) {
    const thunk = updateStudentsSchool(studentId, school.id);
    dispatch(thunk);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select);
