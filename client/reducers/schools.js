import { GOT_SCHOOLS } from '../actions/schools';

export default (state = [], action) => {
  switch (action.type) {
    case GOT_SCHOOLS: {
      return action.schools;
    }
    default:
      return state;
  }
};
