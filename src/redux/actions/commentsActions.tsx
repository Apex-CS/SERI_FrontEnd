import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { CommentsState, Comment } from '../../types/types';
import { getRandomDate, getRandomNumber } from '../../utils/utils';
export const fetchComments = (): ThunkAction<
  void,
  CommentsState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    const comments : Comment[] = await  [
      {
        id: getRandomNumber(1999),
        name: 'Leonardo Dicaprio',
        body: '// make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment',
        reviewdDate: getRandomDate(),
        raiting: getRandomNumber(5),
      },
      {
        id: getRandomNumber(1999),
        name: 'Salma Hayeck',
        body: '// make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment ',
        reviewdDate: getRandomDate(),
        raiting: getRandomNumber(5),
      },
      {
        id: getRandomNumber(1999),
        name: 'Canelo Alvarez',
        body: 'asd.,anjk sdhnakj uisah dashui dhsauhy d87ayh8daksji daiu dhjankjdau hdasiju',
        reviewdDate: getRandomDate(),
        raiting: getRandomNumber(5),
      },
      {
        id: getRandomNumber(1999),
        name: 'George Lukas',
        body: ' asjdkjas dasokdasjik iuahg dai naduid gag a bkjsda njikbdhjka   jk aou hjkhdasb kjdbajhs gduhbasij ijkash dhjjav sdjhsa',
        reviewdDate: getRandomDate(),
        raiting: getRandomNumber(5),
      }
    ]
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

