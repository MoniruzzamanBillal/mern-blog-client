import React from "react";
import UserComment from "./UserComment";

const Comment = () => {
  return (
    <div className="commentContainer   ">
      <div className="commentWrapper  ">
        <h1 className="headingFont font-semibold text-2xl mb-7  ">Comments </h1>

        {/* comment input  */}
        <div className="inputSection  mb-9 ">
          {/*  */}

          <div className="w-full mb-4 border border-gray-200  bg-gray-50 ">
            <div className="px-4 py-2 bg-white    ">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="5"
                className="w-full px-0 text-sm text-gray-900 bg-white border-none outline-none  "
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t  ">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-md  hover:scale-105 active:scale-100  hover:bg-blue-800"
              >
                Post comment
              </button>
            </div>
          </div>

          {/*  */}
        </div>
        {/* comment input ends */}

        {/* user comment section  */}
        <div className="userComment flex flex-col gap-10 ">
          <UserComment />
          <UserComment />
          <UserComment />
        </div>
        {/* user comment section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Comment;
