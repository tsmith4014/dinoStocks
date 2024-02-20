import axios from "axios";

const host = process.env.REACT_APP_BACKEND_HOST || "127.0.0.1";
const port = process.env.REACT_APP_BACKEND_PORT || "8000";

const baseURL = `http://${host}:${port}/api/v1/user/`;

export const userAPI = axios.create({
    baseURL: baseURL,
});