import Client from './prefabs/client';
import Boot from './states/boot';
import Game from './states/game';
import Setup from './states/setup';
import Preloader from './states/preloader';
import Gameover from './states/gameover';

const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
game.client = new Client();

game.state.add('boot', new Boot());
game.state.add('game', new Game());
game.state.add('setup', new Setup());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');
