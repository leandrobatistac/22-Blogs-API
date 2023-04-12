const postServices = require('../services/postServices');

const getPosts = async (req, res, next) => {
  try {
      const posts = await postServices.getPosts();
      res.status(200).json(posts);
  } catch (error) {
      next(error);
  }
};

module.exports = { 
  getPosts,
};