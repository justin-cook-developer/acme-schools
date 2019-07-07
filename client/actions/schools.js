export const GOT_SCHOOLS = 'GOT_SCHOOLS';

const gotSchools = schools => ({ type: GOT_SCHOOLS, schools });
export const fetchSchools = () => async (dispatch, _, axios) => {
  try {
    const { data } = await axios.get('/api/schools');
    dispatch(gotSchools(data));
  } catch (error) {
    console.error(error);
  }
};
