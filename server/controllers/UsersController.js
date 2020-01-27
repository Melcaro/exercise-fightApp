const UsersStore = require('../store/UsersStore');

const getUsers = async (req, res) => {
  const result = await UsersStore.fetchUsers();
  console.log(result);
  res.json(result);
};

module.exports = { getUsers };
