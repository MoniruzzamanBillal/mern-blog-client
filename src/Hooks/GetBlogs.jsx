import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const GetBlogs = () => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: blogsData,
    isLoading: blogsDataLoading,
    refetch: blogsReFetch,
  } = useQuery({
    queryKey: ["getBlog"],
    queryFn: async () => {
      const blogsData = await axiosPublic.get("/api/blogs");
      return blogsData?.data?.result;
    },
  });

  return [blogsData, blogsDataLoading, blogsReFetch];
};

export default GetBlogs;
