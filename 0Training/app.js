// First function to rewrite from <lib>.js

var express = require('express');
const fs = require('fs');
const router = express.Router();
const app = express();

// Home page route.
app.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route.
app.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;

// app.post('/users', function(req, res) {
//   const user = req.body;
//   fs.appendToFile(
//     'users.txt',
//     JSON.stringify({ name: user.name, age: user.age }),
//     (err) => {
//       res.send('successfully registered');
//     }
//   );
// });
app.listen(3000);
