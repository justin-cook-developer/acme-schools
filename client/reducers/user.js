import { GOT_USER, REMOVE_USER } from '../actions/user';

export default (state = {}, action) => {
  switch (action.type) {
    case GOT_USER: {
      return action.user;
    }
    case REMOVE_USER: {
      return {};
    }
    default:
      return state;
  }
};
