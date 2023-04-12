const { Router } = require('express');
const tokenValidate = require('../middlewares/tokenValidate');
const categoryController = require('../controllers/categoryController');

const categoryRouter = Router();

categoryRouter.get('/', tokenValidate.tokenValidate, categoryController.getCategories);
categoryRouter.post('/', tokenValidate.tokenValidate, categoryController.createCategory);

module.exports = categoryRouter;