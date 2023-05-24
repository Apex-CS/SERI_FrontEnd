import React, { useState } from "react";
import StarRating from "../StarRanking/StarRanking";
import Button from "../Inputs/Button/Button";
interface CommentBoxInterface {
  onSaveCommentEvent: (titleValue: string, commentValue: string) => void;
  setRaiting: React.Dispatch<React.SetStateAction<number>>;
  raiting: number;
}

function CommentBox({
  onSaveCommentEvent,
  setRaiting,
  raiting,
}: CommentBoxInterface) {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredValue = event?.target?.value;
    setComment(enteredValue ? enteredValue : "");
  };

  const onRatingChangeEvent = (newNumber: number) => {
    setRaiting(newNumber);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSaveCommentEvent(title, comment);
    setComment("");
    setTitle("");
    setRaiting(0);
  };

  const postLabel = "Post Comment";

  const inputHandlerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target?.value;
    setTitle(inputValue);
  };

  return (
    <div className="w-full container">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-4">
          <div className="pr-4 py-2 rounded-t-lg">
            <div className="w-full flex items-end justify-end my-2">
              <StarRating
                customClass="w-12 h-12"
                onRatingChange={onRatingChangeEvent}
                rating={raiting}
              />
            </div>

            <div className="flex w-full justify-between">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 font-bold text- text-sm   dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  onChange={inputHandlerName}
                  value={title}
                  className="relative z-0 mb-3 group w-full  border text-black border-gray-300  text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
          <div className="pr-4 py-0 rounded-t-lg">
            <label
              htmlFor="comment"
              className="block mb-2 text-sm  font-bold  dark:text-white"
            >
              What did you think of the movie? (optional)
            </label>
            <textarea
              id="message"
              value={comment}
              style={{ outline: "none" }}
              onChange={inputHandler}
              rows={4}
              className="block p-2.5 mb-2 w-full text-sm  text-black rounded-lg border border-gray-300
               focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-0 py-2 ">
            <Button
              label={postLabel}
              type="submit"
              customClass="disabled:opacity-75 inline-flex items-center py-2.5 px-0 text-xs font-medium text-center bg-yellow-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
