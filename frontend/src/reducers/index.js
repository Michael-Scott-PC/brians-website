import { combineReducers } from 'redux';
import realtorReducer from './realtorReducer';
import landingReducer from './landingReducer';
import listingReducer from './listingReducer';
import testimonialReducer from './testimonialReducer';

export default combineReducers({
  realtorReducer,
  landingReducer,
  listingReducer,
  testimonialReducer
});
