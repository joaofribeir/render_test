require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notesRouter = require('./routes/notesRouter');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/notes', notesRouter);

app.listen(port, function () {
	console.log(`Listening on ${port}`);
});
