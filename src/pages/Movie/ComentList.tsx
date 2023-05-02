import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store';
import { fetchComments, addComment } from '../../redux/actions/commentsActions';
import { RootState } from '../../redux/store/rootReducer';
import { Comment } from '../../types/types';
import { ReviewItem } from '../Movies/components';
import { CommentBox } from '../../components';
import { getRandomNumber } from '../../utils/utils';

const mapState = (state: RootState) => ({
  comments: state.commentsState.comments,
});

const mapDispatch = {
  fetchComments,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type CommentsListProps = PropsFromRedux;

const CommentsList: React.FC<CommentsListProps> = ({ comments, fetchComments }) => {
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const dispatch = useDispatch();

  const handlerOnSaveMessage = (titleValue: string, commentValue: string) => {
    const newComment: Comment = {name: titleValue, body: commentValue, id: getRandomNumber(10000) };
    // make the POST CALL to the API to POST the new comment
    dispatch(addComment(newComment));
  };

  return (
    <div
      className='w-full flex flex-col justify-center items-center'
      id='comments-box'>
      <div className='flex w-full flex-col justify-center items-center p-1'>
        <div></div>
        <h1 className='text-xl ml-10 text-white'>RATE AND REVIEW</h1>
        <CommentBox onSaveCommentEvent={handlerOnSaveMessage} />
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        {comments.map((comment: Comment) => (
          <ReviewItem item={comment} />
        ))}
      </div>
    </div>
  );
};

export default connector(CommentsList);
