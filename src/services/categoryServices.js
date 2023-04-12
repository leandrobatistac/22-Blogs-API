const { Category } = require('../models');

const getCategories = async () => {
  const allCategories = await Category.findAll({ attributes: ['id', 'name'] });
  return allCategories;
};

const createCategory = async ({ name }) => Category
  .create({ name });

module.exports = {
  getCategories,
  createCategory,
};
