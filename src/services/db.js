import axios from 'axios';

const db = axios.create({
  baseURL: 'https://flyrics.herokuapp.com:4000/musics',
});

export default db;