import { createApi } from "@reduxjs/toolkit/query/react";
import Axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, body, params }) => {
    try {
      const token = localStorage.getItem("token"); 
      
      const result = await Axios({
        url: baseUrl + url,
        method,
        data: body || data,
        params,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }), 
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export const apiService = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL 
      ? `${process.env.REACT_APP_BASE_URL}/` 
      : "http://127.0.0.1:8000/api",
  }),
  endpoints: () => ({}),
  reducerPath: "apiService",
});

export default apiService;