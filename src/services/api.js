import axios from 'axios';

// Check if running on local development host
const isLocal = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

// Only fallback to localhost during local dev, otherwise use relative path
const API_URL = import.meta.env.VITE_API_URL || (isLocal ? 'http://localhost:5000/api' : '/api');

export const submitContactAPI = async (formData) => {
  if (!import.meta.env.VITE_API_URL && !isLocal) {
    throw new Error("Backend server not configured in production");
  }
  const response = await axios.post(`${API_URL}/contact`, formData);
  return response.data;
};

export const getProjectsAPI = async () => {
  if (!import.meta.env.VITE_API_URL && !isLocal) {
    throw new Error("Backend server not configured in production");
  }
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};
