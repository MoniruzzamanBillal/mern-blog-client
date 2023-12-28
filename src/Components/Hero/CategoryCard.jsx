import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="CategoryCardContainer">
      <div className="CategoryCardWrapper">
        {/*  */}

        <div className="categoryCard  bg-blue-200 hover:bg-blue-300 hover:drop-shadow-md hover:scale-105 transition-all duration-300   py-4 px-6 rounded cursor-pointer  ">
          <h1 className=" text-center text-lg xsm:text-xl sm:text-2xl   navLinkFont ">
            {category?.title}
          </h1>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default CategoryCard;
