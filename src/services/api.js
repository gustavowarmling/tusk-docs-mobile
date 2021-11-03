import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://tusk-docs.herokuapp.com/',
});
