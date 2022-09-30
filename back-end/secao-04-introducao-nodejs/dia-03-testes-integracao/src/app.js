const express = require('express');
const { getAllChocolates } = require('./cacaoTrybe');

const app = express();

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

module.exports = app;