import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Kanji from '../components/Kanji';

import db from "../services/db";

import './styles/Lyric.css';
import 'react-tippy/dist/tippy.css';

function Lyric() {
  const params = useParams();
  const [music, setMusic] = useState();

  useEffect(() => {
    db.get(`/musics/${params.id}`).then(res => {
      setMusic(res.data);
    });
  }, [params.id]);

  if (!music) {
    return 'Loading...';
  }

  function isKanji(ch) {
    return (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf");
  }

  function basicParser(lyric) {
    let result = [];

    for (let i = 0; i < lyric.length; ++i) {
        if (isKanji(lyric[i])) {
          result.push(lyric[i]);
        }
    }

    const arrKanjis = [...new Set(result)];

    return arrKanjis;
  }

  return (
    <div className="lyric-container">
      <div className="kanjis">
        {
          basicParser(music.lyric).map(kanji => {
            return <Kanji key={kanji} kanji={kanji} />
          })
        }
      </div>
      <div className="subtitle">
        <p>{music.title} - {music.band}</p>
      </div>
      <div className="lyric">
        <pre>
            {music.lyric}
        </pre>
      </div>
    </div>
  );
}

export default Lyric;