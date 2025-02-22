import axios from "axios";

// const BASE_URL = "https://utk24b.onrender.com/api/v1/";
// const BASE_URL = "http://localhost:5000/api/v1/";
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
