import React from "react";
import PopularPostCard from "../Components/Hero/PopularPostCard";

const Detail = () => {
  return (
    <div className="detailContainer  ">
      <div className="detailWrapper  w-[98%] xsm:w-[95%] sm:w-[92%]  m-auto ">
        {/* detail top section  */}
        <div className="detailTop   flex flex-col md:flex-row gap-9 md:gap-0 justify-evenly items-center  mb-9 ">
          {/* detail left starts  */}
          <div className="detailLeft  w-[94%] xsm:w-[90%] sm:w-[85%] md:w-[55%]  ">
            {/* left heading  */}

            <h1 className="  font-bold text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl headingFont mb-4 leading-relaxed  ">
              A Modern Approach to React Development
            </h1>

            {/* left heading  */}

            {/* writer info starts  */}
            <div className="writerInfo  flex gap-1  ">
              {/* writer image  */}
              <div className="writerImg   ">
                <img
                  class=" w-10 h-10 xsm:w-11 xsm:h-11 sm:w-12 sm:h-12 rounded-full"
                  src="https://i.ibb.co/B2XybXN/ABU-UBAIDAH-750x430-1.jpg"
                  alt="Rounded avatar"
                />
              </div>
              {/* writer image  */}

              {/* writer name  */}

              <div className="writerName   ">
                <p className=" text-gray-800 font-medium text-sm sm:text-base ">
                  Writer name
                </p>
                <p className=" text-gray-700 font-medium text-xs xsm:text-sm sm:text-base ">
                  12-2-2023{" "}
                </p>
              </div>

              {/* writer name  */}
            </div>
            {/* writer info ends */}

            {/*  */}
          </div>
          {/* detail left ends */}

          {/* detail right  */}
          <div className="detailRight  w-[92%] xsm:w-[85%] sm:w-[72%] md:w-[41%] ">
            {/* right image  */}
            <div className="rightImg  h-[18rem] sm:h-[19rem]  md:h-[15rem] xmd:h-[16rem] lg:h-[18rem]  ">
              <img
                src="https://i.ibb.co/MGR6dzK/culture.jpg"
                // className=" w-full h-full object-cover object-center  bgImage "
                className=" w-full h-full   bgImage "
                alt=""
              />
            </div>
            {/* right image  */}
          </div>
          {/* detail right  */}
        </div>
        {/* detail top section  */}

        {/* detail paragraph starts  */}

        {/* detail paragraph container  */}

        <div className="detailCOntainer  flex justify-between ">
          <div className="detailParagraph  w-[97%] xsm:w-[94%] sm:w-[90%] md:w-[68%] paragraphFont text-base xsm:text-lg m-auto  ">
            <p className="  mb-4 ">
              Conventional development methodologies and tools face challenges
              when it comes to component isolation. With the growing complexity
              of applications, the task of managing and reutilizing components
              in and across various projects becomes progressively more
              demanding.
            </p>

            <p className="  mb-4 ">
              This is where Bit steps in to offer a modern and efficient
              solution.
            </p>

            <p className="  mb-4 ">
              Bit is a build system for composable sofware. With Bit, you can
              build components as independent pieces of code shared and
              collaborated via remote component hostings.
            </p>

            <p className=" font-bold mb-4 ">Software composability</p>

            <p className=" mb-4 ">
              A composable software or application is composed of loosely
              coupled and reusable components. These components can be
              re-arranged and reused to produce new features and projects.
            </p>
            <p className=" mb-4 ">
              Think of it as having your own toolkit of well-crafted components
              ready to be integrated into your React project. These components,
              encapsulated with their logic and styles, can be combined to
              create complex and feature-rich applications, like assembling
              building blocks.
            </p>

            {/*  */}
          </div>

          {/* most popular post container */}
          <div className="mostPopularContainer  hidden md:block  md:w-[27%] p-1  ">
            <h1 className="   text-lg lg:text-2xl font-semibold text-gray-800 mb-3 lg:mb-6 ">
              Most popular
            </h1>

            {/* popular post card  */}
            <div className="popularPost grid grid-cols-1 gap-12  ">
              <PopularPostCard />
              <PopularPostCard />
            </div>
            {/* popular post card  */}
          </div>
          {/* most popular post container */}
        </div>

        {/* detail paragraph container  */}

        {/* detail paragraph ends */}

        {/*  */}
      </div>
    </div>
  );
};

export default Detail;
