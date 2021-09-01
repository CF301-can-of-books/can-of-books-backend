'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const seed = require('./seed');
const Book = require('./models/Book');
const PORT = process.env.PORT || 3001;


console.log(`Connecting with ${process.env.CONNECTION_STRING}.`);

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
seed();

const app = express();
app.use(cors());
app.use(express.json());

async function save(book) {
  await book.save();
}


app.get('/test', (request, response) => {
  console.log('testing');
  response.send('heller werld from test');
  // save(comic);
  // response.send(comic);
});

app.get('/books', async (request, response) => {
  const email = request.query.email;
  const books = await Book.find({email: email});
  // const books = await Book.find({email: 'bill@microsoft.com'});
  console.log(books);
  response.status(200).send(books);
});

app.post('/books', async (request, response) => {
  const newBook = await Book.create(request.body);
  response.status(201).send(newBook);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
