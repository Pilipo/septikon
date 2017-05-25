import Client from './prefabs/client';
import Boot from './states/boot';
import Game from './states/game';
import Setup from './states/setup';
import Preloader from './states/preloader';
import Gameover from './states/gameover';
import Septikon from './prefabs/septikon';

if(typeof(Storage) !== "undefined") {
    if(localStorage.getItem('septUUID') != null) {
        const uuid = localStorage.getItem('septUUID');
    } else {
        const uuid = require('uuid/v4')();
        localStorage.setItem('septUUID', uuid);
    }
} else {
    console.error("Local Storage is required!");
}

// const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
const game = new Phaser.Game("100", "100", Phaser.AUTO);
game.septikon = new Septikon(game);
game.client = new Client(game.septikon);

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('setup', new Setup());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');
