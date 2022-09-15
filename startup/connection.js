const mongoose = require('mongoose');

module.exports = function () {
    //Database Connection
    mongoose.connect('mongodb://localhost/tweet_database')
        .then(() => console.log('Connected to MongoDB...'));
}