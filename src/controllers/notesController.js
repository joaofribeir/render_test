const notesDB = require('../db/notes');

async function getNotes(req, res) {
	try {
		const result = await notesDB.findNotes();

		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function getNoteById(req, res) {
	const { id } = req.params;
	try {
		const result = await notesDB.findNoteById(id);
		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}
async function postNote(req, res) {
	const note = req.body;
	try {
		const result = await notesDB.postNote(note);

		const newNote = await notesDB.findNoteById(result.insertedId);
		res.json(newNote);
	} catch (error) {
		res.status(500).send(error.message);
	}
}
async function putNoteById(req, res) {
	const { id } = req.params;
	const newNote = req.body;
	try {
		const result = await notesDB.editNote(newNote, id);

		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function deleteNoteById(req, res) {
	const { id } = req.params;

	try {
		const result = await notesDB.removeNoteById(id);

		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function deleteAllNotes(req, res) {
	try {
		const result = await notesDB.removeAllNotes();
		res.json(result);
	} catch (error) {
		res.status(500).send(error.message);
	}
}

module.exports = {
	getNotes,
	getNoteById,
	postNote,
	putNoteById,
	deleteNoteById,
	deleteAllNotes,
};
