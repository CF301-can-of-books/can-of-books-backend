const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/Book');

async function seed() {
  const db = await Book.find({});

  console.log(`existing entity count in db: ${db.length}`);

  if (db === undefined || db.length < 1) {
    console.log('start seed');

    await saveBook(new Book({
      title: 'Enterprise Integration Patterns',
      description: 'crossing application boundaries',
      status: 'skimmed',
      email: 'contact@joeivans.dev',
    }));
    await saveBook(new Book({
      title: 'Insurgent',
      description: 'sci-fi',
      status: 'read',
      email: 'haustin.kimbrough@hotmail.com',
    }));
    await saveBook(new Book({
      title: 'Collapse',
      description: 'how societies choose to fail or succeed',
      status: 'read',
      email: 'sriehle@gmail.com',
    }));
    await saveBook(new Book({
      title: 'Preacher',
      description: 'a preacher, an assassin, and an Irish vampire',
      status: 'read',
      email: 'bill@microsoft.com'
    }));

    console.log('seeded database');
  }
}

async function saveBook(book) {
  await book.save(function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('saved some books');
    }
  });
}

module.exports = seed;
