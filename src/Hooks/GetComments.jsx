import axios from "axios";
import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const GetComments = (id) => {
  const axiosPublic = UseAxiosPublic();

  const {
    data: commentsData,
    isLoading: commentsDataLoading,
    refetch: commentsReFetch,
  } = useQuery({
    queryKey: ["getComments", id],
    queryFn: async () => {
      // console.log(id);
      const blogsData = await axiosPublic.get(`/api/comments/blog/${id}`);
      // console.log(blogsData?.data?.blogs);
      return blogsData?.data?.blogs;
    },
  });

  return [commentsData, commentsDataLoading, commentsReFetch];
};

export default GetComments;
