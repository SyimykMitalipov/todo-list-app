import axios from 'axios';

// config axios base settings;
export const requester = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8888',
  headers: { 'Content-Type': 'application/json' }
});
