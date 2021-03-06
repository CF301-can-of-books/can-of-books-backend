'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const seed = require('./seed');
const Book = require('./models/Book');
const PORT = process.env.PORT || 3001;


console.log(`Connecting with ${process.env.CONNECTION_STRING}.`);

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
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
});

app.get('/books', async (request, response) => {
  const email = request.query.email;
  const books = await Book.find({ email: email });
  console.log(books);
  response.status(200).send(books);
});

app.post('/books', async (request, response) => {
  if (!request.body.title || !request.body.description || !request.body.status || !request.body.email) {
    response.status(400).send('You must include a title and description with your request')
    return;
  }
  
  try {
    const newBook = await Book.create(request.body);
    response.status(201).send(newBook);
    console.log('Book Added!')
  } catch (error) {
    response.status(500).send('Could not create book')
  }
})

app.delete('/books/:id', async (request, response) => {
  try {
    const email = request.query.email;
    const id = request.params.id;
    await Book.deleteOne({
      _id: id,
      email,
    });
    response.send('Success');
  } catch (error) {
    response.status(400).send(error);
  }
});

app.put('/books/:id', async (request, response) => {
  const id = request.params.id;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, request.body, { new:true });
    response.status(201).send(updatedBook);
    console.log('Book Updated!')
  } catch(error) {
    console.log(error);
    response.status(400).send(`Unable to update ${request.body.title}`)
  }
})

app.delete('/books/:id', async (request, response) => {
  const id = request.params.id;

  try {
    await Book.findByIdAndDelete(id);
    console.log('deleted book');
    response.status(200).send('Successfully deleted book');
  } catch (error) {
    response.status(500).send(error);
  }

})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
