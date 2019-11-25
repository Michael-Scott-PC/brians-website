import axios from './axios';

import { GET_BRIAN, GET_REALTORS } from './types';

// Get a specific realtor
export const getBrianInfo = () => async dispatch => {
  try {
    const res = await axios.get(`/realtors/5dd6c2a063b42e084c49071f`);

    dispatch({
      type: GET_BRIAN,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

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
