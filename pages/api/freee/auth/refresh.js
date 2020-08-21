const fetch = require('node-fetch');
const {data} = require('./data');

export default async (refreshToken) => {
    const body = {
        grant_type: 'refresh_token',
        client_id: data.clientId,
        client_secret: data.clientSecret,
        refresh_token: refreshToken,
        redirect_uri: data.redirectUri,
    };
    const response = await fetch('https://accounts.secure.freee.co.jp/public_api/token', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    const responseJson = await response.json();
    return responseJson;
}
