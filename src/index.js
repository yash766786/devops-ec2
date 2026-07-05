import { configDotenv } from 'dotenv';
configDotenv();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Express server.');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK!');
});

app.get('/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the API.',
    timestamp: new Date()
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`PORT: ${process.env.PORT}`);
  console.log(`Server is running on port ${PORT}`);
});