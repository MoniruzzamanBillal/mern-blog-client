import React from "react";
import { Link } from "react-router-dom";

const PopularPostCard = () => {
  return (
    <Link to={"/detail/id"}>
      <div className="PopularPostCardContainer cursor-pointer ">
        <div className="PopularPostCardWrapper  p-2 border-y border-gray-100 bg-gray-50 shadow hover:shadow-md ">
          {/* category btn  */}
          <div className="category mb-1.5 lg:mb-3 ">
            <p className=" py-1.5 px-2 text-xs lg:text-sm text-gray-100  rounded-md bg-fuchsia-600 font-semibold inline  ">
              Category
            </p>
          </div>
          {/* category btn  */}

          {/* heading starts  */}
          <div className="heading  mb-2  ">
            <h1 className=" text-xl lg:text-2xl font-medium text-gray-700 ">
              Simple way to innovate your inovation
            </h1>
          </div>
          {/* heading ends */}

          {/* blog writer info starts  */}
          <div className="writerInfo  flex gap-1 items-center text-sm lg:text-base ">
            {/* writer name  */}
            <p className="  font-medium  ">writer name -</p>
            {/* writer name  */}

            {/* date  */}
            <p className="  "> 14-12-2023</p>
            {/* date  */}
          </div>
          {/* blog writer info ends */}
        </div>
      </div>
    </Link>
  );
};

export default PopularPostCard;
