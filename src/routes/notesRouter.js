const router = require('express').Router();
const notesController = require('../controllers/notesController');

router.get('/', notesController.getNotes);
router.get('/:id', notesController.getNoteById);
router.post('/', notesController.postNote);
router.put('/:id', notesController.putNoteById);
router.delete('/:id', notesController.deleteNoteById);
router.delete('/', notesController.deleteAllNotes);

module.exports = router;
