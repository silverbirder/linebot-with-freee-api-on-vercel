const fetch = require('node-fetch');
const {data} = require('./data');

export default async (req, res) => {
    const body = {
        grant_type: 'authorization_code',
        client_id: data.clientId,
        client_secret: data.clientSecret,
        code: req.query.code,
        redirect_uri: data.redirectUri,
    };
    console.log(JSON.stringify(body));
    const response = await fetch('https://accounts.secure.freee.co.jp/public_api/token', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    const responseJson = await response.json();
    console.log(responseJson);
    const companies = await companies(responseJson.access_token);
    res.json(companies);
}

const companies = async (accessToken) => {
    const response = await fetch('https://api.freee.co.jp/api/1/companies', {
        method: 'POST',
        headers: {'Authorization': `Bearer ${accessToken}`}
    });
    const responseJson = await response.json();
    return responseJson;
};
