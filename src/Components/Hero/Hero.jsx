import React from "react";
import BlogCard from "../BlogCard";
import HeroBlogCard from "./HeroBlogCard";

const Hero = () => {
  return (
    <div className="heroContainer bg-red-300 ">
      <div className="heroWrapper w-[90%] m-auto ">
        {/* heading  */}
        <h1 className=" text-4xl headingFont mb-6 ">
          Discover new stories and create new ideas
        </h1>
        {/* heading  */}

        {/* blog card  */}
        <div className="blogCardContainer bg-fuchsia-400 ">
          <HeroBlogCard />
        </div>
        {/* blog card  */}
      </div>
    </div>
  );
};

export default Hero;
