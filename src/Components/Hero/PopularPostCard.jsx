import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const PopularPostCard = ({ blog }) => {
  const cardVarient = {
    hidden: {
      y: 15,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },
  };

  // console.log(blog);

  return (
    <Link to={`/detail/${blog?._id}`}>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="PopularPostCardContainer cursor-pointer "
      >
        <div className="PopularPostCardWrapper  p-4 border border-gray-200 bg-blue-50 shadow-md hover:shadow-xl ">
          {/* category btn  */}
          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileInView={"animate"}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="category mb-1.5 lg:mb-3 "
          >
            <p className=" py-1.5 px-2 text-xs lg:text-sm text-gray-100  rounded-md bg-fuchsia-600 font-semibold inline  ">
              {blog?.category}
            </p>
          </motion.div>
          {/* category btn  */}

          {/* heading starts  */}
          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileInView={"animate"}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="heading  mb-2  "
          >
            <p className=" text-lg lg:text-xl font-medium text-gray-700 ">
              {blog?.title}
            </p>
          </motion.div>
          {/* heading ends */}

          {/* blog writer info starts  */}
          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileInView={"animate"}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="writerInfo  flex gap-1 items-center text-sm lg:text-base "
          >
            {/* writer name  */}
            <p className="  font-medium  ">{blog?.writer} -</p>
            {/* writer name  */}

            {/* date  */}
            <p className="  "> {blog?.date} </p>
            {/* date  */}
          </motion.div>
          {/* blog writer info ends */}
        </div>
      </motion.div>
    </Link>
  );
};

export default PopularPostCard;
