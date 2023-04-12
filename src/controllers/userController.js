const userServices = require('../services/userServices');

const getUsers = async (req, res, next) => {
  try {
      const allUsers = await userServices.getUsers();
      res.status(200).json(allUsers);
  } catch (error) {
      next(error);
  }
};

module.exports = { 
  getUsers,
};