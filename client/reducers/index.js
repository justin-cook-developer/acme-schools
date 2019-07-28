import { combineReducers } from 'redux';
import students from './students';
import schools from './schools';
import ui from './ui';
import user from './user';

const reducer = combineReducers({
  students,
  schools,
  ui,
  user,
});

export default reducer;
