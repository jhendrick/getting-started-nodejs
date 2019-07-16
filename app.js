var express = require('express');
var app = express();
var cities = {cities:["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

const rook = require('rookout');
rook.start({
    token: 'c7a0d0a38b4af5546152ffdba16c8831c9b52f7f20e2107e3051bd74bd6517ae'
})

var port = process.env.PORT || 8080;
app.listen(port);

module.exports = app;
