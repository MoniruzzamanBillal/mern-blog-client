import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const GetSingleBlog = (id) => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: blogData,
    isLoading: blogLoading,
    refetch: blogRefetch,
  } = useQuery({
    queryKey: ["singleBlog", id],
    queryFn: async () => {
      const blogData = await axiosPublic.get(`/api/blog/${id}`);
      // console.log(blogData?.data[0]);
      return blogData?.data[0];
    },
  });

  return [blogData, blogLoading, blogRefetch];
};

export default GetSingleBlog;
