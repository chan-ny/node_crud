module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    bId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Subtitle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  return Blog;
};
