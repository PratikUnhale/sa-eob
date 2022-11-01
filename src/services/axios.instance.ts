import axios from "axios";

const baseURL = "http://192.168.2.110:3000/";
const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = {
    Authorization: token || "",
  };
  return config;
});

export default axiosInstance;
