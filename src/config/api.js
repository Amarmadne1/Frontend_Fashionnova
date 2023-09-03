
import axios from 'axios';
const LOCALHOST='http://localhost:5453'

export const API_BASE_URL = LOCALHOST
export const api1= axios.create({
  baseURL: API_BASE_URL,
});
const api = axios.create({
  baseURL: API_BASE_URL,
});


const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
