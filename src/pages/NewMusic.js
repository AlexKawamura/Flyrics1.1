import { useState } from 'react';
import { toast } from 'react-toastify';

import db from '../services/db';

import './styles/NewMusic.css';

function NewMusic() {
  const [title, setTitle] = useState('');
  const [band, setBand] = useState('');
  const [album, setAlbum] = useState('');
  const [lyric, setLyric] = useState('');

  async function handleFormSubmit(event) {
    event.preventDefault();

    const data = {
      'title': title,
      'band': band,
      'album': album,
      'lyric': lyric,
    };

    await db.post('/musics/new', data)
    .then(() => {
      toast("Default notification!")
    });

    document.querySelector('form').reset();
  }

  return (
    <div className="container">
      <div className="subtitle">
        <p>Nova Música</p>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label className="label-title" htmlFor="title-input">Título:</label>
          <input
            className="input-title"
            id="title-input"
            type="text"
            onChange={ev => setTitle(ev.target.value)}  
          />
        </div>
        <div className="input-container">
          <label className="label-author" htmlFor="author-input">Cantor(a) / Banda:</label>
          <input
            className="input-author"
            id="author-input"
            type="text"
            onChange={ev => setBand(ev.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="label-album" htmlFor="album-input">Álbum:</label>
          <input
            className="input-album"
            id="album-input"
            type="text"
            onChange={ev => setAlbum(ev.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="label-lyric" htmlFor="lyric-textarea">Letra:</label>
          <textarea
            className="textarea-lyric"
            id="lyric-textarea"
            type="text"
            onChange={ev => setLyric(ev.target.value)}
          />
        </div>

        <button className="save-button" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default NewMusic;
