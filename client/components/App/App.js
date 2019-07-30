import { connect } from 'react-redux';

import App from './AppDumb';
import { getStudents } from '../../actions/students';
import { getSchools } from '../../actions/schools';
import { getMe } from '../../actions/user';

const mapDispatchToProps = dispatch => ({
  fetchData() {
    dispatch(getMe())
      .then(() => {
        dispatch(getStudents());
        dispatch(getSchools());
      })
      .catch(console.error);
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
