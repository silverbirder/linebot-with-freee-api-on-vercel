const fetch = require('node-fetch');
const {data} = require('./data');
const {connect, disconnect} = require('../../../../db/mongo');
const {saveToken} = require('../../../../db/operation');

export default async (req, res) => {
    const body = {
        grant_type: 'authorization_code',
        client_id: data.clientId,
        client_secret: data.clientSecret,
        code: req.query.code,
        redirect_uri: data.callbackUri,
    };
    const response = await fetch('https://accounts.secure.freee.co.jp/public_api/token', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });
    const responseJson = await response.json();
    await connect();
    await saveToken(req.query.state, responseJson.access_token, responseJson.refresh_token);
    await disconnect();
    return res.send("Authentication completed. Please return to LINE.");
}
