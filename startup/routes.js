const express = require('express');
const cors = require('cors');
const tweet = require('../routes/tweets');
module.exports = function (app) {
    //Routes set up
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/api', tweet);
}