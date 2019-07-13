import { connect } from 'react-redux';

import PostForm from './PostFormDumb';
import { madeStudent } from '../../../actions/students';

const mapDispatchToProps = dispatch => ({
  addStudent(student) {
    const action = madeStudent(student);
    dispatch(action);
  },
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
