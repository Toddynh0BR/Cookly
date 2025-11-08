import axios from "axios";

export const api = axios.create({
    baseURL: "https://cookly-back.onrender.com"
})
