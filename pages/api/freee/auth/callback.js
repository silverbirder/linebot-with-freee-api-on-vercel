const fetch = require('node-fetch');
const {data} = require('./data');

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
    return res.json(responseJson);
}
