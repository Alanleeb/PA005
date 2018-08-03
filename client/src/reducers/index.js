import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import photos from './photos'

const rootReducer = combineReducers({
  user,
  flash,
  photos
});

export default rootReducer;
