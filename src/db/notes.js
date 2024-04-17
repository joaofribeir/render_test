const { ObjectId } = require('mongodb');
const client = require('./client');

async function findNotes() {
	try {
		const db = client.db('grupo_3_notesApp');
		const notes = db.collection('notes');
		const count = await notes.countDocuments();
		const results = await notes.find().toArray();

		const newResult = { count, results };

		return newResult;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function findNoteById(id = '') {
	const query = {
		_id: new ObjectId(id),
	};

	try {
		const db = client.db('grupo_3_notesApp');
		const notes = db.collection('notes');
		const result = await notes.findOne(query);

		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function postNote(note) {
	try {
		const db = client.db('grupo_3_notesApp');
		const notes = db.collection('notes');
		const result = await notes.insertOne({ text: note.text, pinned: note.pinned });

		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function editNote(newNote, id = '') {
	try {
		const db = client.db('grupo_3_notesApp');
		const notes = db.collection('notes');
		const result = await notes.updateOne(
			{ _id: new ObjectId(id) },
			{
				$set: {
					text: newNote.text,
					pinned: newNote.pinned,
				},
			},
			{ upsert: true },
		);

		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function removeNoteById(id = '') {
	const query = {
		_id: new ObjectId(id),
	};

	try {
		const db = client.db('grupo_3_notesApp');
		const notes = db.collection('notes');
		const result = await notes.deleteOne(query);
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

async function removeAllNotes() {
	try {
		const db = client.db('grupo_3_notesApp');
		const notes = db.collection('notes');

		const result = await notes.deleteMany({});
		// posso saber qual o total de ficheiros apagados?
		return result;
	} catch (error) {
		console.log(error);
		throw new Error('Database error');
	}
}

module.exports = {
	findNotes,
	findNoteById,
	postNote,
	editNote,
	removeNoteById,
	removeAllNotes,
};
