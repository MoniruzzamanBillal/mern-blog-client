import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const GetUserBlogs = (displayName) => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: userBlogs,
    isLoading: userBlogsLoading,
    refetch: userBlogsReFetch,
  } = useQuery({
    queryKey: ["userBlogs", displayName],
    queryFn: async () => {
      const blogsData = await axiosPublic.get(
        `/api/blogs/user?writer=${displayName}`
      );

      return blogsData?.data;
    },
  });

  return [userBlogs, userBlogsLoading, userBlogsReFetch];
};

export default GetUserBlogs;
