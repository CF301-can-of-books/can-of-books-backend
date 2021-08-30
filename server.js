'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

const bookSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: String,
	email: String,
  });

// const Book = mongoose.model('Book', bookSchema);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
