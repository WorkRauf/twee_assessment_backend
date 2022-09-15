//Dependencies
const Joi = require('joi');
const mongoose = require('mongoose');

//Schema for authenticated users
const tweetSchema = new mongoose.Schema({
    tweet_text: {
        type: String,
        maxLength: 240,
        required: true,
        minLength: 3,
    },
    user: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

//creating Model of User
const Tweet = mongoose.model('Tweet', tweetSchema);

//Validation via Joi
function validateTweet(tweet) {
    const schema = Joi.object({
        tweet_text: Joi.string().min(3).max(240).required(),
        user: Joi.string().min(3).required()
    });
    return schema.validate(tweet);
}
//Export model and validate function to use in Routing API
exports.Tweet = Tweet;
exports.validate = validateTweet;