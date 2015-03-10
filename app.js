var express = require('express');
var app = express();
var routes = require('./routes');
app.set ('view engine', 'ejs');


app.locals.pagetitle = "Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.index);

app.get('*', function(req,res) {
      
    res.send('bad route'); 
});


var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});