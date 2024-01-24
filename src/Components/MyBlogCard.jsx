import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MyBlogCard = () => {
  return (
    <div className="blogCardContainer ">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-gray-50 hover:bg-gray-100 group cursor-pointer shadow-md hover:shadow-xl ">
        <div className=" imageContainer  relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-600 active:text-indigo-800"
            >
              Working with legacy stacks
            </a>
          </h2>

          <p className="mb-4 text-gray-500 ">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>

          <div className="readmoreBtn flex items-center gap-x-1 ">
            <p className=" text-lg  ">Read more </p>

            <FaArrowRightLong className=" text-lg group-hover:translate-x-1 transition-all duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogCard;
