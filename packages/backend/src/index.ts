import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createIdea, generateRandomIdeaContent, readIdeas } from './ideas';
import { readStats } from './stats';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/ideas', (req, res) => {
  res.json(readIdeas());
});

app.post('/ideas', (req, res) => {
  try {
    createIdea(req.body);
    res.status(200);
  } catch (e) {
    res.status(500);
  }

  res.json(readIdeas());
});

app.get('/stats', (req, res) => {
  res.json(readStats());
});

app.get('/random', (req, res) => {
  res.json({
    content: generateRandomIdeaContent(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
