import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { fetchComments, addComment } from '../../../redux/actions/commentsActions';
import { RootState } from '../../../redux/store/rootReducer';
import { Comment } from '../../../types/types';
import { ReviewItem } from '../../Movies/components';
import { CommentBox, LabelTitle } from '../../../components';
import { getRandomNumber } from '../../../utils/utils';

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
  const [raiting, setRaiting] = useState(0);
  const dispatch = useDispatch();

  const handlerOnSaveMessage = (titleValue: string, commentValue: string) => {
    const newComment: Comment = {name: titleValue, body: commentValue, id: getRandomNumber(10000), reviewedDate: new Date(), rating: raiting };
    // make the POST CALL to the API to POST the new comment
    dispatch(addComment(newComment));
  };

  return (
    <div className='w-full flex flex-col justify-center items-center' id='comments-box'>
      <div className='flex w-full flex-col justify-start items-start p-1'>
        <div className='flex items-start justify-start'>
          <LabelTitle customClass='text-xl ml-1 font-bold text-yellow-400' title='RATE AND REVIEW' />
        </div>
        <CommentBox setRaiting={setRaiting} raiting={raiting} onSaveCommentEvent={handlerOnSaveMessage} />
      </div>
      <div className='grid grid-cols-2 justify-between pr-4 py-0'>
        {comments.map((comment: Comment) => (
          <ReviewItem  item={comment} />
        ))}
      </div>
    </div>
  );
};

export default connector(CommentsList);
