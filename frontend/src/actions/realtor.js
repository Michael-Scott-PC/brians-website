import axios from './axios';

import { GET_REALTORS } from './types';

// Get all realtors
export const getRealtors = () => async dispatch => {
  try {
    const res = await axios.get('/realtors');

    dispatch({
      type: GET_REALTORS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
