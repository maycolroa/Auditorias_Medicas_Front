import axios from 'axios';

const reserApi = axios.create({
  baseURL: import.meta.env.VITE_RESER_API_URL,
});

export { reserApi }
