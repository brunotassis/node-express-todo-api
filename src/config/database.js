const mongoose   = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
    'mongodb://192.168.33.10:27017/todo',
    { useNewUrlParser: true }
);