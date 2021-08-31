const mongoose = require('mongoose');

// const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	status: String,
	email: {type: String, required: true},
  });

const Book = mongoose.model('Book', bookSchema);//<-- entity model

module.exports = Book;