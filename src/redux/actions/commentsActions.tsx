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
    const comments : Comment[] = await [
      {
        id: getRandomNumber(1999),
        name: 'Leonardo Dicaprio',
        body: '// make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment // make the POST CALL to the API to POST the new comment',
        reviewedDate: getRandomDate(),
        rating: 5
      },
      {
        id: getRandomNumber(1999),
        name: 'Emma Watson',
        body: 'This movie was fantastic! The acting, cinematography, and storyline were all top-notch. Highly recommend.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Tom Hanks',
        body: 'I was blown away by this movie. The emotional depth and character development were incredible. A must-see for any film lover.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Jennifer Lawrence',
        body: 'This movie kept me on the edge of my seat from beginning to end. The plot twists were unpredictable and exciting.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Brad Pitt',
        body: 'The visuals in this film were breathtaking. The attention to detail in the production design really brought the story to life.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Meryl Streep',
        body: 'I was completely absorbed in this movie. The acting was phenomenal and the script was masterfully written.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Leonardo Dicaprio',
        body: 'This film was a masterpiece. The directing and editing were superb, and the performances from the entire cast were outstanding.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Emma Stone',
        body: 'I loved everything about this movie. The soundtrack was amazing, and the chemistry between the actors was electric.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Robert Downey Jr.',
        body: 'This movie had it all - action, humor, and heart. I was thoroughly entertained from start to finish.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Scarlett Johansson',
        body: 'The cinematography in this film was stunning. Every shot was like a work of art, and it added so much to the overall experience.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
      },
      {
        id: getRandomNumber(1999),
        name: 'Chris Hemsworth',
        body: 'I was blown away by the special effects in this movie. They were seamless and really transported me into the world of the story.',
        reviewedDate: getRandomDate(),
        rating: getRandomNumber(5)
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

