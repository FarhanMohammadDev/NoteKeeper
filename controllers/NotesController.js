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

  getAll: async (req, res) => {
    try{
      const fetchedData = await Notes.find()
      res.status(200).json(fetchedData)
    }cacth(err){
      console.log(err);
    }
  }

  
}

module.exports = DataController;