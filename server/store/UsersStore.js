const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const auth = require('../services/auth');
const URL =
  process.env.OS && process.env.OS.startsWith('Windows')
    ? 'mongodb://192.168.99.100:27017'
    : 'mongodb://db:27017';

let db = null;

async function initializeDB() {
  const client = await MongoClient.connect(URL, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
  });
  db = client.db('users');
}

async function removeDB() {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.error(e);
  }
}

async function addUsers(usersList) {
  try {
    return await db.collection('users').insertMany(usersList);
  } catch (e) {
    console.log(e);
  }
}

async function fetchUsers(limit = 0) {
  try {
    return await db
      .collection('users')
      .find()
      .sort({ wonMatches: 1, totalMatches: 1 })
      .limit(limit)
      .toArray();
  } catch (e) {
    console.log(e);
  }
}

async function setPoints(winnerID, looserID) {
  try {
    await db
      .collection('users')
      .updateOne(
        { _id: ObjectID(winnerID) },
        { $inc: { score: +1, totalMatches: +1, wonMatches: +1 } }
      );
    await db
      .collection('users')
      .updateOne(
        { _id: ObjectID(looserID) },
        { $inc: { score: -1, totalMatches: +1, lostMatches: +1 } }
      );
    return { status: 'points were given' };
  } catch (e) {
    console.log(e);
  }
}

initializeDB();
module.exports = {
  initializeDB,
  removeDB,
  addUsers,
  fetchUsers,
  setPoints,
};
