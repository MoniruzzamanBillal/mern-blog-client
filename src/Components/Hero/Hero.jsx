import React from "react";
import HeroBlogCard from "./HeroBlogCard";
import Category from "./Category";

const Hero = () => {
  return (
    <div className="heroContainer mt-0 xsm:mt-3 sm:mt-5 md:mt-6  ">
      <div className="heroWrapper w-[95%] xsm:w-[92%] sm:w-[90%]  m-auto ">
        {/* heading  */}
        <h1 className=" text-xl xsm:text-2xl sm:text-3xl md:text-4xl headingFont mb-4 xsm:mb-6  sm:mb-8 md:mb-10 font-bold xsm:font-semibold sm:font-medium md:font-normal ">
          Discover new stories and create new ideas
        </h1>
        {/* heading  */}

        {/* blog card  */}
        <div className="blogCardContainer   ">
          <HeroBlogCard />
        </div>
        {/* blog card  */}

        {/* categories section  */}
        <div className="popularCategories   pt-3 xsm:pt-6 sm:pt-8 md:pt-10 pb-2 ">
          <Category />
        </div>
        {/* categories section  */}
      </div>
    </div>
  );
};

export default Hero;
