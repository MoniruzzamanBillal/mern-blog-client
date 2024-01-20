import React, { useEffect, useState } from "react";
import UserComment from "./UserComment";
import { motion } from "framer-motion";
import UseAuth from "../../Hooks/UseAuth";
import { Link, Navigate, useLocation } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  commentAddedSuccessfully,
  commentError,
} from "../../Util/ToastFunction";
import GetComments from "../../Hooks/GetComments";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../Hero/Pagination";

const Comment = ({ id }) => {
  const { user } = UseAuth();
  const [blogData, setBlogData] = useState([]);
  //! pagination related
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemCount, setTotalItemCount] = useState(null);
  const dataPerPage = 5;
  const numofpages = Math.ceil(totalItemCount / dataPerPage);
  const pages = [...new Array(numofpages).keys()];

  const [commentInput, setCommentInput] = useState("");
  const [commentsData, commentsDataLoading, commentsReFetch] = GetComments(
    id,
    currentPage,
    dataPerPage
  );

  // ! function for handle next button in pagination
  const handleNextCurrent = () => {
    if (currentPage >= numofpages) {
      return setCurrentPage(numofpages);
    }
    setCurrentPage(currentPage + 1);
  };

  // ! function for handle previous button in pagination
  const handlePrev = () => {
    if (currentPage <= 1) {
      return setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);
  };

  const axiosPublic = UseAxiosPublic();
  const location = useLocation();

  // ! function for making comment
  const handleCommennt = () => {
    if (!commentInput.trim()) {
      commentError();
    }

    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dateFormat = `${date}-${month}-${year}`;

    // console.log(dateFormat);
    const commentData = {
      comment: commentInput,
      commentar: user?.displayName,
      commentarImage: user?.photoURL,
      blogId: id,
      commentDate: dateFormat,
    };
    // console.log(commentData);

    // ! for sending posts to database
    axiosPublic
      .post(`/api/comment/blog`, commentData)
      .then((response) => {
        if (response?.data) {
          commentAddedSuccessfully();
        }

        commentsReFetch();
      })
      .catch((error) => console.log(error));

    setCommentInput("");
  };

  // ! effect to handle comment related states
  useEffect(() => {
    axiosPublic.get(`/api/comments/blog/${id}`).then((response) => {
      // console.log(response?.data?.blogs?.length);
      setTotalItemCount(response?.data?.blogs?.length);
    });
  }, [commentsData, commentsDataLoading]);

  // ! effect when pagination data changed
  useEffect(() => {
    // console.log("page number = ", currentPage);
    commentsReFetch();
  }, [currentPage, totalItemCount]);

  // console.log("total item count = ", totalItemCount);

  // console.log("comment data length = ", commentsData?.length);
  // console.log(totalItemCount);

  return (
    <div className="commentContainer   ">
      <motion.div className="commentWrapper  ">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="headingFont font-semibold text-2xl mb-7  "
        >
          Comments{" "}
        </motion.h1>

        {user ? (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inputSection  mb-9 "
          >
            <div className="w-full mb-4 border border-gray-200  bg-gray-50 ">
              <div className="px-4 py-2 bg-white    ">
                <label for="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="5"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="w-full px-0 text-sm text-gray-900 bg-white border-none outline-none  "
                  required
                  placeholder="Write a comment..."
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t  ">
                <button
                  type="submit"
                  onClick={() => handleCommennt()}
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-md  hover:scale-105 active:scale-100  hover:bg-blue-800"
                >
                  Post comment
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <Link state={location.pathname} to={"/login"}>
            <p className="  headingFont  mb-8 text-xl font-medium cursor-pointer text-blue-800 hover:text-blue-900 hover:underline    ">
              Login to write comment
            </p>
          </Link>
        )}

        {/* comment input  */}

        {/* comment input ends */}

        {/* user comment section  */}

        {commentsDataLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className="userComment flex flex-col gap-10 ">
            {commentsData &&
              commentsData.map((comment, ind) => (
                <UserComment key={ind} comment={comment} />
              ))}
          </div>
        )}

        {/* comment pagination  */}

        {totalItemCount && totalItemCount > 5 ? (
          <div className="commentPage  py-2  mt-4 ">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItemCount={totalItemCount}
              dataPerPage={dataPerPage}
              numofpages={numofpages}
              pages={pages}
              handleNextCurrent={handleNextCurrent}
              handlePrev={handlePrev}
            />
          </div>
        ) : (
          " "
        )}

        {/* comment pagination ends  */}

        {/* user comment section  */}

        <ToastContainer />

        {/*  */}
      </motion.div>
    </div>
  );
};

export default Comment;
