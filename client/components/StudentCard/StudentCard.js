import { connect } from 'react-redux';

import StudentCard from './StudentCardDumb';
import { deleteStudent } from '../../actions/students';

const mapStateToProps = ({ schools }, { student }) => {
  let passedState = {};

  if (student.schoolId) {
    const studentSchool = schools.find(({ id }) => id === student.schoolId);
    if (studentSchool) {
      passedState = { studentSchool };
    }
  }

  return passedState;
};

const mapDispatchToProps = dispatch => ({
  destroyStudent(id) {
    dispatch(deleteStudent(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentCard);
