const { Router } = require('express');
const tokenValidate = require('../middlewares/tokenValidate');
const postController = require('../controllers/postController');

const categoryRouter = Router();

categoryRouter.get('/', tokenValidate.tokenValidate, postController.getPosts);

module.exports = categoryRouter;