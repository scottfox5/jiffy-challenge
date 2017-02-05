var express =  require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var gifs = require('./server/routes/gifs');


app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/gifs', gifs); // link to gifs route

// serve the index page at /
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

// telling web server to listen to whatever is in the environment variable PORT or 5555
var port = process.env.PORT || 5555;
var server = app.listen(port, function () {
  console.log('Listening on port ', server.address().port);
});
