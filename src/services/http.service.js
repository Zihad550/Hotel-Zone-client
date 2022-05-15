import axios from 'axios';
const axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 25000,
}

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;