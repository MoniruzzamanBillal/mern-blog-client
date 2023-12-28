import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = [
  {
    title: "Coding",
  },
  {
    title: "Web development",
  },
  {
    title: "Travel",
  },
  {
    title: "Culture",
  },
  {
    title: "Food",
  },
];

const Category = () => {
  return (
    <div className="categoryContainer">
      <div className="categoryWrapper">
        <h1 className=" text-xl xsm:text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold sm:font-semibold ">
          Categories :{" "}
        </h1>

        {/* category card container  */}
        <div className="categoryCard  flex flex-wrap justify-evenly items-center gap-4 ">
          {Categories &&
            Categories.map((category, ind) => (
              <CategoryCard key={ind} category={category} />
            ))}
        </div>
        {/* category card container  */}
      </div>
    </div>
  );
};

export default Category;
