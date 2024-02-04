import React from "react";

const Loading = () => {
  return (
    <div className="blogLoadingContainer  h-screen w-full ">
      <div className=" w-full h-full flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-5 py-3 text-5xl font-semibold leading-none text-center text-blue-900 bg-blue-300 rounded-md animate-pulse dark:bg-blue-900 dark:text-blue-200">
          MonirBlog
        </div>
      </div>
    </div>
  );
};

export default Loading;
