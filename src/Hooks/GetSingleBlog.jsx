import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const GetSingleBlog = (id) => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: blogData,
    isLoading: blogLoading,
    refetch: blogRefetch,
  } = useQuery({
    queryKey: ["singleBlog"],
    queryFn: async (id) => {
      const blogData = await axiosPublic.get(`/api/blog/${id}`);
      return blogData?.data;
    },
  });

  return [blogData, blogLoading, blogRefetch];
};

export default GetSingleBlog;
