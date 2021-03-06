export const GOT_STUDENTS = 'GOT_STUDENTS';
export const CREATED_STUDENT = 'CREATED_STUDENT';
export const UPDATED_STUDENT = 'UPDATED_STUDENT';
export const DELETED_STUDENT = 'DELETED_STUDENT';

const gotSudents = students => ({ type: GOT_STUDENTS, students });
export const getStudents = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get('/api/students');
    dispatch(gotSudents(data));
  } catch (error) {
    console.error(error);
  }
};

export const madeStudent = student => ({ type: CREATED_STUDENT, student });

export const updatedStudent = student => ({ type: UPDATED_STUDENT, student });
export const updateStudentsSchool = (studentId, schoolId) => async (
  dispatch,
  _,
  axios
) => {
  try {
    const { data } = await axios.put(`api/students/${studentId}`, { schoolId });
    dispatch(updatedStudent(data));
  } catch (error) {
    console.error(error);
  }
};

const deletedStudent = id => ({ type: DELETED_STUDENT, id });
export const deleteStudent = id => async (dispatch, _, axios) => {
  try {
    await axios.delete(`api/students/${id}`);
    dispatch(deletedStudent(id));
  } catch (error) {
    console.error(error);
  }
};
