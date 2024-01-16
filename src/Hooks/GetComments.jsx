import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const GetComments = (id, currentPage, dataPerPage) => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: commentsData,
    isLoading: commentsDataLoading,
    refetch: commentsReFetch,
  } = useQuery({
    queryKey: ["getComments", id, currentPage, dataPerPage],
    queryFn: async () => {
      // console.log(id)
      const blogsData = await axiosPublic.get(
        `/api/comments/blog/${id}?limit=${dataPerPage}&&skip=${currentPage - 1}`
      );
      // console.log(blogsData?.data?.blogs);
      return blogsData?.data?.blogs;
    },
  });

  return [commentsData, commentsDataLoading, commentsReFetch];
};

export default GetComments;
