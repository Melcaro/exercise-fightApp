const MongoClient = require('mongodb').MongoClient;
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

async function fetchUsers() {
  try {
    return await dv
      .collection('users')
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  }
}

initializeDB();
module.exports = { initializeDB, removeDB, addUsers, fetchUsers };
