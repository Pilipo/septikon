//TODO: add package.json
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var sept = require('./src/server/septikon').Septikon;
var Player = require('./src/server/player').Player;

var games = [];

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));
app.use('/src',express.static(__dirname + '/src'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 3000, function(){
    console.log('Listening on ' + server.address().port);
});

io.on('connection',function(socket){
    var player = null;

    socket.on('newPlayer', function(data){
        var emplySlotFound = false;

        if (games.length) {
            for (var i in games) {
                player = games[i].getPlayerByUUID(data.uuid);
                if (player !== null) {
                    player.disconnected = false;
                    socket.game = games[i];
                    return;
                } else if (games[i].getPlayerCount() == 1) {
                    player = new Player(socket.id, 2, data.uuid);
                    games[i].addPlayer(player);
                    socket.game = games[i];
                    emptySlotFound = true;
                    return;
                }
            }
        } 
        if (games.length == 0 || emplySlotFound === false) {
            player = new Player(socket.id, 1, data.uuid);
            var game = new sept(io);
            game.addPlayer(player);
            socket.game = game;
            games.push(game);
        }
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

            case 'go':
                socket.game.go(data);
                
            case 'get':
                socket.game.get(data);
                break;

            case 'setPlayerState':
                socket.game.setPlayerState(data);
                break;
            
            default:
                break;
        }
    });
    
    socket.on('disconnect', function(data){
        if (player === null) {
            return;
        }
        player.disconnected = true;
        setTimeout(function(){
            if (player.disconnected) {
                //player.delete();
                console.log('player is gone. Delete him and abandon his game. Apologize to opponent (if any). Offer opponent a new match?');
            } else {
                console.log('player saved by the bell. Send a package that repopulates the board. This could be tricky... ;)');
            }
        }, 10000);

    });
});
