import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blogcardContainer  ">
      <div className="blogCardWrapper  ">
        <div className=" ">
          <div className="mx-auto max-w-screen-2xl  ">
            <div className="flex flex-col justify-center overflow-hidden rounded-lg  sm:flex-row md:h-80 bg-blue-50  border-y border-gray-200 shadow hover:shadow-md ">
              {/* <!-- image - start --> */}

              <div className="order-first h-48 w-full  sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full  object-cover object-center  "
                />
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- content - start --> */}
              <div className="flex w-full flex-col p-4   sm:w-1/2 sm:p-8 lg:w-3/5">
                {/* date container */}
                <div className="dateContainer">
                  {/* date  */}
                  <div className="date  flex  gap-4 mb-3  ">
                    <p>2023-08-22</p>

                    <p className=" font-semibold ">Coding</p>
                  </div>
                  {/* date  */}
                </div>
                {/* date container */}

                <h2 className="mb-4 text-base font-bold text-gray-800 md:text-lg lg:text-xl">
                  Simple way to innovate your inovation
                </h2>

                <p className="mb-6  text-gray-700  md:text-sm lg:text-lg ">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/detail/id`}
                    className="inline-block rounded-lg bg-gray-300 px-8 py-3 text-center text-sm font-semibold text-gray-800 hover:text-gray-50 outline-none ring-indigo-300 hover:bg-gray-400 hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:ring active:bg-gray-500 md:text-base"
                  >
                    Read more
                  </Link>
                </div>
              </div>
              {/* <!-- content - end --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
