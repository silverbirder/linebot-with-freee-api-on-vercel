const data = {
    mongoUser: process.env.MONGO_USER,
    mongoPassword: process.env.MONGO_PASSWORD,
    mongoClusterName: process.env.MONGO_CLUSTER_NAME,
    mongoDbName: process.env.MONGO_DB_NAME
}

exports.data = data;
