const fetch = require('node-fetch');
const {connect, disconnect} = require('../../../../db/mongo');
const {findToken} = require('../../../../db/operation');

exports.getCompanies = async (userId) => {
    await connect();
    const tokens = await findToken(userId);
    await disconnect();

    const accessToken = tokens[0].accessToken;
    const response = await fetch('https://api.freee.co.jp/api/1/companies', {
        headers: {'Authorization': `Bearer ${accessToken}`}
    });
    const responseJson = await response.json();
    return responseJson;
};
