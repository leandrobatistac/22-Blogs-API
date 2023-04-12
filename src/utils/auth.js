const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generateToken = (email) => {
  const objectEmail = { email };
  const token = jwt.sign(objectEmail, secretKey, configJWT);
  return token;
};

const validateToken = (token) => {
    const isValid = jwt.verify(token, secretKey);
    return isValid;
};

module.exports = {
  generateToken,
  validateToken,
};
