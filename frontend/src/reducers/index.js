import { combineReducers } from 'redux';
import realtorReducer from './realtorReducer';
import landingReducer from './landingReducer';

export default combineReducers({
  realtorReducer,
  landingReducer
});
