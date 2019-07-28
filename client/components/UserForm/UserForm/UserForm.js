import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { gotUser } from '../../../actions/user';
import UserForm from './UserFormDumb';

const mapDispatchToProps = (dispatch, { history }) => ({
  addUser(user) {
    dispatch(gotUser(user))
      .then(() => history.push('/'))
      .catch(console.error);
  },
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserForm)
);
