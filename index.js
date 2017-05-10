//TODO: add package.json
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var sept = require('./src/server/septikon').Septikon;
sept = new sept(io);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/src',express.static(__dirname + '/src'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 3000, function(){
    console.log('Listening on '+server.address().port);
});

io.on('connection',function(socket){

    //onsole.log('connection');

    socket.on('test',function(){
        console.log('test received');
    });
    
    socket.on('newPlayer', function() {
        var player = sept.addNewPlayer(socket.id);
        //console.log('new player joining');
        socket.emit('log', {msg:"new player has joined"});
    });
    
    socket.on('input', function(data) {
        switch(data.event) {
            case 'tileClicked':
                sept.clicked(data);
                break;
            
            default:
                break;
        }
        console.log(data);
    });
    
});
