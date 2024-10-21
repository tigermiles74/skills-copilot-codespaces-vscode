// Create web server
// Run: node comments.js
// Access: http://localhost:3000/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.send(`
    <form method="POST">
      <input type="text" name="comment">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/', function(req, res) {
  res.send('Comment: ' + req.body.comment);
});

app.listen(3000);
console.log('Server is running on http://localhost:3000/');

