const line = require('@line/bot-sdk');
const client = new line.Client({
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
});

export default async (req, res) => {
    if (!req.body) {
        res.json({'message': 'no post data'});
        return
    }
    const events = req.body.events;
    for (let i=0; i<events.length; i++) {
        const event = events[i];
        const replyToken = event.replyToken;
        // 検証用Tokenのため、Skipする必要がある。
        if (replyToken === '00000000000000000000000000000000' || replyToken === 'ffffffffffffffffffffffffffffffff') {
            continue
        }
        await client.replyMessage(replyToken, {
            type: 'text',
            text: 'Hello World!'
        })
    }
    res.json({'message': 'replied message'})
}
