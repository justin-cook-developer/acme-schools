import { GET_SCHOOLS } from '../actions/schools';

export default (state = [], action) => {
  switch (action.type) {
    case GET_SCHOOLS: {
      return action.schools;
    }
    default:
      return state;
  }
};
