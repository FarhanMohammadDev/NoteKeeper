/* eslint-disable no-undef */
const express = require('express');
const connexion = require("./config/db")
const app = express();
const noteRouter = require("./routes/NoteRoutes")
app.use(express.json());


app.use('/api', noteRouter)
// Start the server
const Port = 4000;
app.listen(Port, () => {
  console.log(`Server is running on Port: ${Port}`);
});


