require('dotenv').config();
const express = require('express');
const { dbInit } = require('./lib/db');
const app = express();

app.use(express.json({ extended: false }));

app.get('/api/testroute/', (request, response) => {
  response.send('Diese Route funktioniert wirklich wunderbar');
});

dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
