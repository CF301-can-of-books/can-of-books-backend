'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.CONNECTION_STRING);
}

async function save(book) {
	await book.save();
}

const comic = new Book ({ title: 'Preacher', description: 'a preacher, an assassin, and an Irish vampire', status: 'read', email: 'bill@microsoft.com' });

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/test', (request, response) => {
	save (comic);
	response.send(comic);
  
  })
  