import React, { useState } from "react";
import BlogCard from "../BlogCard";
import PopularPostCard from "./PopularPostCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import GetBlogs from "../../Hooks/GetBlogs";
import GetPopular from "../../Hooks/GetPopular";

const RecentPost = () => {
  const [blogsData, blogsDataLoading, blogsReFetch] = GetBlogs();
  const [popularBlog, popularBlogLoading, popularBlogRefetch] = GetPopular();

  //! pagination related
  const [currentPage, setCurrentPage] = useState(1);
  const totalItemCount = 20;
  // const totalItemCount = blogsData?.length;
  const dataPerPage = 5;
  const numofpages = Math.ceil(totalItemCount / dataPerPage);
  const pages = [...new Array(numofpages).keys()];

  // function for handle next button in pagination
  const handleNextCurrent = () => {
    if (currentPage >= numofpages) {
      return setCurrentPage(numofpages);
    }
    setCurrentPage(currentPage + 1);
  };

  // function for handle previous button in pagination
  const handlePrev = () => {
    if (currentPage <= 1) {
      return setCurrentPage(1);
    }
    setCurrentPage(currentPage - 1);
  };

  // console.log(popularBlog);
  // console.log(blogsData);

  if (blogsDataLoading || popularBlogLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="RecentPostContainer ">
      <div className="RecentPostWrapper  flex justify-between gap-2 ">
        {/* recent post container  */}
        <motion.div className="recentPOstContainer  w-full xmd:w-2/3 flex flex-col gap-3 ">
          {blogsData &&
            blogsData.map((blog, ind) => (
              <BlogCard key={blog?._id} blog={blog} />
            ))}

          {/* pagination container  */}
          {blogsData?.length > 9 && (
            <div className="paginationContainer  flex justify-center  ">
              <Pagination
                currentPage={currentPage}
                totalItemCount={totalItemCount}
                dataPerPage={dataPerPage}
                numofpages={numofpages}
                pages={pages}
                handleNextCurrent={handleNextCurrent}
                handlePrev={handlePrev}
              />
            </div>
          )}

          {/* pagination container ends */}
        </motion.div>
        {/* recent post container  */}

        {/* most popular post container */}
        <motion.div className="mostPopularContainer  hidden xmd:block  xmd:w-1/3 p-1  ">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="   text-lg lg:text-2xl font-semibold text-gray-800 mb-3 lg:mb-6 "
          >
            Most popular
          </motion.h1>

          {/* popular post card  */}
          <div className="popularPost grid grid-cols-1 gap-12 ">
            {popularBlog &&
              popularBlog.map((blog, ind) => (
                <PopularPostCard key={blog?._id} blog={blog} />
              ))}
          </div>
          {/* popular post card  */}
        </motion.div>
        {/* most popular post container */}

        {/*  */}
      </div>
    </div>
  );
};

export default RecentPost;
