var express = require('express');
var app = express();
const PORT = process.env.port || 3000;
app.use(express.static(__dirname + '/build'));

app.listen(PORT, function() {
  console.log('up on port: 3000');
});
