import { motion } from "framer-motion";
import React from "react";

const UserComment = ({ comment }) => {
  // console.log(comment);
  return (
    <div className="UserCommentContainer   ">
      <motion.div className="UserCommentWrapper   ">
        {/* writer info starts  */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="writerInfo  flex items-center gap-2 mb-1.5  "
        >
          {/* writer image  */}
          <div className="writerImg   ">
            <img
              class=" w-8 h-8 xsm:w-9 xsm:h-9 sm:w-10 sm:h-10 rounded-full"
              src={comment?.commentarImage}
              alt="Rounded avatar"
            />
          </div>
          {/* writer image  */}

          {/* writer name  */}

          <div className="writerName   ">
            <p className=" text-gray-800 font-semibold text-xs sm:text-sm ">
              {comment?.commentar}
            </p>
            <p className=" text-gray-700 font-medium text-xs  ">
              {comment?.commentDate}
            </p>
          </div>

          {/* writer name  */}
        </motion.div>
        {/* writer info ends */}

        {/* user comment  */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="userComment  paragraphFont text-sm sm:text-base   "
        >
          <p>{comment?.comment}</p>
        </motion.div>
        {/* user comment  */}

        {/*  */}
      </motion.div>
    </div>
  );
};

export default UserComment;
