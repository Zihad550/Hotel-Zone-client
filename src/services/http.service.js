import axios from 'axios';
const axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    // best is to set 15000
    timeout: 35000, // because of using free hosting platforms
}

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;