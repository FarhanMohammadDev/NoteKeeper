import express from 'express';
import NoteController from '../controllers/NotesController.js';

const router = express.Router();

router.get('/getnotes', NoteController.getAll)

router.post('/postnotes', NoteController.postData)

router.put('/updatenotes/:id', NoteController.updateData)

router.delete('/deletenotes/:id', NoteController.deleteData)

export default router;