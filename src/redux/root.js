import { combineReducers } from 'redux';
import commentsReducer from './Comments';

const rootReducer = combineReducers({
  comments: commentsReducer,
  // add other slices here
});

export default rootReducer;
