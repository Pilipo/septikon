//TODO: add package.json
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var sept = require('./src/server/septikon').Septikon;
var games = [];

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
   
    socket.on('newPlayer', function(data) {
        var player = null;
        var emptySlotFound = false;
        for (var i in games) {        
            if(games[i].existsPlayerUUID(data.uuid)) {
                player = games[i].getPlayerByUUID(data.uuid);
                
                player.disconnected = false;
            } else {
                if(games[i].playersArray.length <= 1) {
                    games[i].addNewPlayer(socket.id, data.uuid);
                    socket.game = games[i];
                    emptySlotFound = true;        
                    //io.sockets.emit('log', {msg:"new player has joined game with id: " + games[i].uuid});
                    if(games[i].playersArray.length == 2) {
                        console.log('game full. Ready to start!');
                    } else {
                        console.log('ready player 1');
                    }
                }
            }
        
        }
        if(emptySlotFound === false) {
            var game = new sept(io);
            game.addNewPlayer(socket.id);
            socket.game = game;
            games.push(game);
            //io.sockets.emit('log', {msg:"new player has joined game with id: " + game.uuid});
        }
        //console.log('new player joining');
    });

    socket.on('input', function(data) {
        data.socketID = socket.id;
        switch(data.event) {
            case 'tileClicked':
                socket.game.clicked(data);
                break;
                
            case 'diceClicked':
                socket.game.rollDice(data);
                break;
                
            case 'get':
                socket.game.get(data);
                break;
            
            default:
                break;
        }
        //console.log(data);
    });
    
    socket.on('disconnect', function(){
        
    });
});
