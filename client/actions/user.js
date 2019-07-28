const Axios = require('axios');

export const GOT_USER = 'GOT_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const gotUser = user => ({
  type: GOT_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const getMe = () => async dispatch => {
  try {
    const { data: user } = await Axios.get('/auth/me');
    if (user.id) {
      dispatch(gotUser(user));
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeMe = () => async dispatch => {
  try {
    await Axios.delete('/auth/logout');
    dispatch(removeUser());
  } catch (error) {
    console.error(error);
  }
};
