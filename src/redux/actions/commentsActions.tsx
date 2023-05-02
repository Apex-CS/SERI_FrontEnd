import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { CommentsState, Comment } from '../../types/types';
import { getRandomNumber } from '../../utils/utils';
export const fetchComments = (): ThunkAction<
  void,
  CommentsState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    // 
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments : Comment[] = await  [
      {
        id: getRandomNumber(1999),
        name: 'Ejemplo 1',
        body: '// make the POST CALL to the API to POST the new comment',
      },
      {
        id: getRandomNumber(1999),
        name: 'Ejemplo 1',
        body: '// make the POST CALL to the API to POST the new comment',
      },
      {
        id: getRandomNumber(1999),
        name: 'Ejemplo 1',
        body: '// make the POST CALL to the API to POST the new comment',
      },
      {
        id: getRandomNumber(1999),
        name: 'Ejemplo 1',
        body: '// make the POST CALL to the API to POST the new comment',
      }
    ]
    console.log("🚀 ~ file: commentsActions.tsx:13 ~ >=> ~ comments:", comments)
    dispatch({
      type: 'FETCH_COMMENTS_SUCCESS',
      payload: comments,
    });
  } catch (error) {
    console.log(error);
  }
};


export const ADD_COMMENT = 'ADD_COMMENT';

export interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: Comment;
}

export const addComment = (comment: Comment): AddCommentAction => ({
  type: ADD_COMMENT,
  payload: comment,
});

