export default async (req, res) => {
    console.log('call back');
    console.log(req.query.code);
    var Freee = require('freee-node');
    var freee = new Freee({
        clientId: process.env.FREEE_CLIENT_ID,
        clientSecret: process.env.FREEE_CLIENT_SECRET,
        redirectUri: process.env.FREEE_REDIRECT_URI
    });
    // code: 6f0ba874fee63c849cfb06a59db781dada273ca641e8d55b80a3ef69cd2226a8
    const value = await freee.getToken(`/public_api/authorize?code=${req.query.code}`);
    res.json({'name': 'hey'})
}
