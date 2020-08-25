const mongoose = require('mongoose');
const {tokenSchema} = require('./schema');

exports.findToken = async (userId) => {
    const Token = mongoose.model('Token', tokenSchema);
    const res = await Token.find({userId: userId});
    return res;
};

exports.saveToken = async (userId, accessToken, refreshToken) => {
    const Token = mongoose.model('Token', tokenSchema);
    // TODO: upsert
    // const token = new Token(
    //     {userId: userId},
    //     {$set: {userId: userId, accessToken: accessToken, refreshToken: refreshToken}},
    //     {upsert: true}
    // )
    // await token.update();
    const token = new Token({userId: userId, accessToken: accessToken, refreshToken: refreshToken});
    await token.save();
}

exports.deleteToken = async (userId) => {
    const Token = mongoose.model('Token', tokenSchema);
    await Token.remove({userId: `${userId}`}, function (err) {
        if (err) throw err;
    });
}
