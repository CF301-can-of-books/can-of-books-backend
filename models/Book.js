const mongoose = require('mongoose');

// const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
	title: String,
	description: String,
	status: String,
	email: String,
  });

const Book = mongoose.model('Book', bookSchema);//<-- entity model

module.exports = Book;