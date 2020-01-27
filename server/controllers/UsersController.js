const UsersStore = require('../store/UsersStore');

const getUsers = async (req, res) => {
  const result = await UsersStore.fetchUsers();
};

module.exports = { getUsers };
