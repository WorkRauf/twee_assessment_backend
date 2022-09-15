const { Tweet, validate } = require("../models/tweet");
const _ = require('lodash');
const express = require('express');
const router = express.Router();

//Get all tweets
router.get('/tweets', async (req, res) => {
    const tweet = await Tweet.find().sort({ 'date': 1 })
    res.send(tweet);
});

//Post a new tweet
router.post('/tweet', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        let tweet = await new Tweet({
            tweet_text: req.body.tweet_text,
            user: req.body.user
        });
        await tweet.save();
        res.status(200).json({
            data: tweet,
            status: true,
            message: 'Tweet posted successfully'
        });
    } catch (error) {
        res.status(500).send(error)
    }
});
module.exports = router