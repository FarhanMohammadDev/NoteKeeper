/* eslint-disable no-undef */
const express = require('express');
const app = express();

app.use(express.json());

// Start the server
const Port = 4000;
app.listen(Port, () => {
  console.log(`Server is running on Port: ${Port}`);
});


