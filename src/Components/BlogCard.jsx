import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const blogVarients = {
    hidden: {
      y: 10,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },
  };

  // console.log(blog);

  return (
    <div className="blogcardContainer  ">
      <div className="blogCardWrapper  ">
        {/*  */}
        {/*  */}
        {/*  */}
        <div class="relative rounded-lg bg-gray-100 hover:bg-blue-100 p-5 pt-8">
          {/* date container */}
          <div className="dateContainer">
            {/* date  */}
            <motion.div
              variants={blogVarients}
              initial={"hidden"}
              whileInView={"animate"}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="date  flex  gap-4 mb-3  "
            >
              <p>2023-08-22</p>

              <p className=" font-semibold ">{blog?.category}</p>
            </motion.div>
            {/* date  */}
          </div>
          {/* date container ends  */}

          <motion.h2
            variants={blogVarients}
            initial={"hidden"}
            whileInView={"animate"}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mb-4 text-base font-bold text-gray-800 md:text-lg lg:text-xl"
          >
            {blog?.title}
          </motion.h2>

          <motion.div
            variants={blogVarients}
            initial={"hidden"}
            whileInView={"animate"}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-auto"
          >
            <Link
              to={`/detail/${blog?._id}`}
              className="inline-block rounded-lg bg-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-800 hover:text-gray-50 outline-none ring-indigo-300 hover:bg-gray-400 hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200 focus-visible:ring active:bg-gray-500 md:text-base"
            >
              Details
            </Link>
          </motion.div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default BlogCard;
