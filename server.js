var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('index');
});

app.post('/formSubmitted', function(request, response) {
    console.log("POST DATA \n\n", request.body);
    request.session.result = request.body;
    response.redirect('/result');
});

app.get('/result', function(request, response) {
    response.render('result', {user: request.session.result});
});

app.post('/goBack', function(request, response) {
    response.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})