const express = require("express")
const NoteController = require('../controllers/NotesController')
const router = express.Router();

router.get('/getnotes', NoteController.getAll)

router.post('/postnotes', NoteController.postData)

router.put('/updatenotes/:id', NoteController.updateData)

router.delete('/deletenotes/:id', NoteController.deleteData)

module.exports = router;