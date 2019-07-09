import { connect } from 'react-redux';

import App from './AppDumb';
import { getStudents } from '../../actions/students';
import { getSchools } from '../../actions/schools';

const mapDispatchToProps = dispatch => ({
  fetchStudents() {
    dispatch(getStudents());
  },
  fetchSchools() {
    dispatch(getSchools());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);
