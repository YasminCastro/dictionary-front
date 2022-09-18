import { CONFIG } from '@/config';
import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: any) {
  const { 'dictionary.token': token } = parseCookies(ctx);

  const api: AxiosInstance = axios.create({
    baseURL: `${CONFIG.BACKEND_URL}`,
  });

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
