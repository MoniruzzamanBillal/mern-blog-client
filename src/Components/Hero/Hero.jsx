import React, { useEffect, useState } from "react";
import HeroBlogCard from "./HeroBlogCard";
import Category from "./Category";
import RecentPost from "./RecentPost";

import { motion } from "framer-motion";
import GetBlogs from "../../Hooks/GetBlogs";

const Hero = () => {
  const [blogsData, blogsDataLoading, blogsReFetch] = GetBlogs();

  return (
    <div className="heroContainer mt-0 xsm:mt-3 sm:mt-5 md:mt-6  ">
      <motion.div className="heroWrapper w-[95%] xsm:w-[92%] sm:w-[90%]  m-auto ">
        {/* heading  */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className=" text-xl xsm:text-2xl sm:text-3xl md:text-4xl headingFont mb-4 xsm:mb-6  sm:mb-8 md:mb-10 font-bold xsm:font-semibold sm:font-medium md:font-normal "
        >
          Discover new stories and create new ideas
        </motion.h1>
        {/* heading  */}

        {/* blog card  */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="blogCardContainer   "
        >
          <HeroBlogCard />
        </motion.div>
        {/* blog card  */}

        {/* categories section  */}
        {/* <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="popularCategories   pt-3 xsm:pt-6 sm:pt-8 md:pt-10 pb-2 "
        >
          <Category />
        </motion.div> */}
        {/* categories section  */}

        {/* recent post container  */}
        <div className="recentPostContainer pt-3 xsm:pt-6 sm:pt-8 md:pt-10 pb-2   ">
          <RecentPost />
        </div>
        {/* recent post container  */}

        {/*  */}
      </motion.div>
    </div>
  );
};

export default Hero;
