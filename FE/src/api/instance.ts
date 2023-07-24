import axios from "axios";

import { getCookie, setCookie } from "../utils";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    if (originalConfig.url !== "/auth/login" && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        const refreshToken = getCookie("refreshToken");
        if (refreshToken) {
          try {
            const response = await instance.post("/auth/refresh-token", [], {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            });
            const { newAccessToken } = response.data;
            setCookie("accessToken", newAccessToken, 1);

            return instance(originalConfig);
          } catch (error) {
            return Promise.reject(error);
          }
        }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
