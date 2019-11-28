import axios from './axios';
import { GET_LANDING_IMG } from './types';

export const getLandingImage = () => async dispatch => {
  try {
    const res = await axios.get('/landings');

    dispatch({
      type: GET_LANDING_IMG,
      payload: res.data[0].landing_photo.url
    });
  } catch (error) {
    console.log(error);
  }
};