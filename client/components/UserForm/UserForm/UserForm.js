import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { gotUser } from '../../../actions/user';
import UserForm from './UserFormDumb';

// takes method and route as prop for axios

const mapDispatchToProps = (dispatch, { history }) => ({
  addUser(user) {
    dispatch(gotUser(user));
    history.push('/');
  },
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserForm)
);
