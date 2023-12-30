import React from "react";
import BlogCard from "../BlogCard";
import PopularPostCard from "./PopularPostCard";
import Pagination from "./Pagination";

const RecentPost = () => {
  return (
    <div className="RecentPostContainer ">
      <div className="RecentPostWrapper  flex justify-between gap-2 ">
        {/* recent post container  */}
        <div className="recentPOstContainer  w-full xmd:w-2/3 flex flex-col gap-3 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          {/* pagination container  */}
          <div className="paginationContainer  flex justify-center  ">
            <Pagination />
          </div>
          {/* pagination container ends */}
        </div>
        {/* recent post container  */}

        {/* most popular post container */}
        <div className="mostPopularContainer  hidden xmd:block  xmd:w-1/3 p-1  ">
          <h1 className="   text-lg lg:text-2xl font-semibold text-gray-800 mb-3 lg:mb-6 ">
            Most popular
          </h1>

          {/* popular post card  */}
          <div className="popularPost grid grid-cols-1 gap-12 ">
            <PopularPostCard />
            <PopularPostCard />
            <PopularPostCard />
          </div>
          {/* popular post card  */}
        </div>
        {/* most popular post container */}

        {/*  */}
      </div>
    </div>
  );
};

export default RecentPost;
