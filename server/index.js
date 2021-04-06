const express = require('express');
const path = require('path')
const PORT = 3000;

const app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, '../dist/404.html'));
});

app.use(function(req, res, next) {
  res.status(500).sendFile(path.join(__dirname, '../dist/500.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}!`);
});
