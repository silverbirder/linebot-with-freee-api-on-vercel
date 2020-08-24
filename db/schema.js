const mongoose = require('mongoose');


const tokenSchema = mongoose.Schema({
    userId: String,
    accessToken: String,
    refreshToken: String,
});

exports.tokenSchema = tokenSchema;
