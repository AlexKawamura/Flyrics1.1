import { Link } from 'react-router-dom';

function MusicCard(props) {
  const music = props.musicInfo;

  return (
    <Link to={`/lyric/${music._id}`} className="card">
      <p className="music-title">{music.title}</p>
      <p className="band-name">{music.band}</p>
    </Link>
  );
}

export default MusicCard;