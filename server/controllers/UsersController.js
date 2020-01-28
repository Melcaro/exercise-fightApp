const UsersStore = require('../store/UsersStore');

const getUsers = async (req, res) => {
  const result = await UsersStore.fetchUsers();
  res.json(result);
};

const setScores = async (req, res) => {
  const { winnerID, looserID } = req.body;
  const result = await UsersStore.setPoints(winnerID, looserID);
  return res.status(201).json(result);
};

const getRanking = async (req, res) => {
  const ranking = await UsersStore.fetchRanking();
  res.json(ranking);
};
module.exports = { getUsers, setScores, getRanking };
