import { POST_CONTACT, ERROR_POST_CONTACT } from './types';
import axiosStrapi from '../api/axiosStrapi';

import { setAlert } from './alert';

export const createContact = values => async dispatch => {
  try {
    const res = await axiosStrapi.post('/contacts', values);

    console.log(res);
    dispatch({
      type: POST_CONTACT,
      payload: res.data
    });

    dispatch(
      setAlert('Your message was successfully sent to Brian!', 'success')
    );
  } catch (err) {
    console.log(err.response);
    const error = err.response.data.message;
    console.log(error);

    dispatch(setAlert(error, 'danger'));

    dispatch({
      type: ERROR_POST_CONTACT,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
