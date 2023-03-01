import axios from "axios";


const axiosImageInstance = axios.create({
    baseURL: "http://image.tmdb.org/t/p/w500",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosImageInstance