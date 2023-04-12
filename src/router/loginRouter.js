const { Router } = require('express');
const loginController = require('../controllers/loginController');
const loginValidate = require('../middlewares/loginValidate');

const userRouter = Router();

userRouter.post('/', loginValidate.loginValidate, loginController.verifyLogin);

module.exports = userRouter;