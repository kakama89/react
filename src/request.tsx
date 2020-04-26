import axios from "axios";
import { API } from "./constant";
export default {
  get: (url) => {
    return axios.get(`${API}/${url}`);
  },
  post: (url, payload) => {
    return axios.post(`${API}/${url}`, payload);
  },
  patch: (url, payload) => {
    return axios.patch(`${API}/${url}`, payload);
  },
};
