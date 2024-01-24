import React, { useEffect, useState } from "react";
import PopularPostCard from "../Components/Hero/PopularPostCard";
import Comment from "../Components/Detail/Comment";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import GetPopular from "../Hooks/GetPopular";
import { FaHeart } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";

const detailVarient = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Detail = () => {
  const { user, loading } = UseAuth();
  const [popularBlog, popularBlogLoading, popularBlogRefetch] = GetPopular();
  const { id } = useParams();
  const axiosPublic = UseAxiosPublic();
  const [blogData, setBlogData] = useState([]);
  const [userEmail, setUserEmail] = useState(user?.email);
  const [liked, setLiked] = useState(1);
  const [blogLoading, setBlogloading] = useState(false);

  // console.log("blog id = ", id);

  // ! function for handleing add to favorite
  const handleFavorite = () => {
    const userData = {
      userEmail,
    };

    //  for handling favorite button
    axiosPublic
      .patch(`/api/blog/favorite/${id}`, userData)
      .then((response) => {
        // console.log(response?.data);

        if (
          response?.data?.liked === undefined ||
          response?.data?.liked === 0
        ) {
          setLiked(0);
        } else {
          setLiked(1);
        }

        // console.log("liked = ", liked);
      })
      .catch((error) => console.log(error));
  };

  // ! effect for loading blog data
  useEffect(() => {
    setBlogloading(true);
    axiosPublic.get(`/api/blog/${id}`).then((response) => {
      setBlogData(response?.data);
      setBlogloading(false);
    });
  }, [id]);

  // ! effect for checking user liked blog data
  useEffect(() => {
    axiosPublic
      .get(`api/blog/favorite/check/${id}?email=${user?.email}`)
      .then((response) => {
        // console.log(response?.data);
        setLiked(response?.data?.liked);
      })
      .catch((error) => console.log(error));
  }, [user?.email, loading]);

  if (loading || blogLoading) {
    return <p>Loading ...</p>;
  }

  // console.log(user?.displayName);
  // console.log(blogData[0]?.writer);

  return (
    <div className="detailContainer pb-6 ">
      {blogData &&
        blogData?.map((blog, ind) => (
          <motion.div
            key={blog?.id}
            className="detailWrapper  w-[98%] xsm:w-[95%] sm:w-[92%]  m-auto "
          >
            {/* detail top section  */}
            <div className="detailTop   flex flex-col md:flex-row gap-9 md:gap-0 justify-evenly items-center mb-6 sm:mb-7 md:mb-10 xmd:mb-12 lg:mb-16 ">
              {/* detail left starts  */}
              <motion.div
                variants={detailVarient}
                initial="hidden"
                whileInView={"animate"}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="detailLeft  w-[94%] xsm:w-[90%] sm:w-[85%] md:w-[55%]  "
              >
                {/* left heading  */}

                <h1 className="  font-bold text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl headingFont mb-5 leading-relaxed  ">
                  {blog?.title}
                </h1>

                {/* left heading  */}

                {/* writer info starts  */}
                <div className="writerInfo  flex items-center gap-2  ">
                  {/* writer image  */}
                  <div className="writerImg   ">
                    <img
                      class=" w-10 h-10 xsm:w-11 xsm:h-11 sm:w-12 sm:h-12 rounded-full"
                      src={
                        blog?.writerImg
                          ? blog?.writerImg
                          : "https://i.ibb.co/B2XybXN/ABU-UBAIDAH-750x430-1.jpg"
                      }
                      alt="Rounded avatar "
                    />
                  </div>
                  {/* writer image  */}

                  {/* writer name  */}

                  <div className="writerName   ">
                    <p className=" text-gray-800 font-medium text-sm sm:text-base ">
                      {blog?.writer}
                    </p>
                    <p className=" text-gray-700 font-medium text-xs xsm:text-sm sm:text-base ">
                      {blog?.date}
                    </p>
                  </div>

                  {/* writer name  */}
                </div>
                {/* writer info ends */}

                {/* edit section starts  */}

                {user?.displayName === blogData[0]?.writer ? (
                  <div className="editContainer mt-7  ">
                    <Link
                      to={`/edit/${blogData[0]?._id}`}
                      className=" bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont "
                    >
                      Edit post
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                {/* edit section ends */}

                {/* add favorite  */}

                {user?.displayName === blogData[0]?.writer ? (
                  " "
                ) : (
                  <div className="addFavorite  mt-5 flex justify-start items-center gap-2  ">
                    <p className=" navLinkFont text-xl "> Add to favorite : </p>

                    <FaHeart
                      onClick={() => handleFavorite()}
                      className={` text-3xl cursor-pointer   ${
                        liked ? "text-red-500" : "text-gray-400"
                      } `}
                    />
                  </div>
                )}

                {/* add favorite ends  */}

                {/*  */}
              </motion.div>
              {/* detail left ends */}

              {/* detail right  */}
              <motion.div
                variants={detailVarient}
                initial="hidden"
                whileInView={"animate"}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="detailRight  w-[92%] xsm:w-[85%] sm:w-[72%] md:w-[41%] "
              >
                {/* right image  */}
                <div className="rightImg  h-[18rem] sm:h-[19rem]  md:h-[15rem] xmd:h-[16rem] lg:h-[18rem] rounded-md overflow-auto ">
                  <img
                    src={blog?.titleImg}
                    className=" w-full h-full   bgImage "
                    alt=""
                  />
                </div>
                {/* right image  */}
              </motion.div>
              {/* detail right  */}
            </div>
            {/* detail top section  ends */}

            {/* detail paragraph starts  */}

            {/* detail paragraph container  */}

            <div className="detailCOntainer  flex justify-between   ">
              <div className="detailParagraphContainer w-[97%] xsm:w-[94%] sm:w-[90%] xmd:w-[68%] paragraphFont text-sm xsm:text-base sm:text-lg m-auto    ">
                {/* detail paragraph  */}
                <motion.div
                  variants={detailVarient}
                  initial="hidden"
                  whileInView={"animate"}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="detailParagraph   "
                  dangerouslySetInnerHTML={{ __html: blog?.description }}
                ></motion.div>
                {/* detail paragraph ends */}

                {/* comment section starts  */}
                <div className="commentSection mt-14  ">
                  <Comment id={id} />
                </div>
                {/* comment section ends */}

                {/*  */}
              </div>

              {/* most popular post container */}
              <div className="mostPopularContainer  hidden xmd:block  xmd:w-[27%] p-1  ">
                <motion.h1
                  initial={{ y: 35, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="   text-lg lg:text-2xl font-semibold text-gray-800 mb-3 lg:mb-6 "
                >
                  Most popular
                </motion.h1>

                {/* popular post card  */}
                <div className="popularPost grid grid-cols-1 gap-12  ">
                  {popularBlog &&
                    popularBlog.map((blog, ind) => (
                      <PopularPostCard key={blog?._id} blog={blog} />
                    ))}
                </div>
                {/* popular post card  */}
              </div>
              {/* most popular post container */}
            </div>

            {/* detail paragraph container  */}

            {/* detail paragraph ends */}

            {/*  */}
          </motion.div>
        ))}
    </div>
  );
};

export default Detail;
