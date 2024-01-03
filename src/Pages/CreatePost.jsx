import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
  ],
};

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  // console.log(value);
  console.log(title);
  return (
    <div className="createPostContainer   ">
      <div className="createPostWrapper w-[95%] xsm:w-[92%] sm:w-[90%]  m-auto  ">
        {/* title container  */}
        <div className="titleContainer  mb-4   ">
          <input
            className=" block w-full py-5 px-4 text-2xl border-none outline-none   text-gray-600 font-medium "
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        {/* title container ends  */}

        {/* text editor  */}
        <div className="textEditor   h-[26rem] ">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="  h-full w-full font-medium  "
            modules={modules}
          />
        </div>
        {/* text editor ends  */}
      </div>
    </div>
  );
};

export default CreatePost;
