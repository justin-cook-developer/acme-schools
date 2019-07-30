import { GOT_USER, REMOVE_USER, LOADING_USER, NO_USER } from '../actions/user';

const initialState = {
  user: {},
  loadingUser: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER: {
      return { ...state, loadingUser: true };
    }
    case NO_USER: {
      return { ...state, loadingUser: false };
    }
    case GOT_USER: {
      return { loadingUser: false, user: action.user };
    }
    case REMOVE_USER: {
      return { user: {}, loadingUser: false };
    }
    default:
      return state;
  }
};
