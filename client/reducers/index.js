import { combineReducers } from 'redux';
import students from './students';
import schools from './schools';
import ui from './ui';

const reducer = combineReducers({
  students,
  schools,
  ui,
});

export default reducer;
