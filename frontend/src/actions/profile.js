import { CREATE_USER, ERROR_CREATE_USER } from './types';
import axiosStrapi from '../api/axiosStrapi';

export const createUser = values => async dispatch => {
  try {
    const res = await axiosStrapi.post('/auth/local/register', values);

    dispatch({
      type: CREATE_USER,
      payload: res.data
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: ERROR_CREATE_USER,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
