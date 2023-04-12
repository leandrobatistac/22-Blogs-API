/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  PostCategoryTable.associate = ({Category, BlogPost}) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      as: 'categories'
    });

    Category.belongsToMany(BlogPost, {
      through: PostCategoryTable,
      foreignKey: 'postId',
      as: 'blog_posts'
    });
  }

  return PostCategoryTable;
}