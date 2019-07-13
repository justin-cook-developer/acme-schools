import { connect } from 'react-redux';

import { updateStudentsSchool } from '../../actions/students';
import SchoolCard from './SchoolCardDumb';

const mapStateToProps = ({ students }) => ({ students });

const mapDispatchToProps = dispatch => ({
  updateStudent(studentId, schoolId) {
    const thunk = updateStudentsSchool(studentId, schoolId);
    dispatch(thunk);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolCard);
