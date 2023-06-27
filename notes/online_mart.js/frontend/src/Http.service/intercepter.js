import axios from 'axios'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your API base URL
    // timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        const token = JSON.parse(localStorage.getItem('currentUser'))
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.log('req error')
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response)
        return response;
    },
    (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
            console.log("interceptors logout")
        }
        console.log('res error')

        return Promise.reject((error))
    }
);

export default axiosInstance;;
