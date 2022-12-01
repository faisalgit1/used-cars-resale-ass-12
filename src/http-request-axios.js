import axios from "axios";

const request = axios.create({
    baseURL: "https://used-cars-sale-server-sites.vercel.app",
    headers: {
        "content-type": "application/json",
    }
});

export default request;