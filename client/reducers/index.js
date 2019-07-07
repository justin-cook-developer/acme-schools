import { combineReducers } from 'redux';
import students from './students';
import schools from './schools';

const reducer = combineReducers({
  students,
  schools,
});

export default reducer;
