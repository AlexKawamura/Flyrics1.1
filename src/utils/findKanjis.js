function findKanjis(lyric) {
  let result = [];

  for (let i = 0; i < lyric.length; ++i) {
      if ((lyric[i] >= "\u4e00" && lyric[i] <= "\u9faf") || (lyric[i] >= "\u3400" && lyric[i] <= "\u4dbf")) {
        result.push(lyric[i]);
      }
  }

  const arrKanjis = [...new Set(result)];

  return arrKanjis;
}

export default findKanjis;