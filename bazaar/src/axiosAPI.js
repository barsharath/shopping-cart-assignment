import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:5005/"
});

export default axiosAPI;