import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: `6eaa8116c5dea92c1c42dca1718cbc6e`,
  },
});

export default ApiService;
