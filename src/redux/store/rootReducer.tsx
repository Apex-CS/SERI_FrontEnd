import { combineReducers } from 'redux';
import { commentsReducer } from '../reducers/CommentsReducer'
const rootReducer = combineReducers({
  commentsState: commentsReducer,
//   usersState: usersReduce,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;