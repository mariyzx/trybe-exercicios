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

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivity;

  if (status) {
    filteredActivity = activities.filter((act) => act.status === status);
  }

  res.status(200).json({ activities: filteredActivity });
});

module.exports = app;