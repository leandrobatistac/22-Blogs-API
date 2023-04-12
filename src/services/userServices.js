const { User } = require('../models');

const getUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getUsers,
  findByEmail,
};
