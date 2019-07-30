const Axios = require('axios');

export const GOT_USER = 'GOT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const LOADING_USER = 'LOADING_USER';
export const NO_USER = 'NO_USER';

const noUser = () => ({
  type: NO_USER,
});

const loadingUser = () => ({
  type: LOADING_USER,
});

export const gotUser = user => ({
  type: GOT_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const getMe = () => async (dispatch, getState) => {
  try {
    if (getState().user.loadingUser === false) {
      dispatch(loadingUser());
    }
    const { data: user } = await Axios.get('/auth/me');
    if (user.id) {
      dispatch(gotUser(user));
    } else {
      dispatch(noUser());
    }
  } catch (error) {
    dispatch(noUser());
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
