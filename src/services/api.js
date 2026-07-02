import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const submitContactAPI = async (formData) => {
  const response = await axios.post(`${API_URL}/contact`, formData);
  return response.data;
};

export const getProjectsAPI = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};
