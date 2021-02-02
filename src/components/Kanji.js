import { Tooltip } from 'react-tippy';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Kanji(props) {
  const [kanji, setKanji] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    axios.get(`https://kanjiapi.dev/v1/kanji/${props.kanji}`).then(res => {
      setKanji(res.data.kanji);
      setMeanings(res.data.meanings);
      setReadings(res.data.kun_readings);
    });
  }, [props.kanji]);

  return (
    <Tooltip
      html={(
        <div>
          <p><b>Meanings:</b> 
            {meanings.map(m => {
              return ` ${m},`
            })}
          </p>
          <p><b>Readings:</b>
            {readings.map(r => {
              return ` ${r},`
            })}
          </p>
        </div>
      )}
      position="right"
      trigger="click"
      theme="dark"
    ><span className="kanji">{kanji}</span></Tooltip>
  );
}

export default Kanji;