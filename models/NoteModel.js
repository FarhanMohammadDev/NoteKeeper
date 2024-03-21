const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userName: {
    type: String
  }
});


const Note = mongoose.model('Notes', noteSchema);

module.exports = Note;
