import axios, { AxiosInstance } from "axios";

const isServer = typeof window === "undefined";

// Only allow the baseURL to be defined on server due to security reasons.
const serverAxiosInstance: AxiosInstance = axios.create({
  baseURL: isServer
    ? process.env.API_URL || "http://localhost:8080/api"
    : undefined,
  withCredentials: true,
});

const clientAxiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
  headers: {
    Cookie: isServer ? "" : document.cookie,
  },
});

// Add a response interceptor for global error handling
function addInterceptors(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => {
      // add cookie form client to server

      // set cookie
      return response;
    },
    (error) => {
      // Log the error only on the server side.
      if (isServer) {
        console.error("Data:", error.response?.data);
        console.error("Status:", error.response?.status);
        console.error("Headers:", error.response?.headers);
      }
      return Promise.reject(error);
    }
  );
}

addInterceptors(serverAxiosInstance);
addInterceptors(clientAxiosInstance);

// Helper functions
// Can be expanded with more specific functionality as needed.

// Exports
export const axiosServer = serverAxiosInstance;
export const axiosClient = clientAxiosInstance;
