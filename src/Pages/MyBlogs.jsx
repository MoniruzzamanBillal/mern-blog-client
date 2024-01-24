import React, { useEffect, useState } from "react";
import MyBlogCard from "../Components/MyBlogCard";
import UseAuth from "../Hooks/UseAuth";
import GetUserBlogs from "../Hooks/GetUserBlogs";

const MyBlogs = () => {
  const { user, loading } = UseAuth();
  const [displayName, setDisplayName] = useState([]);
  const [userBlogs, userBlogsLoading, userBlogsReFetch] =
    GetUserBlogs(displayName);

  //! effect for setting user name in state
  useEffect(() => {
    setDisplayName(user?.displayName);
  }, [user]);

  console.log(userBlogs);

  return (
    <div className="myBlogsContainer   ">
      <div className="myBlogsWrapper  ">
        {/* title  */}
        <h1 className=" text-4xl font-semibold text-center ">My blogs </h1>
        {/* title ends  */}

        {/* blog card starts  */}
        <div className="myBlogCard   py-6 w-[85%] xsm:w-[78%] sm:w-[95%] lg:w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-x-3 gap-y-7   ">
          {userBlogs &&
            userBlogs.map((blog, ind) => (
              <MyBlogCard key={blog?._id} blog={blog} />
            ))}
        </div>
        {/* blog card ends */}
      </div>
    </div>
  );
};

export default MyBlogs;
