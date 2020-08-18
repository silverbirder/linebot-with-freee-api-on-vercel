const line = require('@line/bot-sdk');
const client = new line.Client({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
});

export default (req, res) => {
    req.body.events.map(async (event) => {
        await client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'Hello World!'
        })
    });
    res.statusCode = 200;
    return res.statusCode;
}
