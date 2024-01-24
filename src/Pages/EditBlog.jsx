import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  blogAddedSuccessfully,
  contentError,
  titleError,
  titleImageError,
} from "../Util/ToastFunction";
import GetSingleBlog from "../Hooks/GetSingleBlog";
import axios from "axios";

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

const EditBlog = () => {
  const { id } = useParams();
  const [blogData, blogLoading, blogRefetch] = GetSingleBlog(id);

  const { user } = UseAuth();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [titleImg, setTitleImg] = useState(null);
  const [category, setCategory] = useState(null);
  const [fileName, setFileName] = useState("");
  const axiosPublic = UseAxiosPublic();

  //! function for changing title image
  const handleImage = async (e) => {
    const imgFile = e.target.files[0];

    // console.log(imgFile);
    setFileName(imgFile?.name);

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

    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const writingDate = `${date}-${month}-${year}`;

    const blogData = {
      title,
      titleImg,
      description: value,
      favCount,
      category,
      date: writingDate,
      writer: user?.displayName,
      writerImg: user?.photoURL,
    };

    // console.log(blogData);

    axiosPublic
      .patch(`/api/blog/update/${id}`, blogData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          blogAddedSuccessfully();
        }
      })
      .catch((err) => console.log(err));
  };

  //   console.log(blogData);

  // !  effect to get data from database and set to states
  useEffect(() => {
    setCategory(blogData?.category);
    setTitle(blogData?.title);
    setTitleImg(blogData?.titleImg);
    setFileName(blogData?.titleImg);
    setValue(blogData?.description);
  }, [blogData, blogLoading]);

  //   console.log(id);

  if (blogLoading) {
    return <p>Loading ......</p>;
  }

  return (
    <div className="createPostContainer   ">
      <div className="createPostWrapper w-[95%] xsm:w-[92%] sm:w-[90%]  m-auto  pb-4 ">
        {/* category container  */}

        {/* category container ends  */}

        <div className="titleContainer   mb-2   ">
          <input
            className=" block w-full py-2 px-4 text-xl border-none outline-none   text-gray-600 font-medium "
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        {/* title container  */}
        <div className="titleContainer   mb-2   ">
          <input
            className=" block w-full py-3 px-4 text-2xl border-none outline-none   text-gray-600 font-medium "
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        {/* title container ends  */}

        {/* title image container  */}
        <div className="titleImage  py-4 mb-3   w-[44%]  border-2 border-gray-300 border-dotted ">
          <div className="labelCOntainer  text-center  ">
            <label
              htmlFor="file_input"
              className="  bg-rose-500 hover:bg-rose-600 font-medium text-gray-50 text-sm py-2 px-3 rounded-md cursor-pointer "
            >
              {fileName ? fileName : "  Upload title image"}
            </label>
          </div>

          <input
            onChange={(e) => handleImage(e)}
            className=" hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  "
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
        <div className="submit  pt-6 text-center  ">
          <button
            onClick={() => handleSubmit()}
            className=" cursor-pointer text-gray-50 bg-red-500 hover:bg-red-700 active:scale-95 py-2 px-5 rounded font-medium headingFont  "
          >
            Update
          </button>
        </div>
        {/* submit button ends */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditBlog;
