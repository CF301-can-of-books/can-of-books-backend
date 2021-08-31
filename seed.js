const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book');

mongoose.connect('mongodb://127.0.0.1:27017');

async function seed() {
	const joeBook = new Book ({
		name: 'Enterprise Integration Patterns',
		description: 'crossing application boundaries',
		status: 'skimmed',
		email: 'contact@joeivans.dev',
	});
	const haustinBook = new Book ({
		name: 'Insurgent',
		description: 'sci-fi',
		status: 'read',
		email: 'haustin.kimbrough@hotmail.com',
	});
	const stefBook = new Book ({
		name: 'Collapse',
		description: 'how societies choose to fail or succeed',
		status: 'read',
		email: 'sriehle@gmail.com',
	});
	const comic = new Book ({ 
		title: 'Preacher', 
		description: 'a preacher, an assassin, and an Irish vampire', 
		status: 'read', 
		email: 'bill@microsoft.com' 
	});
		joeBook.save(function (err) {
			if (err) console.error(err);
			else console.log('saved some books');
	});
		haustinBook.save(function (err) {
			if (err) console.error(err);
			else console.log('saved some books');
	});	
		stefBook.save(function (err) {
			if (err) console.error(err);
			else console.log('saved some books');
	});	
		comic.save(function (err) {
			if (err) console.error(err);
			else console.log('saved some books');
	});
  console.log('seeded database');

  mongoose.disconnect();
}

seed();