/* eslint-disable no-unused-vars */
const Notes = require('../models/NoteModel')
const DataController = {

  postData: async (req, res) => {
    try{
      const { name } = req.body
      const createNote = await Notes.create({ name})
      res.status(200).send(createNote)
    }catch(err){
      console.log(`Error getting data ${err}`);
    }
  },

  
}

module.exports = DataController;