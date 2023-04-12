const userServices = require('../services/userServices');
const auth = require('../utils/auth');

const verifyLogin = async (req, res, next) => {
  try {
      const { email, password } = req.body;
      const token = auth.generateToken(email); 
      const user = await userServices.findByEmail(email);

      if (user === null || password !== user.password) {
        res.status(400).json({ message: 'Invalid fields' });
      }

      res.status(200).json({ token: `${token}` });
  } catch (error) {
      next(error);
  }
};

module.exports = { 
  verifyLogin,
};