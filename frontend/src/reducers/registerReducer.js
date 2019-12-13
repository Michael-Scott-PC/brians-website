import { CREATE_USER, ERROR_CREATE_USER } from '../actions/types';

const initialState = {
  register: {},
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        register: payload,
        loading: false
      };
    case ERROR_CREATE_USER:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
