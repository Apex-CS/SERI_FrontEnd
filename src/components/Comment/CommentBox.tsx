import React, { useState } from "react";
interface CommentBoxInterface {
  onSaveCommentEvent: (titleValue: string, commentValue: string) => void
};

function CommentBox({onSaveCommentEvent}: CommentBoxInterface) {
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredValue = event?.target?.value;
    setComment(enteredValue ? enteredValue : '');
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSaveCommentEvent(title, comment);
    setComment('');
    setTitle('');
  };

  const inputHandlerTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const enteredValue = event?.target?.value;
    setTitle(enteredValue);
  }

 const postLabel = 'Post Comment';

  return (
    <div className="w-full container">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <h5 className="text-sm text-zinc-400">
              Title of your review
            </h5>
            <input
              className="w-full my-1  px-0 text-sm text-gray-900 rounded border-neutral-500 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              onChange={inputHandlerTitle}
              id='title'
              value={title}
              required
            />
        </div>
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Write your comment
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full px-0 text-sm text-gray-900 rounded border-neutral-500 border-2 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              value={comment}
              onChange={inputHandler}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="disabled:opacity-75 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              {postLabel}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
