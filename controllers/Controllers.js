/* eslint-disable no-unused-vars */
const Notes = require('../models/NoteModel')
const DataController = {

  getData: async (req, res) => {
    try{
      const fetchedData = await Notes.find()
      res.status(200).send(fetchedData)
    }catch(err){
      console.log(`Error getting data ${err}`);
    }
  },

  
}

module.exports = DataController;