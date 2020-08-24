const mongoose = require('mongoose');
const {data} = require('./data');

exports.connect = async () => {
    await mongoose.connect(`mongodb+srv://${data.mongoUser}:${data.mongoPassword}@${data.mongoClusterName}.z22xi.gcp.mongodb.net/${data.mongoDbName}?retryWrites=true&w=majority`, {useNewUrlParser: true});
}

exports.disconnect = async () => {
    await mongoose.disconnect();
}
