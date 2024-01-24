import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyBlogCard = ({ blog }) => {
  //   console.log(blog);

  //   useeffect to get user description
  useEffect(() => {
    console.log(blog?.description);
  }, [blog]);

  return (
    <div className="blogCardContainer ">
      <div className="flex flex-col justify-between overflow-hidden rounded-lg border bg-gray-100 hover:bg-gray-200 group cursor-pointer shadow-md hover:shadow-xl h-[30rem] ">
        <div className=" imageContainer  relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img
            src={blog?.titleImg}
            alt="Photo by Lorenzo Herrera"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <a
              href="#"
              className="transition duration-100 hover:text-indigo-700 active:text-indigo-800 font-semibold "
            >
              {blog?.title}
            </a>
          </h2>

          <p className="mb-4 text-gray-800 ">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text.
          </p>

          <div className="readmoreBtn flex items-center gap-x-1 text-indigo-700 ">
            <Link
              to={`/detail/${blog?._id}`}
              className=" text-lg font-semibold  "
            >
              Read more{" "}
            </Link>

            <FaArrowRightLong className=" text-lg group-hover:translate-x-1 transition-all duration-200 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogCard;
