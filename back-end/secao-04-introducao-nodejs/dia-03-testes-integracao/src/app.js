const express = require('express');
const { getAllChocolates, getFilteredChocolates } = require('./cacaoTrybe');

const app = express();

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;

  const filteredChocolates = await getFilteredChocolates(name);
  res.status(filteredChocolates.length === 0 ? 404 : 200).json(filteredChocolates);
});

module.exports = app;