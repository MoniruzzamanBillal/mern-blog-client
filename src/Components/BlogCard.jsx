import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blogcardContainer bg-lime-300 ">
      <div className="blogCardWrapper bg-sky-200 ">
        <div className=" ">
          <div className="mx-auto max-w-screen-2xl px-3 md:px-6">
            <div className="flex flex-col overflow-hidden rounded-lg  sm:flex-row md:h-80">
              {/* <!-- image - start --> */}
              <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                  loading="lazy"
                  alt="Photo by Andras Vas"
                  className="h-full w-full  object-cover object-center"
                />
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- content - start --> */}
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <h2 className="mb-6 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                  Simple way to innovate your inovation
                </h2>

                <p className="mb-9 max-w-md text-gray-600">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/`}
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 hover:text-gray-950 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
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
