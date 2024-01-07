import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const GetPopular = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: popularBlog,
    isLoading: popularBlogLoading,
    refetch: popularBlogRefetch,
  } = useQuery({
    queryKey: ["popularBlog"],
    queryFn: async () => {
      const response = await axiosPublic.get("/api/blogs/popular");
      return response?.data;
    },
  });

  return [popularBlog, popularBlogLoading, popularBlogRefetch];
};

export default GetPopular;
