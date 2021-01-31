import { useState } from 'react';

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
      .then(() => alert('Nova música criada com sucesso!'))
      .catch(err => alert(`Erro ao cadastrar nova música\n${err}`));

    document.querySelector('form').reset();
  }

  function validateInput(id, value) {
    const input = document.getElementById(id);

    if (value) {
      input.style.border = "none";

      switch(id) {
        case 'title-input':
          setTitle(value);
          break;
        case 'author-input':
          setBand(value);
          break;
        case 'lyric-textarea':
          setLyric(value);
          break;
        default:
            break;
      }
    } else {
      input.style.border = "2px solid red";
    }
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
            onChange={ev => validateInput(ev.target.id, ev.target.value)}  
          />
        </div>
        <div className="input-container">
          <label className="label-author" htmlFor="author-input">Cantor(a) / Banda:</label>
          <input
            className="input-author"
            id="author-input"
            type="text"
            onChange={ev => validateInput(ev.target.id, ev.target.value)}
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
            onChange={ev => validateInput(ev.target.id, ev.target.value)}
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
