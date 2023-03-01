import axios from "axios";


const axiosDataInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosDataInstance