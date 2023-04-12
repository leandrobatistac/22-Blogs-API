const { User } = require('../models');

const getUsers = async () => {
  const allUsers = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return allUsers;
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async ({ displayName, email, password, image }) => User
  .create({ displayName, email, password, image });

module.exports = {
  getUsers,
  findByEmail,
  createUser,
};
