// require('dotenv').config()
const path = require('path');
const express = require('express');



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './my-react/build')));

// Handle GET requests to /api route
app.get("/api/v1/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './my-react/build', 'index.html'));
});