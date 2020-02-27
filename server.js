var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

var router = require("./api/routes/router.js");

app.get('/', function(req, res) {
    res.send('Hello World!');
});

router.routeApp(app);



app.use(function(req, res) {
    res.status(404);
    res.send(req.originalUrl + ' not found');
});