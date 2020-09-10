import axios from "axios";

import Cookies from "js-cookie";

const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BE_URL_API,
});

authAxios.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    console.log("!!!", error);

    if (
      error.response.status === 401 &&
      originalRequest.url === "profile/refreshToken"
    ) {
      console.log("last request");

      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("retrying", error);

      return axios
        .post(
          `${process.env.REACT_APP_BE_URL_API}/profile/refreshToken`,
          {},
          { withCredentials: true }
        )
        .then((res) => {
          console.log("response inside", res);
          if (res.status === 200) {
            return Promise.resolve(res);
          }
        });
    }

    return Promise.reject(error);
  }
);

export default authAxios;
