const mongoose = require('mongoose');

mongoose.connect('mongodb://adminapi:adminapi123@ds139576.mlab.com:39576/apirestfulsky', { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;