// Mongo
const MongoClient = require("mongodb").MongoClient;
const mongoPort = process.env.mongoPort;
const mongoBaseURL = process.env.mongoHost;
const mongoDBName = process.env.mongoDB;
const mongoURL = `mongodb://${process.env.mongoAdmin}:${process.env.mongoPassword}@${mongoBaseURL}:${mongoPort}/?authSource=admin`;

// Logic
async function connectDB() {
  const client = await MongoClient.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(mongoDBName);
  return { db, client };
}

module.exports = { connectDB };
