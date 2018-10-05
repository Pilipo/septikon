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
    console.log("New Connection: " + socket.id);

    socket.on('newPlayer', function(data){
        console.log("New Player. Here's the data: ");
        console.log(data);

        if (games.length > 0) {
            for (var i in games) {
                player = games[i].getPlayerByUUID(data.uuid);
                if (player !== null) {
                    player.disconnected = false;
                    socket.game = games[i];
                    player.socketID = socket.id;
                    console.log(player.personnelArray);
                    return;
                } 
            }
        } 

        if (games.length === 0) {
            player = new Player(socket.id, 1, data.uuid);
            var game = new sept(io);
            game.addPlayer(player);
            socket.game = game;
            games.push(game);
        } else if (games[0].playersArray.length === 1) {
            player = new Player(socket.id, 2, data.uuid);
            game = games[0];
            game.addPlayer(player);
            socket.game = game;
        } else {
            console.log("no game slots available.");
            player = new Player(socket.id, 1, data.uuid);
            var game = new sept(io);
            socket.game = game;
            game.serverFull(player);
            //TODO: Cleanly deal with slots limit.
        }

        console.log("Games UUID: ");
        console.log(games[games.length-1].uuid);
    });

    socket.on('input', function(data) {
        data.socketID = socket.id;
        console.log(data);
        switch(data.event) {
            case 'tileClicked':
                socket.game.processClick(data);
                // socket.game.clicked(data);
                break;
                
            case 'diceClicked':
                socket.game.processClick(data);
                // socket.game.rollDice(data);
                break;

            case 'confirmClicked':
            // case 'go':
                socket.game.processClick(data);
                // socket.game.go(data);
                break;
                
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
        console.log(socket.id + " disconnected.");
    });
});
