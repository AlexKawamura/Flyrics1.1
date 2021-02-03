const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: { type: String, required: true },
  band: { type: String, required: true },
  album: { type: String },
  lyric: { type: String, required: true},
  link: {type: String}
}, {
  timestamps: true,
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;