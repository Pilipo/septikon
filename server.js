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
app.use('/src/client',express.static(__dirname + '/src/client'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 3000, function(){
    console.log('Listening on ' + server.address().port);
});

io.on('connection',function(socket){

    let player = null;
    console.log("New Connection: " + socket.id);
    console.log("here are the games: ", games);
    this.emit('request', {details:{type:'uuid'}}, socket.id);

    socket.on('newPlayer', function(data){
        console.log("New Player. Here's the data: ");
        console.log(data);

        if (games.length === 0) {
            console.log("no games found. Creating one and adding first player.");
            let player = new Player(socket.id, 1, data.uuid);
            let game = new sept(io);
            game.addPlayer(player);
            socket.game = game;
            games.push(game);        
        } else {
            for (let i in games) {
                let playerSearch = games[i].getPlayerByUUID(data.uuid);
                if (playerSearch !== null) {
                    console.log("Player found in existing game. Refreshing the client.");
                    socket.game = games[i];
                    playerSearch.socketID = socket.id;
                    socket.game.addPlayer(playerSearch);
                    // TODO: refresh client game data (resources, tokens, etc)
                } else if (games[i].playersArray.length === 1) {
                    console.log("New player that was not found in an existing game. Adding player now.");
                    player = new Player(socket.id, 2, data.uuid);
                    games[i].addPlayer(player);
                    socket.game = games[i];
                }
            }
        }
    });

    socket.on('input', function(data) {
        data.socketID = socket.id;
        console.log(data);
        switch(data.event) {
            case 'tileClicked':
                socket.game.processClick(data);
                // if (socket.game.gameStateEnum.GAME === socket.game.gameState) {
                //     let player = socket.game.getPlayerBySocketID(socket.id);
                //     console.log("processing tile");
                //     let procResult = socket.game.processTileActivation(socket.game.getTile(data.x, data.y), player);
                //     console.log("Process result: " + procResult);
                //     console.log(player.getResourceCount());
                // }
                // socket.game.clicked(data);
                break;
                
            case 'diceClicked':
                socket.game.processClick(data);
                break;

            case 'confirmClicked':
                socket.game.processClick(data);
                break;
                
            case 'get':
                socket.game.get(data);
                break;
            
            default:
                break;
        }
    });
    
    socket.on('disconnect', function(data){
        console.log(socket.id + " disconnected.");
    });
});
