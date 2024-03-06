import axios from "axios";

const api = axios.create({
    baseURL: 'https://final-project-reboot.onrender.com/api'
})

export default api