import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http:///localhost:3000",
  headers: {
    "Content-Type": "application/json", // ✅ ensure it's JSON
  },
})

export default api