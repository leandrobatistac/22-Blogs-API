const { Router } = require('express');
const userController = require('../controllers/userController');
const validate = require('../middlewares/userValidate');

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', validate.userValidate, userController.createUser);

module.exports = userRouter;