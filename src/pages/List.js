import { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import db from '../services/db';

import './styles/List.css';

function List() {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    db.get('/musics').then(res => {
      setMusics(res.data);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="subtitle">
        <p>Aprenda Kanjis enquanto escuta suas músicas favoritas!</p>
      </div>

      <div className="search">
        <input className="input-search" type="text"/>

        <FiSearch size="24" />
      </div>

      <div className="cards-container">
        {musics.map(music => {
          return (
            <Link key={music._id} to={`/lyric/${music._id}`} className="card">
              <p className="music-title">{music.title}</p>
              <p className="band-name">{music.band}</p>
            </Link>
          );
        })}
      </div>

      <Link to="/newMusic" className="create-button">
        <FiPlus size={32} color="#FEFBE6" />
      </Link>
    </div>
  );
}

export default List;
