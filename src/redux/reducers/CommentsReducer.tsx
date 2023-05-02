import { Reducer } from 'redux';
import { CommentsState } from '../../types/types';
import { ADD_COMMENT } from '../actions/commentsActions';
// import { initialState } from '../store/store';


interface Action {
  type: string;
  payload?: any;
}

const initialState: CommentsState = {
    comments: [],
};

const commentsReducer: Reducer<CommentsState, Action> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_SUCCESS':
      return {
        comments: action.payload,
      };
    case ADD_COMMENT:
        console.log("🚀 ~ file: CommentsReducer.tsx:34 ~ action:", action)
        return {
            ...state,
            comments: [...state.comments, action.payload],
        };
    default:
      return state;
  }
        
};

export { commentsReducer };

