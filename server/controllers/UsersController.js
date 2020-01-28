const UsersStore = require('../store/UsersStore');

const getUsers = async (req, res) => {
  const { limit } = req.body;
  console.log(limit);
  const result = await UsersStore.fetchUsers(limit);
  res.json(result);
};

const setScores = async (req, res) => {
  const { winnerID, looserID } = req.body;
  const result = await UsersStore.setPoints(winnerID, looserID);
  return res.status(201).json(result);
};

module.exports = { getUsers, setScores };
