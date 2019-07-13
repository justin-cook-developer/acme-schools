import { connect } from 'react-redux';

import PutForm from './PutFormDumb';
import { updatedStudent } from '../../../actions/students';

const mapDispatchToProps = dispatch => ({
  updateStudent(student) {
    const action = updatedStudent(student);
    dispatch(action);
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PutForm);
