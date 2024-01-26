import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://blog-server-nine-flax.vercel.app",
  withCredentials: true,
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
