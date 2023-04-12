const userServices = require('../services/userServices');

const userValidate = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const user = await userServices.findByEmail(email);
  const regex = /\S+@\S+\.\S+/;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }

  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  } 

  if (user !== null) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = { 
  userValidate,
};