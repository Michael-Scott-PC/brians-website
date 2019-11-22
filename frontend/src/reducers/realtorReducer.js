import { GET_REALTOR, GET_REALTORS } from '../actions/types';

const initialState = {
  realtor: [],
  realtors: [],
  loading: true,
  errors: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REALTOR:
      return {
        ...state,
        realtor: payload,
        loading: false
      };
    case GET_REALTORS:
      return {
        ...state,
        realtors: payload,
        loading: false
      };
    default:
      return state;
  }
}
