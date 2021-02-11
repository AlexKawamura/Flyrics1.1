import axios from "axios";
import { useEffect, useState } from "react";

function InfosKanji(props) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    axios.get(`https://kanjiapi.dev/v1/words/${props.kanji}`).then(res => {
      setWords(res.data);
    });
  }, [props.kanji]);

  function loadInfos() {
    return words.map(word => {
      const variants = word.variants.map(variant => {
        return {
          'pronounced': variant.pronounced,
          'written': variant.written
        };
      });

      const meanings = word.meanings.map(meaning => {
        return meaning.glosses;
      });

      return {
        'variants': variants,
        'meanings': meanings
      };
    });
  }

  return (
    <div className="kanji-infos">
      <h1>{props.kanji}</h1>
      <div className="words-container">
        <fieldset>
          <legend>Words:</legend>
            {loadInfos().map((item, index) => {
              return (
                <ul key={index}>
                  <li><b>Written:</b> {item.variants[0].written}</li>
                  <li><b>Pronounced:</b> {item.variants[0].pronounced}</li>
                  <li><b>Meanings:</b> 
                    {item.meanings.map((meaning, index) => 
                      <ul key={index}>
                        <li>{meaning.join(', ')}</li>
                      </ul>)}
                  </li>
                </ul>
              );
            })}
        </fieldset>
      </div>
    </div>
  );
}

export default InfosKanji;