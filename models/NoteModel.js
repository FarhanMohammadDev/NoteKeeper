const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: {
    type: String
  }
});


const Note = mongoose.model('Notes', noteSchema);

module.exports = Note;
