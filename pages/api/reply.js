const line = require('@line/bot-sdk');
const client = new line.Client({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
});

export default (req, res) => {
    if (!req.body) {
        res.json({'message': 'no post data'});
        return
    }
    req.body.events.map(async (event) => {
        await client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'Hello World!'
        })
    });
    res.json({'message': 'replied message'})
}
