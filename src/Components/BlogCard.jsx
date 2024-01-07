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

  return (
    <div className="blogcardContainer  ">
      <div className="blogCardWrapper  ">
        <div className=" ">
          <div className="mx-auto max-w-screen-2xl  ">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col justify-center overflow-hidden rounded-lg  sm:flex-row md:h-80 bg-blue-50  border-y border-gray-200 shadow hover:shadow-md "
            >
              {/* <!-- image - start --> */}

              <motion.div
                variants={blogVarients}
                initial={"hidden"}
                whileInView={"animate"}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="order-first h-48 w-full  sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5"
              >
                <img
                  src={blog?.titleImg}
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full  object-cover object-center  "
                />
              </motion.div>
              {/* <!-- image - end --> */}

              {/* <!-- content - start --> */}
              <div className="flex w-full flex-col p-4   sm:w-1/2 sm:p-8 lg:w-3/5">
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

                    <p className=" font-semibold ">Coding</p>
                  </motion.div>
                  {/* date  */}
                </div>
                {/* date container */}

                <motion.h2
                  variants={blogVarients}
                  initial={"hidden"}
                  whileInView={"animate"}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mb-4 text-base font-bold text-gray-800 md:text-lg lg:text-xl"
                >
                  {blog?.title}
                </motion.h2>

                <motion.p
                  variants={blogVarients}
                  initial={"hidden"}
                  whileInView={"animate"}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mb-6  text-gray-700  md:text-sm lg:text-lg "
                >
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </motion.p>
                {/* <motion.p
                  variants={blogVarients}
                  initial={"hidden"}
                  whileInView={"animate"}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mb-6  text-gray-700  md:text-sm lg:text-lg "
                  dangerouslySetInnerHTML={{ __html: blog?.description }}
                ></motion.p> */}

                <motion.div
                  variants={blogVarients}
                  initial={"hidden"}
                  whileInView={"animate"}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="mt-auto"
                >
                  <Link
                    to={`/detail/${blog?._id}`}
                    className="inline-block rounded-lg bg-gray-300 px-8 py-3 text-center text-sm font-semibold text-gray-800 hover:text-gray-50 outline-none ring-indigo-300 hover:bg-gray-400 hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:ring active:bg-gray-500 md:text-base"
                  >
                    Read more
                  </Link>
                </motion.div>
              </div>
              {/* <!-- content - end --> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
