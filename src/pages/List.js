import { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import MusicCard from '../components/MusicCard';
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
          return <MusicCard key={music._id} musicInfo={music} />
        })}
      </div>

      <Link to="/newMusic" className="create-button">
        <FiPlus size={32} color="#FEFBE6" />
      </Link>
    </div>
  );
}

export default List;
