const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
}

const getById = async (id) => {
  const books = await Book.findByPk(id);

  return books;
}

const create = async ({title, author, pageQuantity}) => {
  const book = await Book.create({title, author, pageQuantity});
  return book;
}

const update = async (id, {title, author, pageQuantity}) => {
  const [books] = await Book.update({title, author, pageQuantity}, { where: { id }},);

  return books;
}

const remove = async (id) => {
  const books = await Book.destroy({  where: { id } });

  return books;
}

module.exports = { getAll, getById, create, update, remove }
