const { Router } = require('express');
const userController = require('../controllers/userController');
const tokenValidate = require('../middlewares/tokenValidate');
const validate = require('../middlewares/userValidate');

const userRouter = Router();

userRouter.get('/', tokenValidate.tokenValidate, userController.getUsers);
userRouter.post('/', validate.userValidate, userController.createUser);

module.exports = userRouter;