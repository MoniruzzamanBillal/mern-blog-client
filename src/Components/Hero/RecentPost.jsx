import React from "react";
import BlogCard from "../BlogCard";
import PopularPostCard from "./PopularPostCard";

const RecentPost = () => {
  return (
    <div className="RecentPostContainer ">
      <div className="RecentPostWrapper  flex justify-between ">
        {/* recent post container  */}
        <div className="recentPOstContainer bg-red-500 w-2/3 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        {/* recent post container  */}

        {/* most popular post container */}
        <div className="mostPopularContainer bg-violet-400 w-1/3 p-1 ">
          <h1 className="  bg-lime-200 text-2xl font-semibold text-gray-800 mb-6 ">
            Most popular
          </h1>

          {/* popular post card  */}
          <div className="popularPost">
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
