require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'))
})

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

const con = mongoose.connection;

con.once('open', () => {
  console.log("MongoDB database connection established successfully!");
});

const musicsRouter = require('./routes/music');
const usersRouter = require('./routes/user');

app.use('/musics', musicsRouter);
app.use('/users', usersRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));