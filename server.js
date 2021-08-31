'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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

app.get('/test', (request, response) => {
	save (comic);
	response.send(comic);
  })

app.listen(PORT, () => console.log(`listening on ${PORT}`));

mongoose.disconnect();
