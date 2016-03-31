var app = require('express')();
var http = require('http').Server(app);

// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
// });

app.get('/callback', function(req, res){
    console.log(req, res);
});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


http.listen(3001, function(){
    console.log('listening on *:3001');
});