const categoryServices = require('../services/categoryServices');

const getCategories = async (req, res, next) => {
  try {
      const allCategories = await categoryServices.getCategories();
      res.status(200).json(allCategories);
  } catch (error) {
      next(error);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: '"name" is required' });
    }

    const category = await categoryServices.createCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
}
};

module.exports = { 
  getCategories,
  createCategory,
};