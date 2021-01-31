import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../services/db";

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

  return (
    <div className="lyric-container">
      <div className="subtitle">
        <p>{music.title}</p>
      </div>
      <div className="lyric">
        <p>
          {music.lyric}
        </p>
      </div>
    </div>
  )
}

export default Lyric;