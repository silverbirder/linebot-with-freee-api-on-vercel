const line = require('@line/bot-sdk');
const {data} = require('../freee/auth/data');
const {getCompanies} = require('../freee/company/get');

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
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const replyToken = event.replyToken;
        // 検証用Tokenのため、Skipする必要がある。
        if (replyToken === '00000000000000000000000000000000' || replyToken === 'ffffffffffffffffffffffffffffffff') {
            continue
        }
        const messageText = event.message.text;
        if (messageText.match(/認証/)) {
            await client.replyMessage(replyToken, {
                type: 'text',
                text: `${data.redirectUri}&state=${event.source.userId}`
            })
        } else if (messageText.match(/会社/)) {
            const companies = await getCompanies(event.source.userId);
            const names = ",".concat(companies.map((c) => {
                return c.display_name;
            }));
            await client.replyMessage(replyToken, {
                type: 'text',
                text: names
            })
        }
    }
    res.json({'message': 'replied message'})
}
