import axios from './axios';

import { GET_BRIAN, GET_REALTORS, GET_BRIAN_HEADSHOT } from './types';

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

// Get Brian's headshot object
export const getHeadshot = () => async dispatch => {
  try {
    const res = await axios.get(
      `uploads/ec3e5789d3e140918e1f6c017705d64e.jpeg`
    );

    console.log(res);

    dispatch({
      type: GET_BRIAN_HEADSHOT,
      payload: res.config.url
    });
  } catch (error) {
    console.log(error);
  }
};
