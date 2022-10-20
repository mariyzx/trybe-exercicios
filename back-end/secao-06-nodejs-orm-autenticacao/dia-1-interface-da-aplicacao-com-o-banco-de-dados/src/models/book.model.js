const { DataTypes } = require("sequelize")

const bookModel = (sequelize, dataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })

  return Book;
}

module.exports = bookModel;