const mongoose = require('mongoose');
const config = require('./config');

const url = `mongodb+srv://${config.DB_USER}:${config.DB_PWD}@cluster0.9x803bh.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));