const mongoose = require('mongoose');

mongoose.connect(           //setup mongo connection below
  process.env.MONGODB_URI || 'mongodb://localhost:27017/art-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
