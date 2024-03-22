const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: {
    type: String
  }
});


const Note = mongoose.model('Notes', noteSchema);

// module.exports = Note;

//  function validate Create Noter
function validateCreateNoter(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().email().min(5).max(100).required(),
  });
  return schema.validate(obj);
}

//function validate Update Noter

function validateUpdateNote(obj) {
  const schema = Joi.object({
    name: Joi.string().trim().email().min(5).max(100).required(),
  });
  return schema.validate(obj);
}
module.exports = {
  Note,
  validateCreateNoter,
  validateUpdateNote
};
