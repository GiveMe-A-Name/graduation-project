import axios from 'axios';
const PORT = 3001;

export async function post(
  url: string,
  {
    data,
    query,
  }: {
    data?: any;
    query?: any;
  },
) {
  const response = await axios.post(url, data, {
    params: query,
    baseURL: `http://localhost:${PORT}/api`,
  });
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw 'post network error';
}

export async function get(url: string, query?: any) {
  const response = await axios.get(url, {
    params: query,
    baseURL: `http://localhost:${PORT}/api`,
  });
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw 'get network error';
}