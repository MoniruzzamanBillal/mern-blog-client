import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const GetBlogs = (currentPage, dataPerPage) => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: blogsData,
    isLoading: blogsDataLoading,
    refetch: blogsReFetch,
  } = useQuery({
    queryKey: ["getBlog", currentPage, dataPerPage],
    queryFn: async () => {
      const blogsData = await axiosPublic.get(
        `/api/blogs?limit=${dataPerPage}&&skip=${currentPage - 1}`
      );

      return blogsData?.data?.result;
    },
  });

  return [blogsData, blogsDataLoading, blogsReFetch];
};

export default GetBlogs;
