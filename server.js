require('dotenv').config();
const express = require('express');
const { dbInit } = require('./lib/db');
const { getAllTickets, setTicket } = require('./lib/tickets');
const app = express();

app.use(express.json({ extended: false }));

app.get('/api/tickets', async (request, response) => {
  const result = await getAllTickets();
  response.send(result);
});

app.post('/api/ticket', async (request, response) => {
  const body = request.body;
  console.log(body);
  await setTicket(body);
  response.end();
});

dbInit(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
