import axios from 'axios'
const axiosWrapper = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
axiosWrapper.interceptors.request.use(
  (config) => {
    const token = ''// getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const onResponse = (response) => {
  return response//.data
}

const onResponseError = (error) => {
  const status = error.response?.status
  if (!status) {
    window.location.href = '/'
  }

  switch (status) {
    case 400:
      return Promise.reject(error.response?.data)
    case 401:
  
    window.location.href = '/'
      return Promise.reject(error.response?.data)
    default:
      break
  }
  return Promise.reject(error)
}
axiosWrapper.interceptors.response.use(onResponse, onResponseError)
export default axiosWrapper;
