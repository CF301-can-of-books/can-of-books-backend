'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const seed = require('./seed');
const Book = require('./models/Book');


mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(seed());


const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

async function save(book) {
	await book.save();
}

app.get('/test', (request, response) => {
	console.log('testing');
	response.send('heller werld');
	// save(comic);
	// response.send(comic);
  })

app.listen(PORT, () => console.log(`listening on ${PORT}`));
