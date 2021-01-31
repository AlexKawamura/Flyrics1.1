import axios from 'axios';

const db = axios.create({
  baseURL: 'https://flyrics.herokuapp.com/musics',
});

export default db;