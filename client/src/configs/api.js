import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json", // ✅ ensure it's JSON
  },
})

export default api