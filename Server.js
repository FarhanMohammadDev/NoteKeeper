/* eslint-disable no-undef */
const express = require('express');
const {connectDB } = require('./config/db');
const app = express();

app.use(express.json());
connectDB() 
// Start the server
const Port = 4000;
app.listen(Port, () => {
  console.log(`Server is running on Port: ${Port}`);
});


