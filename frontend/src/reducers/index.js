import { combineReducers } from 'redux';
import realtorReducer from './realtorReducer';
import landingReducer from './landingReducer';
import testimonialReducer from './testimonialReducer';

export default combineReducers({
  realtorReducer,
  landingReducer,
  testimonialReducer
});
