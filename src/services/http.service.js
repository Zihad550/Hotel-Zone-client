import axios from 'axios';
const axiosconfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 25000,
}

const axiosInstance = axios.create(axiosconfig);

export default axiosInstance;