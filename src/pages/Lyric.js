import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Kanji from '../components/Kanji';
import InfosKanji from '../components/InfosKanji';
import findKanjis from '../utils/findKanjis';
import db from "../services/db";

import './styles/Lyric.css';
import 'react-tippy/dist/tippy.css';

function Lyric() {
  const params = useParams();
  const [music, setMusic] = useState();
  const [kanji, setKanji] = useState('');

  useEffect(() => {
    db.get(`/musics/${params.id}`).then(res => {
      setMusic(res.data);
    });
  }, [params.id]);

  if (!music) {
    return 'Loading...';
  }

  function showVideoLink() {
    if (music.link) {
      return (
        <a className="link" href={music.link} target="_blank" rel="noreferrer">
          <p>Vídeo</p>
        </a>
      );
    } else {
      return null;
    }
  }

  function loadKanjiInfos(kanji) {
    if (kanji) {
      return <InfosKanji kanji={kanji}/>
    } else {
      return <div className="kanji-infos"></div>;
    }
  }

  return (
    <div className="lyric-container">
      <div className="kanjis-container">
        <div className="kanjis-label">
          <h3>Kanjis encontrados</h3>
        </div>
        <div className="kanjis-list">
          {
            findKanjis(music.lyric).map(kanji => {
              return (
                <a key={kanji} onClick={() => setKanji(kanji)}>
                  <Kanji kanji={kanji}/>
                </a>
              )
            })
          }
        </div>
      </div>
      <div className="lyric">
        <pre className="subtitle">
          <p>{music.title} - {music.band}</p>
          {showVideoLink()}
          {music.lyric}
        </pre>
      </div>
      {loadKanjiInfos(kanji)}
    </div>
  );
}

export default Lyric;