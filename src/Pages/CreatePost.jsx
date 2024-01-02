import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="createPostContainer   ">
      <div className="createPostWrapper   ">
        <h1>create post </h1>
        <h1>create post </h1>
        <h1>create post </h1>
        <h1>create post </h1>
        <h1>create post </h1>
        <h1>create post </h1>
        <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
    </div>
  );
};

export default CreatePost;
