import axios from "axios";

const axiosParams = {
  baseURL: "https://jsonplaceholder.typicode.com/",
};

const axiosInstance = axios.create(axiosParams);

const API = (instance) => ({
  get: (url, config = {}) => instance.get(url, config),
  post: (url, config = {}) => instance.post(url, config),
  put: (url, config = {}) => instance.put(url, config),
  patch: (url, config = {}) => instance.patch(url, config),
  delete: (url, config = {}) => instance.delete(url, config),
});

export default API(axiosInstance);
