const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro'});
  }
};

const getById = async (req, res) => {
	const { id } = req.params;
	const book = await BookService.getById(id);
		
	if (!book) res.status(404).json({message: 'Book not found'})

	res.status(200).json(book)
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });
  res.status(201).json(book)
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.update(id, {title, author, pageQuantity});

  if (book) {
    return res.status(200).json({message: 'Book updated!'})
  }

  return res.status(404).json({message: 'Book not found!'})
}

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.remove(id);

  if (!book) return res.status(404).json({ message: 'Book not found'});

  res.status(200).json({message: 'Book removed'})
}

module.exports = { getAll, getById, create, update, remove }