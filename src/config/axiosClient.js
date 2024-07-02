import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_PIXABAY_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
