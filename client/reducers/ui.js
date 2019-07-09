import { TOGGLE_BURGER } from '../actions/ui';

const initialState = {
  navExpanded: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER: {
      return { ...state, navExpanded: !state.navExpanded };
    }
    default: {
      return state;
    }
  }
};
