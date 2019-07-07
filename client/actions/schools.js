export const GET_SCHOOLS = 'GET_SCHOOLS';

const gotSchools = schools => ({ type: GET_SCHOOLS, schools });
export const fetchSchools = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get('/api/schools');
    dispatch(gotSchools(data));
  } catch (error) {
    console.error(error);
  }
};
