const userServices = require('../services/userServices');
const auth = require('../utils/auth');

const getUsers = async (req, res, next) => {
  try {
      const allUsers = await userServices.getUsers();
      res.status(200).json(allUsers);
  } catch (error) {
      next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    await userServices.createUser(req.body);
    const token = auth.generateToken(email);
    console.log(token);
    res.status(201).json({ token: `${token}` });
  } catch (error) {
    next(error);
}
};

module.exports = { 
  getUsers,
  createUser,
};