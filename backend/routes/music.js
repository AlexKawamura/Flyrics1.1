const router = require('express').Router();
let Music = require('../models/music.model');

router.route('/').get((req, res) => {
  Music.find()
    .then(musics => res.json(musics))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Music.findById(req.params.id)
    .then(music => res.json(music))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/new').post((req, res) => {
  const title = req.body.title;
  const band = req.body.band;
  const album = req.body.album;
  const lyric = req.body.lyric;
  const link = req.body.link;

  const newMusic = new Music({
    title,
    band,
    album,
    lyric,
    link
  });

  newMusic.save()
    .then(() => res.json('New music created!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;