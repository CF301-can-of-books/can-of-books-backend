const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/Book');

async function seed() {
	const database = Book.find({});
	if(database.length === 0){
		const joeBook = new Book ({
		title: 'Enterprise Integration Patterns',
		description: 'crossing application boundaries',
		status: 'skimmed',
		email: 'contact@joeivans.dev',
	});
	const haustinBook = new Book ({
		title: 'Insurgent',
		description: 'sci-fi',
		status: 'read',
		email: 'haustin.kimbrough@hotmail.com',
	});
	const stefBook = new Book ({
		title: 'Collapse',
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
		await joeBook.save(function (err) {
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
}
}

module.exports = seed;