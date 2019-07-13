import {
  GOT_STUDENTS,
  CREATED_STUDENT,
  UPDATED_STUDENT,
  DELETED_STUDENT,
} from '../actions/students';

export default (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS: {
      return action.students;
    }
    case CREATED_STUDENT: {
      return [...state, action.student];
    }
    case UPDATED_STUDENT: {
      return state.map(student =>
        student.id === action.student.id ? action.student : student
      );
    }
    case DELETED_STUDENT: {
      return state.filter(({ id }) => id !== action.id);
    }
    default:
      return state;
  }
};
