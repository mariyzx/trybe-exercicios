const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express.json());

// ROTAS

app.get('/myActivities', (_req, res) => {
  res.status(200).json(activities);
});

app.get('/myActivities/:id', (req, res) => {
  const idParam = req.params.id;
  const activity = activities.find(({ id }) => id === Number(idParam));
  res.status(200).json(activity);
});

module.exports = app;