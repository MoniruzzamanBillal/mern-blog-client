import React from "react";
import { motion } from "framer-motion";
import Type from "../Util/Type";

import { FiDownload } from "react-icons/fi";

import { FaHandPaper, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { skillsData } from "../Util/Data";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="aboutContainer   overflow-hidden ">
      <div className="aboutWrapper  py-2 heroWraper w-[99%] xsm:w-[94%] sm:w-[90%] m-auto flex flex-col justify-center items-center ">
        {/* user img  */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="userImg relative   flex justify-center items-center  "
        >
          <img
            src={"https://i.ibb.co/P61XBMK/img.jpg"}
            width={"100"}
            height={"100"}
            className="w-14 h-14 p-0.5 rounded-full ring-2 ring-gray-300 "
            alt="Bordered avatar"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.3 }}
            className="handIcon  absolute bottom-0 right-[0rem] "
          >
            <FaHandPaper className=" -rotate-12  text-yellow-400 text-lg " />
          </motion.div>
        </motion.div>
        {/* user img  */}

        {/* short description starts  */}
        <motion.div className="shortDescription  mt-3 w-[95%] sm:w-[92%] md:w-[82%] xmd:w-[68%] lg:w-[50%] m-auto text-base xsm:text-xl sm:text-2xl text-center ">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="  text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl font-bold xmd:font-semibold pb-2 xsm:pb-3 "
          >
            I am Md. Moniruzzaman
          </motion.p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="typingStyl text-xs xsm:text-sm sm:text-base font-semibold pb-2 xsm:pb-3 sm:pb-4 text-violet-600 "
          >
            <Type />
          </motion.div>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className=" text-sm xsm:text-base sm:text-lg md:text-xl  "
          >
            To gain confidence and fame using my potential in the field of web
            development and express my innovative creative skills for self and
            company growth. I always like to learn new things and have
            experience with new stuff.I enjoy building web application using
            React.
          </motion.p>
        </motion.div>
        {/* short description ends */}

        {/* button section  */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="btnGroup  mt-4 flex items-center justify-evenly space-x-1 xsm:space-x-2 "
        >
          {/* contact button  */}
          <a
            href="https://www.linkedin.com/in/md-moniruzzaman-a0b466249/"
            target="_blank"
            className="  py-2 px-5 rounded-md text-xs xsm:text-base bg-gray-700 text-gray-50  flex justify-evenly items-center self-center cursor-pointer hover:bg-gray-900 hover:scale-105 active:scale-95  duration-200  "
          >
            <p className="">Contact me here</p>

            <BiRightArrowAlt className="text-sm xsm:text-xl    " />
          </a>
          {/* contact button  */}

          {/* download button  */}
          <div className="    ">
            <a
              href="/moniruzzamanV1.pdf"
              download
              className="rounded-md  w-full text-xs xsm:text-base py-2 px-5 bg-gray-700 text-gray-50  flex justify-evenly items-center self-center cursor-pointer hover:bg-gray-900 hover:scale-105 active:scale-95  duration-200 "
            >
              <p className="">Download cv</p>

              <FiDownload className=" text-sm xsm:text-xl   " />
            </a>
          </div>
          {/* download button  */}

          <div className="icon1 p-1.5 rounded-full bg-gray-300  ">
            {" "}
            <a target="_blank" href="https://github.com/MoniruzzamanBillal">
              <FaGithub className=" text-base xsm:text-xl" />
            </a>
          </div>
          <div className="icon2 p-1.5 rounded-full bg-gray-300 ">
            {" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-moniruzzaman-a0b466249/"
            >
              <FaLinkedin className=" text-base xsm:text-xl" />
            </a>
          </div>

          {/*  */}
        </motion.div>
        {/* button section  */}

        {/* about section  */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="aboutContainer   "
        >
          <div
            id="about"
            className="aboutWrapper mt-9  xsm:mt-12 sm:mt-16 mb-2 w-[99%] xsm:w-[94%] sm:w-[92] md:w-[88%] xmd:w-[84%] lg:w-[75%] m-auto  flex flex-col justify-center items-center text-center  "
          >
            <h1 className=" navText text-xl sm:text-3xl md:text-4xl font-semibold mb-3.5 xsm:mb-4 sm:mb-6 md:mb-8 ">
              About me
            </h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className=" text-xs xsm:text-sm  sm:text-base md:text-lg mb-3 sm:mb-5 md:mb-6 "
            >
              As a dedicated frontend developer skilled in React, HTML, CSS,
              Tailwind, JavaScript, Next.js, Express.js, and MongoDB, I excel in
              translating concepts into user-friendly web designs. My expertise,
              cultivated through practical projects, emphasizes creative
              solutions and a commitment to writing clear, effective code.
            </motion.p>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className=" text-xs xsm:text-sm  sm:text-base md:text-lg mb-6 "
            >
              Outside of coding, I leverage various avenues to broaden my
              knowledge, including enjoying quality television series and anime.
              Furthermore, I remain dedicated to lifelong learning and actively
              pursue opportunities to develop new skills and perspectives.
            </motion.p>
          </div>
        </motion.div>
        {/* about section ends  */}

        {/* skills section starts  */}
        {/*  */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          id="skills"
          className="skillsContainer mt-9  xsm:mt-12 sm:mt-16 pb-6 "
        >
          <div className="skillsWrapper  w-[99%] xsm:w-[94%] sm:w-[90%] m-auto ">
            <h1 className=" text-xl xsm:text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-4 navText ">
              My Skills
            </h1>

            {/* skill card  starts  */}
            <Marquee pauseOnHover={true}>
              <div className="skillCardContainer py-8  flex   ">
                {skillsData &&
                  skillsData.map((skill, ind) => (
                    <div
                      key={ind}
                      class="  transition-all hover:scale-105 duration-300 hover:shadow-2xl p-4 sm:p-6 cursor-pointer mx-4 min-w-[11rem] max-w-sm  rounded-lg bg-gray-200 shadow-xl flex flex-col justify-center items-center  "
                    >
                      <div class="mb-2 h-10 w-10 xsm:h-14 xsm:w-14 sm:h-16 sm:w-16 md:h-16 md:w-16  xmd:h-20 xmd:w-20 lg:h-24 lg:w-24">
                        <img
                          src={skill?.skillImg}
                          loading="lazy"
                          alt="Photo by Radu Florin"
                          class="h-full w-full   "
                        />
                      </div>

                      <div>
                        <div class="text-center font-bold text-indigo-500 md:text-lg">
                          {skill?.title}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Marquee>

            {/* skill card  ends  */}
          </div>
        </motion.div>
        {/*  */}
        {/* skills section ends  */}

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default About;
