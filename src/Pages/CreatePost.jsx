import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  blogAddedSuccessfully,
  contentError,
  titleError,
  titleImageError,
} from "../Util/ToastFunction";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

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
  const [titleImg, setTitleImg] = useState(null);
  const axiosPublic = UseAxiosPublic();

  // function for changing title image
  const handleImage = async (e) => {
    const imgFile = e.target.files[0];

    const formData = new FormData();
    formData.append("image", imgFile);

    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );

    setTitleImg(imageResponse?.data?.data?.display_url);
  };

  const handleSubmit = () => {
    const favCount = 0;
    const blogData = {
      title,
      titleImg,
      description: value,
      favCount,
    };

    // console.log(blogData);

    axiosPublic
      .post("/api//blog/post", blogData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          blogAddedSuccessfully();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createPostContainer   ">
      <div className="createPostWrapper w-[95%] xsm:w-[92%] sm:w-[90%]  m-auto  pb-4 ">
        {/* title container  */}
        <div className="titleContainer   mb-2   ">
          <input
            className=" block w-full py-4 px-4 text-2xl border-none outline-none   text-gray-600 font-medium "
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        {/* title container ends  */}

        {/* title image container  */}
        <div className="titleImage  py-3 mb-3  ">
          <h1 className=" text-2xl font-medium mb-2 text-gray-600 ">
            Title image :{" "}
          </h1>
          <input
            onChange={(e) => handleImage(e)}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  "
            id="file_input"
            type="file"
          />
        </div>
        {/* title image container ends */}

        {/* text editor  */}
        <div className="textEditor   h-[22rem] ">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="  h-full w-full font-medium  "
            modules={modules}
          />
        </div>
        {/* text editor ends  */}

        {/* submit button  */}
        <div className="submit  pt-5 text-center  ">
          <button
            onClick={() => handleSubmit()}
            className=" cursor-pointer text-gray-50 bg-violet-500 hover:bg-violet-700 active:scale-95 py-2 px-5 rounded font-medium headingFont  "
          >
            Submit
          </button>
        </div>
        {/* submit button ends */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePost;

// dangerouslySetInnerHTML={{ __html: value }}
