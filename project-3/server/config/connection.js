const mongoose = require('mongoose');

mongoose.connect(           //setup mongo connection below
  process.env.MONGODB_URI || 'mongodb://',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
