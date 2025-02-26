// server.js
const express = require('express');
const app = express();
const port = 443;

app.use(express.static('public')); // Serve static files from 'public' folder

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
