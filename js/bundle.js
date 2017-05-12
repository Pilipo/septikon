(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],2:[function(require,module,exports){
(function (global){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":1,"./lib/rng":2}],4:[function(require,module,exports){
'use strict';

var _client = require('./prefabs/client');

var _client2 = _interopRequireDefault(_client);

var _boot = require('./states/boot');

var _boot2 = _interopRequireDefault(_boot);

var _game = require('./states/game');

var _game2 = _interopRequireDefault(_game);

var _setup = require('./states/setup');

var _setup2 = _interopRequireDefault(_setup);

var _preloader = require('./states/preloader');

var _preloader2 = _interopRequireDefault(_preloader);

var _gameover = require('./states/gameover');

var _gameover2 = _interopRequireDefault(_gameover);

var _septikon = require('./prefabs/septikon');

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof Storage !== "undefined") {
    if (localStorage.getItem('septUUID') != null) {
        var uuid = localStorage.getItem('septUUID');
    } else {
        var _uuid = require('uuid/v4')();
        localStorage.setItem('septUUID', _uuid);
    }
} else {
    console.error("Local Storage is required!");
}

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
game.septikon = new _septikon2.default(game);
game.client = new _client2.default(game.septikon);

game.state.add('boot', new _boot2.default());
game.state.add('game', new _game2.default());
game.state.add('setup', new _setup2.default());
game.state.add('preloader', new _preloader2.default());
game.state.add('gameover', new _gameover2.default());

game.state.start('boot');

},{"./prefabs/client":6,"./prefabs/septikon":14,"./states/boot":21,"./states/game":22,"./states/gameover":23,"./states/preloader":24,"./states/setup":25,"uuid/v4":3}],5:[function(require,module,exports){
'use strict';

var gameModal = gameModal || {};

gameModal = function gameModal(game) {

	var _this = this;
	game.modals = {};

	/**
  * [hideModal description]
  * @param  {[type]} type [description]
  * @return {[type]}      [description]
  */
	this.hideModal = function (type) {
		window.console.log(type);
		game.modals[type].visible = false;
	};

	return {
		createModal: function createModal(options) {
			var type = options.type || ''; // must be unique
			var includeBackground = options.includeBackground; // maybe not optional
			var backgroundColor = options.backgroundColor || "0x000000";
			var backgroundOpacity = options.backgroundOpacity === undefined ? 0.7 : options.backgroundOpacity;
			var modalCloseOnInput = options.modalCloseOnInput || false;
			var modalBackgroundCallback = options.modalBackgroundCallback || false;
			var vCenter = options.vCenter || true;
			var hCenter = options.hCenter || true;
			var itemsArr = options.itemsArr || [];
			var fixedToCamera = options.fixedToCamera || false;

			var modal;
			var modalGroup = game.add.group();
			if (fixedToCamera === true) {
				modalGroup.fixedToCamera = true;
				modalGroup.cameraOffset.x = 0;
				modalGroup.cameraOffset.y = 0;
			}

			if (includeBackground === true) {
				modal = game.add.graphics(game.width, game.height);
				modal.beginFill(backgroundColor, backgroundOpacity);
				modal.x = 0;
				modal.y = 0;

				modal.drawRect(0, 0, game.width, game.height);

				if (modalCloseOnInput === true) {

					var innerModal = game.add.sprite(0, 0);
					innerModal.inputEnabled = true;
					innerModal.width = game.width;
					innerModal.height = game.height;
					innerModal.type = type;
					innerModal.input.priorityID = 0;
					innerModal.events.onInputDown.add(function (e, pointer) {
						this.hideModal(e.type);
					}, _this, 2);

					modalGroup.add(innerModal);
				} else {

					modalBackgroundCallback = true;
				}
			}

			if (modalBackgroundCallback) {
				var innerModal = game.add.sprite(0, 0);
				innerModal.inputEnabled = true;
				innerModal.width = game.width;
				innerModal.height = game.height;
				innerModal.type = type;
				innerModal.input.priorityID = 0;

				modalGroup.add(innerModal);
			}

			if (includeBackground) {
				modalGroup.add(modal);
			}

			var modalLabel;
			for (var i = 0; i < itemsArr.length; i += 1) {
				var item = itemsArr[i];
				var itemType = item.type || 'text';
				var itemColor = item.color || 0x000000;
				var itemFontfamily = item.fontFamily || 'Arial';
				var itemFontSize = item.fontSize || 32;
				var itemStroke = item.stroke || '0x000000';
				var itemStrokeThickness = item.strokeThickness || 0;
				var itemAlign = item.align || 'center';
				var offsetX = item.offsetX || 0;
				var offsetY = item.offsetY || 0;
				var contentScale = item.contentScale || 1;
				var content = item.content || "";
				var centerX = game.width / 2;
				var centerY = game.height / 2;
				var callback = item.callback || false;
				var textAlign = item.textAlign || "left";
				var atlasParent = item.atlasParent || "";
				var buttonHover = item.buttonHover || content;
				var buttonActive = item.buttonActive || content;
				var graphicColor = item.graphicColor || 0xffffff;
				var graphicOpacity = item.graphicOpacity || 1;
				var graphicW = item.graphicWidth || 200;
				var graphicH = item.graphicHeight || 200;
				var graphicRadius = item.graphicRadius || 0;
				var lockPosition = item.lockPosition || false;

				var itemAnchor = item.anchor || { x: 0, y: 0 };
				var itemAngle = item.angle || 0;
				var itemX = item.x || 0;
				var itemY = item.y || 0;
				var imageFrame = item.frame || null;
				var tileSpriteWidth = item.tileSpriteWidth || game.width;
				var tileSpriteHeight = item.tileSpriteHeight || game.height;

				modalLabel = null;

				if (itemType === "text" || itemType === "bitmapText") {

					if (itemType === "text") {
						modalLabel = game.add.text(0, 0, content, {
							font: itemFontSize + 'px ' + itemFontfamily,
							fill: "#" + String(itemColor).replace("0x", ""),
							stroke: "#" + String(itemStroke).replace("0x", ""),
							strokeThickness: itemStrokeThickness,
							align: itemAlign
						});
						modalLabel.contentType = 'text';
						modalLabel.update();
						modalLabel.x = game.width / 2 - modalLabel.width / 2 + offsetX;
						modalLabel.y = game.height / 2 - modalLabel.height / 2 + offsetY;
					} else {
						modalLabel = game.add.bitmapText(0, 0, itemFontfamily, String(content), itemFontSize);
						modalLabel.contentType = 'bitmapText';
						modalLabel.align = textAlign;
						modalLabel.updateText();
						modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
						modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
					}
				} else if (itemType === "image") {
					modalLabel = game.add.image(0, 0, content);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.contentType = 'image';
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				} else if (itemType === "tileSprite") {
					modalLabel = game.add.tileSprite(itemX, itemY, tileSpriteWidth, tileSpriteHeight, content, imageFrame);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.anchor.setTo(itemAnchor.x, itemAnchor.y);
					modalLabel.angle = itemAngle;
					modalLabel.contentType = 'tileSprite';
				} else if (itemType === "sprite") {
					modalLabel = game.add.sprite(0, 0, atlasParent, content);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.contentType = 'sprite';
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				} else if (itemType === "button") {
					modalLabel = game.add.button(0, 0, atlasParent, callback, this, buttonHover, content, buttonActive, content);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.contentType = 'button';
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				} else if (itemType === "graphics") {
					modalLabel = game.add.graphics(graphicW, graphicH);
					modalLabel.beginFill(graphicColor, graphicOpacity);
					if (graphicRadius <= 0) {
						modalLabel.drawRect(0, 0, graphicW, graphicH);
					} else {
						modalLabel.drawRoundedRect(0, 0, graphicW, graphicH, graphicRadius);
					}
					modalLabel.endFill();
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				}

				modalLabel["_offsetX"] = 0;
				modalLabel["_offsetY"] = 0;
				modalLabel["lockPosition"] = lockPosition;
				modalLabel._offsetX = offsetX;
				modalLabel._offsetY = offsetY;

				if (callback !== false && itemType !== "button") {
					modalLabel.inputEnabled = true;
					modalLabel.pixelPerfectClick = true;
					modalLabel.priorityID = 10;
					modalLabel.events.onInputDown.add(callback, modalLabel);
				}

				if (itemType !== "bitmapText" && itemType !== "graphics") {
					modalLabel.bringToTop();
					modalGroup.add(modalLabel);
					modalLabel.bringToTop();
					modalGroup.bringToTop(modalLabel);
				} else {
					modalGroup.add(modalLabel);
					modalGroup.bringToTop(modalLabel);
				}
			}

			modalGroup.visible = false;
			game.modals[type] = modalGroup;
		},
		updateModalValue: function updateModalValue(value, type, index, id) {
			var item;
			if (index !== undefined && index !== null) {
				item = game.modals[type].getChildAt(index);
			} else if (id !== undefined && id !== null) {}

			if (item.contentType === "text") {
				item.text = value;
				item.update();
				if (item.lockPosition === true) {} else {
					item.x = game.width / 2 - item.width / 2 + item._offsetX;
					item.y = game.height / 2 - item.height / 2 + item._offsetY;
				}
			} else if (item.contentType === "bitmapText") {
				item.text = value;
				item.updateText();
				if (item.lockPosition === true) {} else {
					item.x = game.width / 2 - item.width / 2 + item._offsetX;
					item.y = game.height / 2 - item.height / 2 + item._offsetY;
				}
			} else if (item.contentType === "image") {
				item.loadTexture(value);
			}
		},
		getModalItem: function getModalItem(type, index) {
			return game.modals[type].getChildAt(index);
		},
		showModal: function showModal(type) {
			game.world.bringToTop(game.modals[type]);
			game.modals[type].visible = true;
			// you can add animation here
		},
		hideModal: function hideModal(type) {
			game.modals[type].visible = false;
			// you can add animation here
		},
		destroyModal: function destroyModal(type) {
			game.modals[type].destroy();
			delete game.modals[type];
		}
	};
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
    function Client(septikon) {
        _classCallCheck(this, Client);

        this.socket = io.connect();
        this.septikon = this.socket.septikon = septikon;
        this.socket.on('log', function (data) {
            console.log('LOG: ');
            console.log(data);
        });

        this.socket.on('action', function (data) {
            console.log('ACTION: ');
            console.log(data);
            if (typeof this.septikon[data.callback] === "function") {
                this.septikon[data.callback](data.details);
            } else {
                console.log("ERROR: no method found called septikon." + data.callback);
            }
        });
    }

    _createClass(Client, [{
        key: 'askNewPlayer',
        value: function askNewPlayer() {
            console.log(localStorage.getItem('septUUID'));
            this.socket.emit('newPlayer', { uuid: localStorage.getItem('septUUID') });
        }
    }, {
        key: 'sendInput',
        value: function sendInput(payload) {
            console.log('sending input');
            this.socket.emit('input', payload);
        }
    }]);

    return Client;
}();

exports.default = Client;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

var Clone = function (_Phaser$Sprite) {
  _inherits(Clone, _Phaser$Sprite);

  //initialization code in the constructor
  function Clone(game, x, y, frame, team) {
    _classCallCheck(this, Clone);

    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this, game, x, y, 'clone', frame));

    // SWITCH TO DIFFERENT PERSONNEL TYPES
    // This will be a flexible personnel factory

    _this.team = team;

    //setup physics properties
    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    _this.body.collideWorldBounds = true;

    //set click event
    //this.inputEnabled = true;
    //this.events.onInputDown.add(this.clicked, this);

    //setup audio
    _this.ding = _this.game.add.audio('ding');

    //set size
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this clone occupies)
    _this.angle = 90;

    // add animations from spritesheets
    _this.animations.add('idling', null, 5, true);
    _this.animations.play('idling');

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;

    return _this;
  }

  _createClass(Clone, [{
    key: 'remove',
    value: function remove() {
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
      this.destroy();
    }
  }, {
    key: 'highlightOn',
    value: function highlightOn() {
      this.tint = 0xFF5500;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 1;
    }
  }, {
    key: 'highlightOff',
    value: function highlightOff() {
      this.tint = 0xffffff;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 0;
    }
  }, {
    key: 'getLegalMoves',
    value: function getLegalMoves() {
      this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
      var currentLegalMoves = this.game.septikon.getLegalMoves(this.game.global.lastDiceRoll, this.currentTileCoordinates);
      var legalTilesArray = [];

      for (var tile in currentLegalMoves) {
        legalTilesArray.push(this.game.septikon.tileArray[currentLegalMoves[tile].x][currentLegalMoves[tile].y]);
        //legalTilesArray[legalTilesArray.length-1].alpha = 0.5;
        //legalTilesArray[legalTilesArray.length-1].legalFor = this;
      }

      return legalTilesArray;
    }
  }, {
    key: 'move',
    value: function move(coordinates) {

      // Clear "legalFor"
      for (var tile in this.legalTilesArray) {
        this.legalTilesArray[tile].alpha = 0;
        delete this.legalTilesArray[tile].legalFor;
      }

      // Move to new home
      // Need to add a check for armed opponents (biodrones/espionaged clones/clones in enemy base, etc.)
      var points = this.game.septikon.tileToPixels(coordinates.x, coordinates.y);
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
      var distance = Math.abs(this.y - points.y + this.x - points.x).toFixed(1);

      // Update the personnel coordinate property
      this.currentTileCoordinates = coordinates;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;

      // Wait for animation to complete, then process tile trigger
      var tween = this.game.add.tween(this).to({ x: points.x, y: points.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
      tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);

      // Clear this.currentLegalMoves
      delete this.legalTilesArray;
      delete this.currentLegalMoves;
    }
  }]);

  return Clone;
}(Phaser.Sprite);

exports.default = Clone;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
var Crosshairs = function (_Phaser$Sprite) {
  _inherits(Crosshairs, _Phaser$Sprite);

  //initialization code in the constructor
  function Crosshairs(game, x, y, frame) {
    _classCallCheck(this, Crosshairs);

    //set size
    var _this = _possibleConstructorReturn(this, (Crosshairs.__proto__ || Object.getPrototypeOf(Crosshairs)).call(this, game, x, y, 'crosshairs', frame));

    _this.width = 35;
    _this.scale.y = Math.abs(_this.scale.x);

    _this.anchor.setTo(0.5, 0.5);
    return _this;
  }

  _createClass(Crosshairs, [{
    key: 'update',
    value: function update() {
      this.x = this.game.input.mousePointer.x;
      this.y = this.game.input.mousePointer.y;
    }
  }]);

  return Crosshairs;
}(Phaser.Sprite);

exports.default = Crosshairs;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
var Dice = function (_Phaser$Sprite) {
  _inherits(Dice, _Phaser$Sprite);

  //initialization code in the constructor
  function Dice(game, x, y, frame) {
    _classCallCheck(this, Dice);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Dice.__proto__ || Object.getPrototypeOf(Dice)).call(this, game, x, y, 'dice', frame));

    _this.anchor.setTo(0.5, 0.5);
    _this.game.physics.arcade.enableBody(_this);
    _this.body.collideWorldBounds = true;

    //set click event
    _this.inputEnabled = true;
    _this.events.onInputDown.add(_this.clicked, _this);

    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);

    _this.animations.add('idling', null, 5, true);
    _this.animations.play('idling');

    return _this;
  }

  _createClass(Dice, [{
    key: 'clicked',
    value: function clicked() {
      this.game.client.sendInput({ event: 'diceClicked' });
      return;
    }
  }]);

  return Dice;
}(Phaser.Sprite);

exports.default = Dice;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master =

//initialization code in the constructor
function Master() {
  _classCallCheck(this, Master);
};

exports.default = Master;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordnance =

//initialization code in the constructor
function Ordnance() {
  _classCallCheck(this, Ordnance);
};

exports.default = Ordnance;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Personnel = function (_Phaser$Sprite) {
  _inherits(Personnel, _Phaser$Sprite);

  //initialization code in the constructor
  function Personnel(game, x, y, frame) {
    _classCallCheck(this, Personnel);

    return _possibleConstructorReturn(this, (Personnel.__proto__ || Object.getPrototypeOf(Personnel)).call(this, game, x, y, 'clone', frame));
  }

  return Personnel;
}(Phaser.Sprite);

exports.default = Personnel;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = function () {

  //initialization code in the constructor
  function Resources() {
    _classCallCheck(this, Resources);

    this.resourceEnum = Object.freeze({
      OXYGEN: 0,
      ROCKET: 1,
      METAL: 2,
      ENERGY: 3,
      BIOMASS: 4,
      BIODRONE: 5,
      URANIUM: 6
    });
    this.resources = {};
    for (var type in this.resourceEnum) {
      this.resources[this.resourceEnum[type]] = 5;
    };
  }

  _createClass(Resources, [{
    key: "check",
    value: function check(type, count) {
      if (this.resources[this.resourceEnum[type]] > count) return true;

      return false;
    }
  }, {
    key: "getCount",
    value: function getCount(type) {
      return this.resources[type];
    }
  }, {
    key: "add",
    value: function add(type, count) {}
  }, {
    key: "remove",
    value: function remove(type, count) {
      this.resources[type] -= count;
    }
  }]);

  return Resources;
}();

exports.default = Resources;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _master = require('../prefabs/master');

var _master2 = _interopRequireDefault(_master);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Team from '../prefabs/team';

var Septikon = function () {

    //initialization code in the constructor
    function Septikon(game) {
        _classCallCheck(this, Septikon);

        this.game = game;

        this.shownTiles = [];
        this.tileArray = [];
        this.bgRatio = 0;
        this.worldRatio = 0;
        this.turnStateEnum = Object.freeze({
            START: 0,
            SELECT_CLONE: 1,
            MOVE_CLONE: 2,
            SELECT_GUNNER: 3,
            SELECT_ACTION_ORDER: 4,
            ACTION: 5,
            END: 6
        });
        this.directionEnum = Object.freeze({
            NORTH: 1,
            EAST: 2,
            SOUTH: 4,
            WEST: 8
        });
        this.turnState = 0;
    }

    _createClass(Septikon, [{
        key: 'diceRolled',
        value: function diceRolled(details) {
            this.game.global.lastDiceRoll = details.value;
        }
    }, {
        key: 'addClone',
        value: function addClone(details) {
            console.log(details);
        }
    }, {
        key: 'pixelsToTile',
        value: function pixelsToTile(x, y) {
            var xTile = 0;
            var yTile = 0;

            for (var col in this.tileArray) {
                for (var row in this.tileArray[col]) {
                    var obj = this.tileArray[col][row];
                    if (x > obj.x && x < obj.x + obj.width) xTile = parseInt(col);

                    if (y > obj.y && y < obj.y + obj.height) yTile = parseInt(row);
                }
            }
            return { x: xTile, y: yTile };
        }
    }, {
        key: 'tileToPixels',
        value: function tileToPixels(x, y) {
            var tileObj = this.tileArray[x][y];
            var tileX = tileObj.x + tileObj.width / 2;
            var tileY = tileObj.y + tileObj.height / 2;
            return { x: tileX, y: tileY };
        }
    }, {
        key: 'tileClicked',
        value: function tileClicked(obj) {
            this.game.client.sendInput({ event: 'tileClicked', x: parseInt(obj.tileX), y: parseInt(obj.tileY) });
            return;
        }
    }, {
        key: 'triggerTile',
        value: function triggerTile(caller) {

            var tile = this.tileArray[caller.currentTileCoordinates.x][caller.currentTileCoordinates.y];
            caller.isGunner = false;
            var props = tile.tileProperties;

            switch (tile.tileType) {
                case 'surface':
                    caller.isGunner = true;
                    this.finishTurn();
                    break;

                case 'battle':
                    if (typeof props.resourceCostCount != 'undefined') {
                        // CAN THIS TEAM AFFORD THE COST?
                        // EXCHANGE RESOURCES // PAY UP!!
                        // Get the available resource count and prepare to offer "gunner" clones for selection.
                        //console.log("Is this resource available?");
                        //console.log(this);

                        // Types of battle tiles with a FIRE action:
                        //  - Satellite: gunner:true, projectile: true
                        //  - Thermite: gunner:true, projectile: false
                        //  - Shield: gunner:true, projectile: true
                        //  - Biodrone: gunner:true, projectile: true
                        //  - Laser: gunner:true, projectile: false
                        //  - Rocket: gunner:true, projectile: true
                        console.log(tile.tileName);
                        if (this.localTeam.offerGunners() == false && (tile.tileName == "satellite" || tile.tileName == "thermite" || tile.tileName == "shield" || tile.tileName == "biodrone" || tile.tileName == "laser" || tile.tileName == "rocket")) {
                            this.finishTurn();
                        }
                        //console.log(this.localTeam.checkRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount));
                        if (this.localTeam.checkRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount) == true) {
                            this.localTeam.removeRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount);
                            //console.log("New count of " + props.resourceCostType + " is " + this.localTeam.getRecCount(this.localTeam.recEnum[props.resourceCostType.toUpperCase()]));
                            if (this.localTeam.offerGunners()) {
                                this.pendingAction = { props: props, caller: caller };
                            }
                        }
                    }

                    // OFFER GUNNERS AND AWAIT SELECTION (remember the cost per gunner)
                    // This will require an array of clones associated with the team. 
                    // Iterate the array looking for 'isGunner == true'
                    // Highlight all "gunner" clones
                    // Allow selection of only as many as team can afford


                    // This will call the method defined in JSON. In this case firing a weapon.
                    // Iterate the selected gunners and call the method.

                    break;

                case 'armory':
                    //SET TEAM WEAPONS!
                    // This requires a Team property for storing a weapons (arms?) array.
                    this.finishTurn();
                    break;

                case 'production':
                    // NOTE: These are required if resources allow
                    if (typeof props.resourceCostCount != 'undefined') {
                        // CAN THIS TEAM AFFORD THE COST?
                        // Requires Team object to check for resources

                        // Get cost count
                        // Get cost type

                        // Get yield count
                        // Get yield type

                        // Execute transaction
                        this.finishTurn();
                    }
                    break;

                case 'lock':
                    // NOTHING HERE (maybe an update feature??)
                    this.finishTurn();
                    break;

                default:
                    break;
            };

            // COMMIT ACTION
        }
    }, {
        key: 'fire',
        value: function fire(weaponType, caller) {
            console.log("Firing the " + weaponType);

            switch (weaponType) {
                case 'laser':
                //for (var i in this.localTeam.selectedGunners) {
                //    this.shootTile(this.localTeam.selectedGunners[i].currentTileCoordinates);
                //}
                //break;

                case 'satellite':
                // PLACE A SATELLITE
                // break;

                case 'thermite':
                //this.shootTile(caller.currentTileCoordinates, true);
                //break;

                case 'shield':
                //break;

                case 'biodrone':
                //break;

                case 'rocket':
                //break;

                default:
                    for (var i in this.localTeam.selectedGunners) {
                        this.shootTile(this.localTeam.selectedGunners[i].currentTileCoordinates);
                    }
                    break;
            };

            this.localTeam.clearGunners();
            //this.game.septikon.turnState = this.game.septikon.turnStateEnum.START;
            this.finishTurn();
        }
    }, {
        key: 'repair',
        value: function repair(count) {
            console.log("repair " + count + " of the things!");
        }
    }, {
        key: 'espionage',
        value: function espionage() {
            console.log("Gimme yer clone!!");
        }
    }, {
        key: 'takeover',
        value: function takeover() {
            console.log("Gimme yer satellite!!");
        }
    }, {
        key: 'counter',
        value: function counter() {
            console.log("Gimme back my clone!!");
        }
    }, {
        key: 'killBiodrone',
        value: function killBiodrone() {
            console.log("Yer sould better belong to Jesus! Cuz yer ass belongs to me!");
        }
    }, {
        key: 'finishTurn',
        value: function finishTurn() {
            this.turnState = this.game.septikon.turnStateEnum.START;
            //console.log("Alas. Your turn is over. ");
        }
    }, {
        key: 'getLegalMoves',
        value: function getLegalMoves(moves, currentCoord, previousCoord) {
            moves--;
            var legalMoves = [];
            for (var direction in this.directionEnum) {
                // NEED TO CHECK FOR LOCKS
                var moveCheck = this.getCoordFromDirection(currentCoord, direction);
                if (moveCheck == false) continue;

                var tileToCheck = this.tileArray[moveCheck.x][moveCheck.y];

                // tile is legal IF direction is ok AND tile is not damaged AND ( there is no previous coordinate OR this is not the previous coordinate )
                if (this.checkWall(this.directionEnum[direction], currentCoord) === true && tileToCheck.tileDamaged === false && (typeof previousCoord === 'undefined' || typeof previousCoord !== 'undefined' && JSON.stringify(moveCheck) !== JSON.stringify(previousCoord))) {
                    // Check if tile is occupied
                    if (moves == 0) {
                        if (tileToCheck.tileOccupied === false) {
                            legalMoves.push(moveCheck);
                        }
                    } else {
                        var returnArray = this.getLegalMoves(moves, moveCheck, currentCoord);
                        for (var index in returnArray) {
                            if (JSON.stringify(returnArray[index]) !== JSON.stringify(currentCoord)) legalMoves.push(returnArray[index]);
                        }
                    }
                }
            }
            return legalMoves;
        }
    }, {
        key: 'getCoordFromDirection',
        value: function getCoordFromDirection(originCoord, direction) {

            var dir = { NORTH: { x: 0, y: -1 }, EAST: { x: 1, y: 0 }, SOUTH: { x: 0, y: 1 }, WEST: { x: -1, y: 0 } };

            var obj = { x: parseInt(originCoord.x) + parseInt(dir[direction].x), y: parseInt(originCoord.y) + parseInt(dir[direction].y) };
            if (obj.x < 0 || obj.y < 0) return false;else return { x: parseInt(originCoord.x) + parseInt(dir[direction].x), y: parseInt(originCoord.y) + parseInt(dir[direction].y) };
        }
    }, {
        key: 'showTiles',
        value: function showTiles(tilesArray) {
            for (var i in tilesArray) {
                this.shownTiles.push(tilesArray[i]);
                tilesArray[i].alpha = 0.5;
            }
        }
    }, {
        key: 'hideTiles',
        value: function hideTiles(tileArray) {
            if (!tileArray) {
                for (var i in this.shownTiles) {
                    this.shownTiles[i].alpha = 0;
                }
                this.shownTiles = [];
            }
        }
    }, {
        key: 'shootTile',
        value: function shootTile(cloneCoordinates) {

            var currentX = cloneCoordinates.x;
            var currentY = cloneCoordinates.y;
            var currentTile = this.tileArray[currentX][currentY];
            do {
                currentX++;
                currentTile = this.tileArray[currentX][currentY];
            } while (currentTile.tileType == 'space' || currentTile.tileType == 'surface' || currentTile.tileDamaged == true);

            currentTile.tint = 0X333333;
            currentTile.alpha = 0.8;
            currentTile.tileDamaged = true;

            this.test = this.game.add.sprite(currentTile.x, currentTile.y + currentTile.height / 2, 'boom');
            this.test.angle = 270;
            this.test.anchor.set(0.5, 0.7);
            this.test.animations.add('boom');
            this.test.animations.play('boom', 20, false, true);
        }
    }, {
        key: 'checkWall',
        value: function checkWall(direction, currentCoordinate) {
            this.wallGrid = this.game.cache.getJSON('wallGrid');
            switch (direction) {
                case this.directionEnum.NORTH:
                    // UP
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.NORTH) == 0) {
                        return true;
                    }
                    return false;
                    break;
                case this.directionEnum.SOUTH:
                    // DOWN
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.SOUTH) == 0) {
                        return true;
                    }
                    return false;
                    break;
                case this.directionEnum.EAST:
                    // RIGHT
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.EAST) == 0) {
                        return true;
                    }
                    return false;
                    break;
                case this.directionEnum.WEST:
                    // LEFT
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.WEST) == 0) {
                        return true;
                    }
                    return false;
                    break;
                default:
                    return false;
            }
        }
    }, {
        key: 'setup',
        value: function setup() {
            //Should ask for player name and assign a color. 
            //Give waiting indicator
            //Offer some way to pick a game? IDK..
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.game.state.start('game');
        }
    }, {
        key: 'createTileArray',
        value: function createTileArray(columns, rows) {
            var showTiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            this.tileDetail = this.game.cache.getJSON('tileDetail');

            this.tileWidth = 0;
            this.tileHeight = 0;

            this.backgroundWidth = this.game.canvas.width;
            this.backgroundHeight = this.game.canvas.height;
            this.tileStartCoordinates = { x: 0, y: 0 };

            this.marginTop = 40;
            this.marginBottom = 38;
            this.marginLeft = 41;
            this.marginRight = 38;

            this.padding = 4.85;

            this.tileWidth = 25; //(this.backgroundWidth - ((this.marginLeft + this.marginRight) + (this.padding * (columns - 1)))) / columns;
            this.tileHeight = 25; //(this.backgroundHeight - ((this.marginTop + this.marginBottom) + (this.padding * (rows - 1)))) / rows;

            this.tileStartCoordinates.x = 0 + this.marginLeft;
            this.tileStartCoordinates.y = 0 + this.marginTop;

            var graphics = this.game.add.graphics(0, 0);
            //graphics.lineStyle(4, 0xffd900, 1);
            graphics.beginFill(0xffd900, 1);
            graphics.drawRect(100, 100, this.tileWidth, this.tileHeight);

            for (var column = 0; column < columns; column++) {
                for (var row = 0; row < rows; row++) {

                    var x = this.tileStartCoordinates.x + this.tileWidth * column + (this.padding * column - 1);
                    var y = this.tileStartCoordinates.y + this.tileHeight * row + (this.padding * row - 1);
                    graphics.generateTexture();

                    var currentTile = this.game.add.sprite(x, y, graphics.generateTexture());
                    if (showTiles) currentTile.alpha = 0.5;else currentTile.alpha = 0;
                    currentTile.inputEnabled = true;
                    currentTile.events.onInputDown.add(this.tileClicked, this);

                    if (typeof this.tileArray[column] == 'undefined') this.tileArray[column] = [];

                    this.tileArray[column][row] = currentTile;
                }
            }

            graphics.destroy();

            for (var key in this.tileDetail) {
                if (!this.tileDetail.hasOwnProperty(key)) continue;

                var obj = this.tileDetail[key];
                for (var prop in obj) {
                    // skip loop if the property is from prototype
                    if (!obj.hasOwnProperty(prop)) continue;

                    var locationCount = obj[prop].locations.length;
                    for (var i = 0; i < locationCount; i++) {

                        var coords = obj[prop].locations[i].split(",");
                        var x = coords[0];
                        var y = coords[1];

                        this.tileArray[x][y].tileDamaged = false;
                        this.tileArray[x][y].tileOccupied = false;
                        this.tileArray[x][y].tileX = x;
                        this.tileArray[x][y].tileY = y;
                        this.tileArray[x][y].tileType = obj[prop].type;

                        if (typeof this.tileArray[x][y] != 'undefined') this.tileArray[x][y].tileName = obj[prop].name;else console.log(x + ":" + y + " not found!");

                        if (typeof obj[prop].properties != 'undefined') {
                            this.tileArray[x][y]['tileProperties'] = obj[prop].properties;
                        }
                    }
                }
            }
        }
    }]);

    return Septikon;
}();

exports.default = Septikon;

},{"../prefabs/master":10}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resources = require('../prefabs/resources');

var _resources2 = _interopRequireDefault(_resources);

var _personnel = require('../prefabs/personnel');

var _personnel2 = _interopRequireDefault(_personnel);

var _ordnance = require('../prefabs/ordnance');

var _ordnance2 = _interopRequireDefault(_ordnance);

var _clone = require('../prefabs/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This will be incorporated in personnel

var Team = function () {

    //initialization code in the constructor
    function Team(game) {
        _classCallCheck(this, Team);

        this.rec = new _resources2.default();
        this.recEnum = this.rec.resourceEnum;
        this.game = game;

        this.personnel = [];
        this.selectedGunners = [];
    }

    _createClass(Team, [{
        key: 'refresh',
        value: function refresh() {
            for (var i in this.personnel) {
                this.game.septikon.tileArray[this.personnel[i].currentTileCoordinates.x][this.personnel[i].currentTileCoordinates.y].tileOccupied = true;
            }
        }

        //Resource Interface

    }, {
        key: 'getRecCount',
        value: function getRecCount(type) {
            return this.rec.getCount(type);
        }
    }, {
        key: 'checkRec',
        value: function checkRec(type, count) {
            if (this.getRecCount(type) >= count) return true;

            return false;
        }
    }, {
        key: 'exchangeRec',
        value: function exchangeRec(costType, costCount, yieldType, yieldCount) {}
    }, {
        key: 'addRec',
        value: function addRec(type, count) {
            return this.rec.add(type, count);
        }
    }, {
        key: 'removeRec',
        value: function removeRec(type, count) {
            return this.rec.remove(type, count);
        }
    }, {
        key: 'addClone',
        value: function addClone(x, y, props) {
            var point = this.game.septikon.tileToPixels(x, y);
            var clone = new _clone2.default(this.game, point.x, point.y);
            clone.currentTileCoordinates.x = x;
            clone.currentTileCoordinates.y = y;

            for (var i in props) {
                clone[i] = props[i];
            }
            this.personnel.push(clone);
            this.game.stage.addChild(clone);
        }
    }, {
        key: 'getClone',
        value: function getClone(coord) {
            for (var i in this.personnel) {
                if (this.personnel[i].currentTileCoordinates.x == coord.x && this.personnel[i].currentTileCoordinates.y == coord.y) {
                    return this.personnel[i];
                }
            }
        }
    }, {
        key: 'killClone',
        value: function killClone(coord) {
            var clone = this.getClone(coord);
            this.game.stage.removeChild(clone);

            var index = this.personnel.indexOf(clone);
            this.personnel.splice(index, 1);

            clone.remove();
        }
    }, {
        key: 'offerLegalClones',
        value: function offerLegalClones() {
            // Offer clones that have legal moves
            for (var i in this.personnel) {
                var moves = this.personnel[i].getLegalMoves();

                if (moves != false) {
                    this.personnel[i].highlightOn();
                }
            }
        }
    }, {
        key: 'offerGunners',
        value: function offerGunners() {
            // Offer gunner 
            var gunnerFound = false;
            for (var i in this.personnel) {
                if (this.personnel[i].isGunner) {
                    gunnerFound = true;
                    //this.personnel[i].highlightOn();
                }
            }
            return gunnerFound;
        }
    }, {
        key: 'selectGunner',
        value: function selectGunner(coords) {
            var clone = this.getClone(coords);
            if (!clone) return false;
            if (!clone.isGunner) return false;

            var existingGunner = this.selectedGunners.indexOf(clone);
            if (existingGunner >= 0) {
                clone.highlightOff();
                this.selectedGunners.splice(existingGunner, 1);
            } else {
                clone.highlightOn();
                this.selectedGunners.push(clone);
            }
        }
    }, {
        key: 'clearGunners',
        value: function clearGunners() {
            for (var i in this.selectedGunners) {
                this.selectedGunners[i].highlightOff();
            }
            this.selectedGunners = [];
        }
    }, {
        key: 'selectCloneForMove',
        value: function selectCloneForMove(coords) {

            var clone = this.getClone(coords);
            if (!clone) return false;

            for (var i in this.personnel) {
                this.personnel[i].highlightOff();
            }
            this.legalTiles = clone.getLegalMoves();
            this.selectedClone = clone;
            this.game.septikon.showTiles(this.legalTiles);
            return true;
        }
    }, {
        key: 'moveSelectedClone',
        value: function moveSelectedClone(coords) {
            for (var i in this.legalTiles) {
                if (this.legalTiles[i].tileX == coords.x && this.legalTiles[i].tileY == coords.y) {
                    this.selectedClone.move(coords);
                    delete this.selectedClone;
                    delete this.legalTiles;
                    return true;
                }
            }
            return false;
        }
    }]);

    return Team;
}();

exports.default = Team;

},{"../prefabs/clone":7,"../prefabs/ordnance":11,"../prefabs/personnel":12,"../prefabs/resources":13}],16:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordnance = function Ordnance() {
  _classCallCheck(this, Ordnance);
};

module.exports.Ordnance = Ordnance;

},{}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnel = function () {
    function Personnel(type, x, y) {
        _classCallCheck(this, Personnel);

        this.typeEnum = Object.freeze({
            clone: 0,
            biodrone: 1
        });

        this.x = x;
        this.y = y;

        switch (type) {
            case 'biodrone':
                break;
            case 'clone':
            default:
                this.type = this.typeEnum[type];
                break;
        }
    }

    _createClass(Personnel, [{
        key: 'move',
        value: function move(x, y) {
            this.x = x;
            this.y = y;
        }
    }]);

    return Personnel;
}();

module.exports.Personnel = Personnel;

},{}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnel = require('./personnel').Personnel;
var Resource = require('./resource').Resource;
var Ordnance = require('./ordnance').Ordnance;

var Player = function () {
    function Player(socketID, id, uuid) {
        _classCallCheck(this, Player);

        this.socketID = socketID;
        this.id = id;
        this.uuid = uuid;
        this.personnelArray = [];
        this.resourceArray = [];
        this.ordnanceArray = [];

        this.startingCloneCount = 5;
    }

    _createClass(Player, [{
        key: 'addPersonnel',
        value: function addPersonnel(type, x, y) {
            if (type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
                this.personnelArray.push(new Personnel('clone', x, y));
                return true;
            }
        }
    }, {
        key: 'getPersonnel',
        value: function getPersonnel(type) {
            var returnArray = [];
            for (var i in this.personnelArray) {
                if (this.personnelArray[i].type == 0) returnArray.push(this.personnelArray[i]);
            }
            return returnArray;
        }
    }]);

    return Player;
}();

module.exports.Player = Player;

},{"./ordnance":16,"./personnel":17,"./resource":19}],19:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = function Resources() {
  _classCallCheck(this, Resources);
};

module.exports.Resources = Resources;

},{}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = require('./player').Player;

var Septikon = function () {
    function Septikon(io) {
        _classCallCheck(this, Septikon);

        this.io = io;
        this.lastPlayerID = 0;
        this.playersArray = [];
        this.gameState = 0;
        this.turnState = 0;
        this.uuid = require('uuid/v4')();

        this.currentPlayerID = this.lastPlayerID;

        this.currentDiceValue = 0;

        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1,
            PAUSE: 2,
            GAMEOVER: 3
        });

        this.turnStateEnum = Object.freeze({
            ROLL: 0,
            MOVE: 1,
            ACTION: 2,
            END: 3
        });
    }

    _createClass(Septikon, [{
        key: 'addNewPlayer',
        value: function addNewPlayer(socketID, uuid, socket) {
            this.lastPlayerID++;
            this.currentPlayerID = this.lastPlayerID;
            var player = new Player(socketID, this.lastPlayerID, uuid);
            this.playersArray.push(player);
            return player;
        }
    }, {
        key: 'getPlayerByUUID',
        value: function getPlayerByUUID(uuid) {
            for (var i in this.playersArray) {
                if (this.playersArray[i].uuid == uuid) return this.playersArray[i];
            }
            return false;
        }
    }, {
        key: 'getPlayerBySocketID',
        value: function getPlayerBySocketID(id) {
            for (var i in this.playersArray) {
                if (this.playersArray[i].socketID == id) {
                    return this.playersArray[i];
                }
            }
            return false;
        }
    }, {
        key: 'existsPlayerUUID',
        value: function existsPlayerUUID(uuid) {
            for (var i in this.playersArray) {
                if (this.playersArray[i].uuid == uuid) return true;
            }
            return false;
        }
    }, {
        key: 'clicked',
        value: function clicked(data) {

            //check game state

            switch (this.gameState) {

                case this.gameStateEnum.SETUP:

                    //check if tile is type: surface, battle, armory, lock, or production
                    //check if tile belongs to player's team
                    //add clone to player's personnel
                    var player = this.getPlayerBySocketID(data.socketID);
                    this.placeClone(player, data.x, data.y);

                    break;

                case this.gameStateEnum.GAME:

                    //check turnState

                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'placeClone',
        value: function placeClone(player, x, y) {

            if (typeof player != 'undefined') {
                if (player.addPersonnel('clone', x, x)) {
                    this.emit('action', { callback: "addClone", details: { x: x, y: x } }, player.socketID);
                }
            } else {
                console.log('ERROR: player not found!');
            }
        }
    }, {
        key: 'rollDice',
        value: function rollDice(data) {
            if (this.turnState == this.turnStateEnum.ROLL && this.gameState == this.gameStateEnum.GAME) {
                this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
                this.emit('action', { callback: "diceRolled", details: { value: this.currentDiceValue } }, data.socketID);
                this.emit('log', { msg: "Player rolled " + this.currentDiceValue });
                this.turnState++;
            }
        }
    }, {
        key: 'get',
        value: function get(data) {
            if (typeof data.property == 'undefined') {
                this.emit('response', { details: this[data.property] }, data.socketID);
            }
        }
    }, {
        key: 'emit',
        value: function emit(msg, data, socketID) {
            if (msg == "response") {
                if (typeof socketID == "undefined") {
                    console.error("No SocketID found!");
                    return;
                }
                this.io.sockets.connected[socketID].emit(msg, data);
            }

            if (msg == "action") {
                if (typeof socketID == "undefined") {
                    console.error("No SocketID found!");
                    return;
                }
                this.io.sockets.connected[socketID].emit(msg, data);
            }

            if (msg == "log") {
                this.io.sockets.emit(msg, data);
            }
        }
    }, {
        key: 'broadcast',
        value: function broadcast(msg, data) {
            for (var i in this.playersArray) {
                this.emit(msg, data, this.playersArray[i].socketID);
            }
        }
    }]);

    return Septikon;
}();

module.exports.Septikon = Septikon;

},{"./player":18,"uuid/v4":3}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _septikon = require('../prefabs/septikon');

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this));
  }

  _createClass(Boot, [{
    key: 'preload',
    value: function preload() {
      this.load.image('preloader', 'assets/preloader.gif');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.input.maxPointers = 1;
      this.game.scale.pageAlignHorizontally = true;
      //setup device scaling
      if (!this.game.device.desktop) {
        //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.parentIsWindow = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.scale.minWidth = 480;
        this.game.scale.minHeight = 260;
        this.game.scale.forceOrientation(true);
        //this.game.scale.setSize();
      }

      this.initGlobalVariables();

      //this.game.scale.startFullScreen();
      //this.game.septikon = new Septikon(this.game);
      this.game.state.start('preloader');
    }
  }, {
    key: 'initGlobalVariables',
    value: function initGlobalVariables() {
      this.game.global = {
        score: 0,
        lastDiceRoll: 0
      };
    }
  }]);

  return Boot;
}(Phaser.State);

exports.default = Boot;

},{"../prefabs/septikon":14}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$State) {
  _inherits(Game, _Phaser$State);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
  }

  _createClass(Game, [{
    key: 'create',
    value: function create() {
      this.game.stage.disableVisibilityChange = true;

      this.background = this.game.add.sprite(0, 0, 'background');
      this.game.septikon.createTileArray(31, 21);;
    }
  }]);

  return Game;
}(Phaser.State);

exports.default = Game;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));
  }

  _createClass(Menu, [{
    key: 'create',
    value: function create() {
      //add background image
      this.background = this.game.add.sprite(0, 0, 'background');
      this.bgRatio = this.background.texture.width / this.background.texture.height;
      this.worldRatio = this.game.world.width / this.game.world.height;
      if ((this.worldRatio - this.bgRatio) / 2 * this.game.world.width > 0) {
        this.background.width = this.game.world.height / this.background.texture.height * this.background.texture.width;
        this.background.height = this.game.world.height;
        this.background.x = (this.game.world.width - this.background.width) / 2;
      } else {
        this.background.width = this.game.world.width;
        this.background.height = this.game.world.width / this.background.texture.width * this.background.texture.height;
        this.background.y = (this.game.world.height - this.background.height) / 2;
      }

      //add intro text
      this.gameoverText = this.add.text(this.game.world.centerX, this.game.world.centerY, "Score = " + this.game.global.score, {
        font: '42px Arial', fill: '#ffffff', align: 'center'
      });
      this.gameoverText.anchor.set(0.5);

      this.input.onDown.add(this.onInputDown, this);

      //prevent accidental click-thru by not allowing state transition for a short time
      this.canContinueToNextState = false;
      this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
        this.canContinueToNextState = true;
      }, this);

      this.saveVarsToLocalStorage();
      this.resetGlobalVariables();
    }
  }, {
    key: 'saveVarsToLocalStorage',
    value: function saveVarsToLocalStorage() {
      var max = localStorage.maxScore || 0; //default value of 0 is it does not exist
      if (this.game.global.score > max) {
        localStorage.maxScore = this.game.global.score;
      }
    }
  }, {
    key: 'resetGlobalVariables',
    value: function resetGlobalVariables() {
      this.game.global.score = 0;
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'onInputDown',
    value: function onInputDown() {
      if (this.canContinueToNextState) {
        this.game.state.start('menu');
      }
    }
  }]);

  return Menu;
}(Phaser.State);

exports.default = Menu;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_Phaser$State) {
  _inherits(Preloader, _Phaser$State);

  function Preloader() {
    _classCallCheck(this, Preloader);

    var _this = _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).call(this));

    _this.asset = null;
    _this.ready = false;
    return _this;
  }

  _createClass(Preloader, [{
    key: 'preload',
    value: function preload() {
      //setup loading bar
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

      //Setup loading and its events
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();
    }
  }, {
    key: 'loadResources',
    value: function loadResources() {

      //MENU RESOURCES
      //menu background
      //text images
      //music files ?

      //load game data
      this.game.load.json('tileDetail', 'assets/tileDetail.json');
      this.game.load.json('wallGrid', 'assets/wallGrid.json');

      //GAME RESOURCES
      //game board background
      this.game.load.image('background', 'assets/medium_board.png');
      this.game.load.image('dice', 'assets/text_go.png');

      // modal images
      this.game.load.image('text_yes', 'assets/text_yes.png');
      this.game.load.image('text_no', 'assets/text_no.png');

      //player tokens spritesheets
      this.game.load.spritesheet('clone', 'assets/clone.png', 110, 168);
      this.game.load.atlas('boom', 'assets/boom.png', 'assets/boom.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

      //audio files 

      //this.game.load.image('crosshairs', 'assets/crosshair_red_small.png');
      this.game.load.image('text_go', 'assets/text_go.png');
      this.game.load.image('text_ready', 'assets/text_ready.png');

      //this.game.load.spritesheet('target', 'assets/target.png',128.66,128);

      //this.game.load.audio('gunshot','assets/gunshot.wav');
      //this.game.load.audio('ding','assets/ding.wav');
    }
  }, {
    key: 'onLoadComplete',
    value: function onLoadComplete() {
      this.game.state.start('setup');
    }
  }]);

  return Preloader;
}(Phaser.State);

exports.default = Preloader;

},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dice = require("../prefabs/dice");

var _dice2 = _interopRequireDefault(_dice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setup = function (_Phaser$State) {
    _inherits(Setup, _Phaser$State);

    function Setup() {
        _classCallCheck(this, Setup);

        return _possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).call(this));
    }

    _createClass(Setup, [{
        key: "create",
        value: function create() {
            this.game.stage.disableVisibilityChange = true;
            this.game.modal = new gameModal(this.game);
            this.createModals();

            this.game.septikon.setup();

            this.game.client.askNewPlayer();

            this.dice = new _dice2.default(this.game, 150, 150);
            this.game.add.existing(this.dice);
        }
    }, {
        key: "createModals",
        value: function createModals() {

            // Start Game
            this.game.modal.createModal({
                type: "askStart",
                includeBackground: true,
                modalCloseOnInput: true,
                itemsArr: [{
                    type: "graphics",
                    graphicColor: "0xffffff",
                    graphicWidth: 300,
                    graphicHeight: 300,
                    graphicRadius: 40
                }, {
                    type: "text",
                    content: "Are you happy with\n that clone layout?",
                    fontFamily: "Luckiest Guy",
                    fontSize: 22,
                    color: "0x1e1e1e",
                    offsetY: -50
                }, {
                    type: "image",
                    content: "text_yes",
                    offsetY: 100,
                    offsetX: -80,
                    contentScale: 0.6,
                    callback: function callback() {
                        this.game.state.start('game');
                    }
                }, {
                    type: "image",
                    content: "text_no",
                    offsetY: 100,
                    offsetX: 80,
                    contentScale: 0.6,
                    callback: function callback() {
                        this.game.modal.hideModal("askStart");
                    }
                }]
            });
        }
    }]);

    return Setup;
}(Phaser.State);

exports.default = Setup;

},{"../prefabs/dice":9}]},{},[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9tYWluLmpzIiwic3JjL21vZGFsLmpzIiwic3JjL3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL3ByZWZhYnMvY2xvbmUuanMiLCJzcmMvcHJlZmFicy9jcm9zc2hhaXJzLmpzIiwic3JjL3ByZWZhYnMvZGljZS5qcyIsInNyYy9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9wcmVmYWJzL29yZG5hbmNlLmpzIiwic3JjL3ByZWZhYnMvcGVyc29ubmVsLmpzIiwic3JjL3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL3ByZWZhYnMvc2VwdGlrb24uanMiLCJzcmMvcHJlZmFicy90ZWFtLmpzIiwic3JjL3NlcnZlci9vcmRuYW5jZS5qcyIsInNyYy9zZXJ2ZXIvcGVyc29ubmVsLmpzIiwic3JjL3NlcnZlci9wbGF5ZXIuanMiLCJzcmMvc2VydmVyL3Jlc291cmNlLmpzIiwic3JjL3NlcnZlci9zZXB0aWtvbi5qcyIsInNyYy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9zdGF0ZXMvZ2FtZW92ZXIuanMiLCJzcmMvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9zdGF0ZXMvc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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REM7QUFFUCxrQ0FBYyxVQUZQO0FBR1Asa0NBQWMsR0FIUDtBQUlQLG1DQUFlLEdBSlI7QUFLUCxtQ0FBZTtBQUxSLGlCQUFELEVBTVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMseUNBRlY7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUyxDQUFDO0FBTlgsaUJBTk8sRUFhUDtBQUNDLDBCQUFNLE9BRFA7QUFFQyw2QkFBUyxVQUZWO0FBR0MsNkJBQVMsR0FIVjtBQUlDLDZCQUFTLENBQUMsRUFKWDtBQUtDLGtDQUFjLEdBTGY7QUFNQyw4QkFBVSxvQkFBWTtBQUNsQiw2QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixDQUFzQixNQUF0QjtBQUNIO0FBUkYsaUJBYk8sRUFzQlA7QUFDQywwQkFBTSxPQURQO0FBRUMsNkJBQVMsU0FGVjtBQUdDLDZCQUFTLEdBSFY7QUFJQyw2QkFBUyxFQUpWO0FBS0Msa0NBQWMsR0FMZjtBQU1DLDhCQUFVLG9CQUFZO0FBQ2xCLDZCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLENBQTBCLFVBQTFCO0FBQ0g7QUFSRixpQkF0Qk87QUFKYyxhQUE1QjtBQXNDRDs7OztFQTVEaUIsT0FBTyxLOztrQkFtRVosSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcbmltcG9ydCBTZXB0aWtvbiBmcm9tICcuL3ByZWZhYnMvc2VwdGlrb24nO1xuXG5pZih0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xufVxuXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xuZ2FtZS5zZXB0aWtvbiA9IG5ldyBTZXB0aWtvbihnYW1lKTtcbmdhbWUuY2xpZW50ID0gbmV3IENsaWVudChnYW1lLnNlcHRpa29uKTtcblxuZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBuZXcgQm9vdCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWUoKSk7XG5nYW1lLnN0YXRlLmFkZCgnc2V0dXAnLCBuZXcgU2V0dXAoKSk7XG5nYW1lLnN0YXRlLmFkZCgncHJlbG9hZGVyJywgbmV3IFByZWxvYWRlcigpKTtcbmdhbWUuc3RhdGUuYWRkKCdnYW1lb3ZlcicsIG5ldyBHYW1lb3ZlcigpKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcblxuXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdGdhbWUubW9kYWxzID0ge307XG5cblx0LyoqXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcblxuXHRcdFx0dmFyIG1vZGFsO1xuXHRcdFx0dmFyIG1vZGFsR3JvdXAgPSBnYW1lLmFkZC5ncm91cCgpO1xuXHRcdFx0aWYgKGZpeGVkVG9DYW1lcmEgPT09IHRydWUpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueCA9IDA7XG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQgPT09IHRydWUpIHtcblx0XHRcdFx0bW9kYWwgPSBnYW1lLmFkZC5ncmFwaGljcyhnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XG5cdFx0XHRcdG1vZGFsLmJlZ2luRmlsbChiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRPcGFjaXR5KTtcblx0XHRcdFx0bW9kYWwueCA9IDA7XG5cdFx0XHRcdG1vZGFsLnkgPSAwO1xuXG5cdFx0XHRcdG1vZGFsLmRyYXdSZWN0KDAsIDAsIGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblxuXHRcdFx0XHRpZiAobW9kYWxDbG9zZU9uSW5wdXQgPT09IHRydWUpIHtcblxuXHRcdFx0XHRcdHZhciBpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoZnVuY3Rpb24gKGUsIHBvaW50ZXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZU1vZGFsKGUudHlwZSk7XG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xuXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XG5cdFx0XHRcdHZhciBpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0Jztcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XG5cblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcblxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJfb2Zmc2V0WFwiXSA9IDA7XG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJfb2Zmc2V0WVwiXSA9IDA7XG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJsb2NrUG9zaXRpb25cIl0gPSBsb2NrUG9zaXRpb247XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XG5cblx0XHR9LFxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHR9LFxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xuXHRcdH1cblx0fTtcbn07XG4iLCJcbmNsYXNzIENsaWVudCB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XG4gICAgICAgIFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPRzogJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FDVElPTjogJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbWV0aG9kIGZvdW5kIGNhbGxlZCBzZXB0aWtvbi5cIiArIGRhdGEuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0fVxuXG5cdGFza05ld1BsYXllcigpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJykpO1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld1BsYXllcicsIHt1dWlkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpfSk7XG5cdH1cbiAgICBcbiAgICBzZW5kSW5wdXQocGF5bG9hZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBpbnB1dCcpO1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcblxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB0ZWFtKSB7XG4gICAgXG4gICAgLy8gU1dJVENIIFRPIERJRkZFUkVOVCBQRVJTT05ORUwgVFlQRVNcbiAgICAvLyBUaGlzIHdpbGwgYmUgYSBmbGV4aWJsZSBwZXJzb25uZWwgZmFjdG9yeVxuICBcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XG4gICAgICAgIFxuICAgIHRoaXMudGVhbSA9IHRlYW07XG5cbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICAvL3NldCBjbGljayBldmVudFxuICAgIC8vdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIC8vdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XG5cbiAgICAvL3NldHVwIGF1ZGlvXG4gICAgdGhpcy5kaW5nID0gdGhpcy5nYW1lLmFkZC5hdWRpbygnZGluZycpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAyNztcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSA5MDtcblxuICAgIC8vIGFkZCBhbmltYXRpb25zIGZyb20gc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsaW5nJyxudWxsLDUsdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2lkbGluZycpO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGhpZ2hsaWdodE9uKCkge1xuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XG4gIH1cbiAgXG4gIGhpZ2hsaWdodE9mZigpIHtcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xuICB9XG4gIFxuICBnZXRMZWdhbE1vdmVzKCkge1xuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcbiAgICBcbiAgICBcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcbiAgfVxuICBcbiAgbW92ZShjb29yZGluYXRlcykge1xuICBcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIFxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcbiAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAzNTsgXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcblxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcblxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XG5cbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsaW5nJyxudWxsLDUsdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2lkbGluZycpO1xuXG4gIH1cblxuICBjbGlja2VkICgpIHtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdkaWNlQ2xpY2tlZCd9KTtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWNlO1xuIiwiY2xhc3MgTWFzdGVyIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyOyIsImNsYXNzIE9yZG5hbmNlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxuICAgIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIE9YWUdFTjogMCxcbiAgICAgICAgUk9DS0VUOiAxLFxuICAgICAgICBNRVRBTDogMixcbiAgICAgICAgRU5FUkdZOiAzLFxuICAgICAgICBCSU9NQVNTOiA0LFxuICAgICAgICBCSU9EUk9ORTogNSxcbiAgICAgICAgVVJBTklVTTogNlxuICAgIH0pO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XG4gICAgfTtcbiAgfVxuICBcbiAgY2hlY2sodHlwZSwgY291bnQpIHtcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgZ2V0Q291bnQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlc1t0eXBlXTtcbiAgfVxuICAgIFxuICBhZGQodHlwZSwgY291bnQpIHtcbiAgfVxuICBcbiAgcmVtb3ZlKHR5cGUsIGNvdW50KSB7XG4gICAgdGhpcy5yZXNvdXJjZXNbdHlwZV0gLT0gY291bnQ7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlczsiLCJpbXBvcnQgTWFzdGVyIGZyb20gJy4uL3ByZWZhYnMvbWFzdGVyJztcbi8vaW1wb3J0IFRlYW0gZnJvbSAnLi4vcHJlZmFicy90ZWFtJztcblxuY2xhc3MgU2VwdGlrb24ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIFxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xuICAgIHRoaXMudGlsZUFycmF5ID0gW107XG4gICAgdGhpcy5iZ1JhdGlvID0gMDtcbiAgICB0aGlzLndvcmxkUmF0aW8gPSAwO1xuICAgIHRoaXMudHVyblN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBTVEFSVDogMCxcbiAgICAgICAgU0VMRUNUX0NMT05FOiAxLCBcbiAgICAgICAgTU9WRV9DTE9ORTogMixcbiAgICAgICAgU0VMRUNUX0dVTk5FUjogMyxcbiAgICAgICAgU0VMRUNUX0FDVElPTl9PUkRFUjogNCwgXG4gICAgICAgIEFDVElPTjogNSxcbiAgICAgICAgRU5EOiA2XG4gICAgfSk7XG4gICAgdGhpcy5kaXJlY3Rpb25FbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIE5PUlRIOjEsXG4gICAgICAgIEVBU1Q6MixcbiAgICAgICAgU09VVEg6NCxcbiAgICAgICAgV0VTVDo4XG4gICAgfSk7XG4gICAgdGhpcy50dXJuU3RhdGUgPSAwO1xuXG4gIH1cbiAgXG4gIGRpY2VSb2xsZWQoZGV0YWlscykge1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsID0gZGV0YWlscy52YWx1ZTtcbiAgfVxuICBcbiAgYWRkQ2xvbmUoZGV0YWlscykge1xuICAgIGNvbnNvbGUubG9nKGRldGFpbHMpO1xuICB9XG4gIFxuICBwaXhlbHNUb1RpbGUoeCwgeSkge1xuICAgIHZhciB4VGlsZSA9IDA7XG4gICAgdmFyIHlUaWxlID0gMDtcbiAgICBcbiAgICBmb3IgKHZhciBjb2wgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMudGlsZUFycmF5W2NvbF0pIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVBcnJheVtjb2xdW3Jvd11cbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXG4gICAgICAgICAgICAgICAgeFRpbGUgPSBwYXJzZUludChjb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXG4gICAgICAgICAgICAgICAgeVRpbGUgPSBwYXJzZUludChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7eDp4VGlsZSwgeTp5VGlsZX07XG4gIH1cbiAgXG4gIHRpbGVUb1BpeGVscyh4LCB5KSB7XG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcbiAgICB2YXIgdGlsZVggPSB0aWxlT2JqLnggKyAodGlsZU9iai53aWR0aC8yKTtcbiAgICB2YXIgdGlsZVkgPSB0aWxlT2JqLnkgKyAodGlsZU9iai5oZWlnaHQvMik7XG4gICAgcmV0dXJuIHt4OnRpbGVYLCB5OnRpbGVZfTtcbiAgfVxuICBcbiAgdGlsZUNsaWNrZWQob2JqKSB7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdHJpZ2dlclRpbGUoY2FsbGVyKSB7XG4gIFxuICAgIHZhciB0aWxlID0gdGhpcy50aWxlQXJyYXlbY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV07XG4gICAgY2FsbGVyLmlzR3VubmVyID0gZmFsc2U7XG4gICAgdmFyIHByb3BzID0gdGlsZS50aWxlUHJvcGVydGllcztcbiAgICBcbiAgICBzd2l0Y2godGlsZS50aWxlVHlwZSkge1xuICAgICAgICBjYXNlICdzdXJmYWNlJzogXG4gICAgICAgICAgICBjYWxsZXIuaXNHdW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIENBTiBUSElTIFRFQU0gQUZGT1JEIFRIRSBDT1NUP1xuICAgICAgICAgICAgICAgIC8vIEVYQ0hBTkdFIFJFU09VUkNFUyAvLyBQQVkgVVAhIVxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgYXZhaWxhYmxlIHJlc291cmNlIGNvdW50IGFuZCBwcmVwYXJlIHRvIG9mZmVyIFwiZ3VubmVyXCIgY2xvbmVzIGZvciBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIklzIHRoaXMgcmVzb3VyY2UgYXZhaWxhYmxlP1wiKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFR5cGVzIG9mIGJhdHRsZSB0aWxlcyB3aXRoIGEgRklSRSBhY3Rpb246XG4gICAgICAgICAgICAgICAgLy8gIC0gU2F0ZWxsaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAtIFRoZXJtaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAvLyAgLSBTaGllbGQ6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gIC0gQmlvZHJvbmU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gIC0gTGFzZXI6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIC8vICAtIFJvY2tldDogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLnRpbGVOYW1lKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSA9PSBmYWxzZSAmJiAodGlsZS50aWxlTmFtZSA9PSBcInNhdGVsbGl0ZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJ0aGVybWl0ZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJzaGllbGRcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwiYmlvZHJvbmVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwibGFzZXJcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwicm9ja2V0XCIgKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxvY2FsVGVhbS5jaGVja1JlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KSk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2NhbFRlYW0uY2hlY2tSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCkgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxUZWFtLnJlbW92ZVJlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5ldyBjb3VudCBvZiBcIiArIHByb3BzLnJlc291cmNlQ29zdFR5cGUgKyBcIiBpcyBcIiArIHRoaXMubG9jYWxUZWFtLmdldFJlY0NvdW50KHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSkpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uID0ge3Byb3BzLCBjYWxsZXJ9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9GRkVSIEdVTk5FUlMgQU5EIEFXQUlUIFNFTEVDVElPTiAocmVtZW1iZXIgdGhlIGNvc3QgcGVyIGd1bm5lcilcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZXF1aXJlIGFuIGFycmF5IG9mIGNsb25lcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRlYW0uIFxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgYXJyYXkgbG9va2luZyBmb3IgJ2lzR3VubmVyID09IHRydWUnXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYWxsIFwiZ3VubmVyXCIgY2xvbmVzXG4gICAgICAgICAgICAvLyBBbGxvdyBzZWxlY3Rpb24gb2Ygb25seSBhcyBtYW55IGFzIHRlYW0gY2FuIGFmZm9yZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNhbGwgdGhlIG1ldGhvZCBkZWZpbmVkIGluIEpTT04uIEluIHRoaXMgY2FzZSBmaXJpbmcgYSB3ZWFwb24uXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzZWxlY3RlZCBndW5uZXJzIGFuZCBjYWxsIHRoZSBtZXRob2QuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2FybW9yeSc6XG4gICAgICAgICAgICAvL1NFVCBURUFNIFdFQVBPTlMhXG4gICAgICAgICAgICAvLyBUaGlzIHJlcXVpcmVzIGEgVGVhbSBwcm9wZXJ0eSBmb3Igc3RvcmluZyBhIHdlYXBvbnMgKGFybXM/KSBhcnJheS5cbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAncHJvZHVjdGlvbic6XG4gICAgICAgICAgICAvLyBOT1RFOiBUaGVzZSBhcmUgcmVxdWlyZWQgaWYgcmVzb3VyY2VzIGFsbG93XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLnJlc291cmNlQ29zdENvdW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gQ0FOIFRISVMgVEVBTSBBRkZPUkQgVEhFIENPU1Q/XG4gICAgICAgICAgICAgICAgLy8gUmVxdWlyZXMgVGVhbSBvYmplY3QgdG8gY2hlY2sgZm9yIHJlc291cmNlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3N0IGNvdW50XG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvc3QgdHlwZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCBjb3VudFxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCB0eXBlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0cmFuc2FjdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnbG9jayc6XG4gICAgICAgICAgICAvLyBOT1RISU5HIEhFUkUgKG1heWJlIGFuIHVwZGF0ZSBmZWF0dXJlPz8pXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9OyBcbiAgICAgICAgICAgIFxuICAgIC8vIENPTU1JVCBBQ1RJT05cbiAgICBcbiAgfVxuICBcbiAgICBmaXJlKHdlYXBvblR5cGUsIGNhbGxlcikge1xuICAgIGNvbnNvbGUubG9nKFwiRmlyaW5nIHRoZSBcIiArIHdlYXBvblR5cGUpO1xuICAgIFxuICAgIHN3aXRjaCAod2VhcG9uVHlwZSkge1xuICAgICAgICBjYXNlICdsYXNlcic6XG4gICAgICAgICAgICAvL2ZvciAodmFyIGkgaW4gdGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnc2F0ZWxsaXRlJzpcbiAgICAgICAgICAgIC8vIFBMQUNFIEEgU0FURUxMSVRFXG4gICAgICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ3RoZXJtaXRlJzpcbiAgICAgICAgICAgIC8vdGhpcy5zaG9vdFRpbGUoY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMsIHRydWUpO1xuICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdzaGllbGQnOlxuICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdiaW9kcm9uZSc6XG4gICAgICAgICAgICAvL2JyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ3JvY2tldCc6IFxuICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9O1xuICAgIFxuICAgIHRoaXMubG9jYWxUZWFtLmNsZWFyR3VubmVycygpO1xuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZSA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGVFbnVtLlNUQVJUO1xuICAgIHRoaXMuZmluaXNoVHVybigpO1xuICB9XG4gIFxuICByZXBhaXIoY291bnQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlcGFpciBcIiArIGNvdW50ICsgXCIgb2YgdGhlIHRoaW5ncyFcIik7XG4gIH1cbiAgXG4gIGVzcGlvbmFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBjbG9uZSEhXCIpO1xuICB9XG4gIFxuICB0YWtlb3ZlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBzYXRlbGxpdGUhIVwiKTtcbiAgfVxuICBcbiAgY291bnRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIGJhY2sgbXkgY2xvbmUhIVwiKTtcbiAgfVxuICBcbiAga2lsbEJpb2Ryb25lKCkge1xuICAgIGNvbnNvbGUubG9nKFwiWWVyIHNvdWxkIGJldHRlciBiZWxvbmcgdG8gSmVzdXMhIEN1eiB5ZXIgYXNzIGJlbG9uZ3MgdG8gbWUhXCIpO1xuICB9XG4gIFxuICBmaW5pc2hUdXJuKCkge1xuICAgIHRoaXMudHVyblN0YXRlID0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU1RBUlQ7XG4gICAgLy9jb25zb2xlLmxvZyhcIkFsYXMuIFlvdXIgdHVybiBpcyBvdmVyLiBcIik7XG4gIH1cbiAgXG5cbiAgZ2V0TGVnYWxNb3Zlcyhtb3ZlcywgY3VycmVudENvb3JkLCBwcmV2aW91c0Nvb3JkKSB7XG5cdG1vdmVzLS07XG5cdHZhciBsZWdhbE1vdmVzID0gW107XG5cdGZvcih2YXIgZGlyZWN0aW9uIGluIHRoaXMuZGlyZWN0aW9uRW51bSkge1x0XG5cdFx0Ly8gTkVFRCBUTyBDSEVDSyBGT1IgTE9DS1Ncblx0XHR2YXIgbW92ZUNoZWNrID0gdGhpcy5nZXRDb29yZEZyb21EaXJlY3Rpb24oY3VycmVudENvb3JkLGRpcmVjdGlvbik7XG4gICAgICAgIGlmIChtb3ZlQ2hlY2sgPT0gZmFsc2UpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB2YXIgdGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVttb3ZlQ2hlY2sueF1bbW92ZUNoZWNrLnldO1xuXG4gICAgICAgIC8vIHRpbGUgaXMgbGVnYWwgSUYgZGlyZWN0aW9uIGlzIG9rIEFORCB0aWxlIGlzIG5vdCBkYW1hZ2VkIEFORCAoIHRoZXJlIGlzIG5vIHByZXZpb3VzIGNvb3JkaW5hdGUgT1IgdGhpcyBpcyBub3QgdGhlIHByZXZpb3VzIGNvb3JkaW5hdGUgKVxuXHRcdGlmKHRoaXMuY2hlY2tXYWxsKHRoaXMuZGlyZWN0aW9uRW51bVtkaXJlY3Rpb25dLCBjdXJyZW50Q29vcmQpID09PSB0cnVlICYmIHRpbGVUb0NoZWNrLnRpbGVEYW1hZ2VkID09PSBmYWxzZSAmJiAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShtb3ZlQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkpIHtcblx0XHRcdC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcbiAgICAgICAgICAgIGlmKG1vdmVzPT0wKXtcbiAgICAgICAgICAgICAgICBpZih0aWxlVG9DaGVjay50aWxlT2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChtb3ZlQ2hlY2spO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2YXIgcmV0dXJuQXJyYXkgPSAodGhpcy5nZXRMZWdhbE1vdmVzKG1vdmVzLCBtb3ZlQ2hlY2ssIGN1cnJlbnRDb29yZCkpO1xuXHRcdFx0XHRmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XG5cdFx0XHRcdFx0aWYoSlNPTi5zdHJpbmdpZnkocmV0dXJuQXJyYXlbaW5kZXhdKSAhPT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudENvb3JkKSlcblx0XHRcdFx0XHRcdGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtpbmRleF0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBsZWdhbE1vdmVzO1xuICB9XG4gICAgXG4gIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcblxuXHR2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xuICAgIFxuICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcbiAgICBpZihvYmoueCA8IDAgfHwgb2JqLnkgPCAwKSBcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHRlbHNlXG4gICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcblx0XHRcbiAgfVxuICBcbiAgc2hvd1RpbGVzKHRpbGVzQXJyYXkpIHtcbiAgICBmb3IgKHZhciBpIGluIHRpbGVzQXJyYXkpIHtcbiAgICAgICAgdGhpcy5zaG93blRpbGVzLnB1c2godGlsZXNBcnJheVtpXSk7XG4gICAgICAgIHRpbGVzQXJyYXlbaV0uYWxwaGEgPSAwLjU7XG4gICAgfVxuICB9XG4gIFxuICBoaWRlVGlsZXModGlsZUFycmF5KSB7XG4gICAgaWYoIXRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xuICAgICAgICAgICAgdGhpcy5zaG93blRpbGVzW2ldLmFscGhhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBzaG9vdFRpbGUoY2xvbmVDb29yZGluYXRlcykge1xuICBcbiAgICB2YXIgY3VycmVudFggPSBjbG9uZUNvb3JkaW5hdGVzLng7XG4gICAgdmFyIGN1cnJlbnRZID0gY2xvbmVDb29yZGluYXRlcy55O1xuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2N1cnJlbnRYXVtjdXJyZW50WV07XG4gICAgZG8ge1xuICAgICAgICBjdXJyZW50WCsrO1xuICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2N1cnJlbnRYXVtjdXJyZW50WV07XG4gICAgfSB3aGlsZSAoY3VycmVudFRpbGUudGlsZVR5cGUgPT0gJ3NwYWNlJyB8fCBjdXJyZW50VGlsZS50aWxlVHlwZSA9PSAnc3VyZmFjZScgfHwgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPT0gdHJ1ZSk7XG4gICAgXG4gICAgY3VycmVudFRpbGUudGludCA9IDBYMzMzMzMzO1xuICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC44O1xuICAgIGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLnRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjdXJyZW50VGlsZS54LCBjdXJyZW50VGlsZS55ICsoY3VycmVudFRpbGUuaGVpZ2h0LzIpLCAnYm9vbScpO1xuICAgIHRoaXMudGVzdC5hbmdsZSA9IDI3MDtcbiAgICB0aGlzLnRlc3QuYW5jaG9yLnNldCgwLjUsMC43KTtcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5wbGF5KCdib29tJywgMjAsIGZhbHNlLCB0cnVlKTtcbiAgICBcbiAgfVxuICBcbiAgY2hlY2tXYWxsKGRpcmVjdGlvbiwgY3VycmVudENvb3JkaW5hdGUpIHtcbiAgICB0aGlzLndhbGxHcmlkID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3dhbGxHcmlkJyk7XG5cdHN3aXRjaCAoZGlyZWN0aW9uKXtcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSDogLy8gVVBcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uRUFTVDogLy8gUklHSFRcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1QpID09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5XRVNUOiAvLyBMRUZUXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fVxuICAgIFxuICB9XG4gIFxuICBzZXR1cCgpIHtcbiAgICAvL1Nob3VsZCBhc2sgZm9yIHBsYXllciBuYW1lIGFuZCBhc3NpZ24gYSBjb2xvci4gXG4gICAgLy9HaXZlIHdhaXRpbmcgaW5kaWNhdG9yXG4gICAgLy9PZmZlciBzb21lIHdheSB0byBwaWNrIGEgZ2FtZT8gSURLLi5cbiAgfVxuICBcbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICB9XG4gICAgXG4gIGNyZWF0ZVRpbGVBcnJheShjb2x1bW5zLCByb3dzLCBzaG93VGlsZXMgPSBmYWxzZSkge1xuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd0aWxlRGV0YWlsJyk7XG5cbiAgICB0aGlzLnRpbGVXaWR0aCA9IDA7XG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gMDtcbiAgICAgICAgXG4gICAgdGhpcy5iYWNrZ3JvdW5kV2lkdGggPSB0aGlzLmdhbWUuY2FudmFzLndpZHRoO1xuICAgIHRoaXMuYmFja2dyb3VuZEhlaWdodCA9IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMgPSB7eDowLCB5OjB9O1xuXG4gICAgdGhpcy5tYXJnaW5Ub3AgPSA0MDtcbiAgICB0aGlzLm1hcmdpbkJvdHRvbSA9IDM4O1xuICAgIHRoaXMubWFyZ2luTGVmdCA9IDQxO1xuICAgIHRoaXMubWFyZ2luUmlnaHQgPSAzODtcbiAgICBcbiAgICB0aGlzLnBhZGRpbmcgPSA0Ljg1O1xuICAgIFxuICAgIHRoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xuICAgIHRoaXMudGlsZUhlaWdodCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZEhlaWdodCAtICgodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkgKyAodGhpcy5wYWRkaW5nICogKHJvd3MgLSAxKSkpKSAvIHJvd3M7XG4gICAgICAgIFxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IDAgKyB0aGlzLm1hcmdpbkxlZnQ7XG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gMCArIHRoaXMubWFyZ2luVG9wO1xuICAgIFxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xuICAgIFxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ICsgKHRoaXMudGlsZUhlaWdodCAqIHJvdykgKyAodGhpcy5wYWRkaW5nICogcm93IC0gMSk7XG4gICAgICAgICAgICBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgICAgICAgICAgaWYgKHNob3dUaWxlcylcbiAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDAuNTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDA7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFRpbGUuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnRpbGVDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID09ICd1bmRlZmluZWQnKSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID0gW107XG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXVtyb3ddID0gY3VycmVudFRpbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICAgIFxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnRpbGVEZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVEZXRhaWwuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgIFxuICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlRGV0YWlsW2tleV07XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldWyd0aWxlUHJvcGVydGllcyddID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcbiIsImltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi4vcHJlZmFicy9yZXNvdXJjZXMnO1xuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7IC8vIFRoaXMgd2lsbCBiZSBpbmNvcnBvcmF0ZWQgaW4gcGVyc29ubmVsXG5cbmNsYXNzIFRlYW0ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLnJlYyA9IG5ldyBSZXNvdXJjZXMoKTtcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cbiAgXG4gIHJlZnJlc2goKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcbiAgZ2V0UmVjQ291bnQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcbiAgfVxuICBcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xuICB9XG4gIFxuICBhZGRSZWModHlwZSwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMuYWRkKHR5cGUsIGNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XG4gIH1cbiAgXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUscG9pbnQueCxwb2ludC55KTtcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XG4gICAgXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xuICAgIH1cbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xuICB9XG4gIFxuICBnZXRDbG9uZShjb29yZCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBraWxsQ2xvbmUoY29vcmQpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIFxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xuICAgIHRoaXMucGVyc29ubmVsLnNwbGljZShpbmRleCwxKTtcbiAgICBcbiAgICBjbG9uZS5yZW1vdmUoKTtcbiAgfVxuICAgIFxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xuICAgIC8vIE9mZmVyIGNsb25lcyB0aGF0IGhhdmUgbGVnYWwgbW92ZXNcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xuXG4gICAgICAgIGlmKG1vdmVzICE9IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBvZmZlckd1bm5lcnMoKSB7XG4gICAgLy8gT2ZmZXIgZ3VubmVyIFxuICAgIHZhciBndW5uZXJGb3VuZCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5pc0d1bm5lcikge1xuICAgICAgICAgICAgZ3VubmVyRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgLy90aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBndW5uZXJGb3VuZDtcbiAgfVxuICBcbiAgc2VsZWN0R3VubmVyKGNvb3Jkcykge1xuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcbiAgICBpZighY2xvbmUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZighY2xvbmUuaXNHdW5uZXIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgdmFyIGV4aXN0aW5nR3VubmVyID0gdGhpcy5zZWxlY3RlZEd1bm5lcnMuaW5kZXhPZihjbG9uZSk7XG4gICAgaWYoZXhpc3RpbmdHdW5uZXIgPj0gMCl7XG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9mZigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoZXhpc3RpbmdHdW5uZXIsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goY2xvbmUpO1xuICAgIH1cbiAgfVxuICBcbiAgY2xlYXJHdW5uZXJzKCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zZWxlY3RlZEd1bm5lcnMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0uaGlnaGxpZ2h0T2ZmKCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cbiAgXG4gIHNlbGVjdENsb25lRm9yTW92ZShjb29yZHMpIHsgICAgXG4gIFxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcbiAgICBpZighY2xvbmUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPZmYoKTtcbiAgICB9XG4gICAgdGhpcy5sZWdhbFRpbGVzID0gY2xvbmUuZ2V0TGVnYWxNb3ZlcygpO1xuICAgIHRoaXMuc2VsZWN0ZWRDbG9uZSA9IGNsb25lO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zaG93VGlsZXModGhpcy5sZWdhbFRpbGVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgbW92ZVNlbGVjdGVkQ2xvbmUoY29vcmRzKSB7XG4gICAgZm9yKHZhciBpIGluIHRoaXMubGVnYWxUaWxlcykge1xuICAgICAgICBpZih0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVggPT0gY29vcmRzLnggJiYgdGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVZID09IGNvb3Jkcy55KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2xvbmUubW92ZShjb29yZHMpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRDbG9uZTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXM7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJjbGFzcyBPcmRuYW5jZSB7XG59XG5cbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XG4iLCJjbGFzcyBQZXJzb25uZWwge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBjbG9uZTogMCxcbiAgICAgICAgICAgIGJpb2Ryb25lOiAxXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdmUoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpLlJlc291cmNlO1xudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xuXG5cbmNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXRJRCwgaWQsIHV1aWQpIHsgXG4gICAgICAgIHRoaXMuc29ja2V0SUQgPSBzb2NrZXRJRDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XG4gICAgICAgIHRoaXMucmVzb3VyY2VBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnRpbmdDbG9uZUNvdW50ID0gNTsgICAgXG4gICAgfVxuICAgICAgICBcbiAgICBhZGRQZXJzb25uZWwodHlwZSwgeCwgeSkge1xuICAgICAgICBpZih0eXBlID09IFwiY2xvbmVcIiAmJiB0aGlzLmdldFBlcnNvbm5lbCh0eXBlKS5sZW5ndGggPCB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKG5ldyBQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0UGVyc29ubmVsKHR5cGUpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGUgPT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMucGVyc29ubmVsQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiIsImNsYXNzIFJlc291cmNlcyB7XG59XG5cbm1vZHVsZS5leHBvcnRzLlJlc291cmNlcyA9IFJlc291cmNlcztcbiIsInZhciBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpLlBsYXllcjtcblxuY2xhc3MgU2VwdGlrb24ge1xuICAgIFxuXHRjb25zdHJ1Y3Rvcihpbykge1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMudXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySUQgPSB0aGlzLmxhc3RQbGF5ZXJJRDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVTdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFNFVFVQOiAwLFxuICAgICAgICAgICAgR0FNRTogMSwgXG4gICAgICAgICAgICBQQVVTRTogMixcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBST0xMOiAwLFxuICAgICAgICAgICAgTU9WRTogMSwgXG4gICAgICAgICAgICBBQ1RJT046IDIsXG4gICAgICAgICAgICBFTkQ6IDNcbiAgICAgICAgfSk7ICAgICAgICBcblx0fVxuXG5cdGFkZE5ld1BsYXllcihzb2NrZXRJRCwgdXVpZCwgc29ja2V0KSB7XG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEKys7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllcklEID0gdGhpcy5sYXN0UGxheWVySUQ7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHNvY2tldElELCB0aGlzLmxhc3RQbGF5ZXJJRCwgdXVpZCk7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcblx0fVxuICAgIFxuICAgIGdldFBsYXllckJ5VVVJRCh1dWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBnZXRQbGF5ZXJCeVNvY2tldElEKGlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZXhpc3RzUGxheWVyVVVJRCh1dWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGNsaWNrZWQoZGF0YSkge1xuICAgICAgICBcbiAgICAgICAgLy9jaGVjayBnYW1lIHN0YXRlXG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2FtZVN0YXRlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XG5cbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgaXMgdHlwZTogc3VyZmFjZSwgYmF0dGxlLCBhcm1vcnksIGxvY2ssIG9yIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgYmVsb25ncyB0byBwbGF5ZXIncyB0ZWFtXG4gICAgICAgICAgICAgICAgLy9hZGQgY2xvbmUgdG8gcGxheWVyJ3MgcGVyc29ubmVsXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChkYXRhLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUU6XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2NoZWNrIHR1cm5TdGF0ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcGxhY2VDbG9uZShwbGF5ZXIsIHgsIHkpIHtcbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGVvZihwbGF5ZXIpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZihwbGF5ZXIuYWRkUGVyc29ubmVsKCdjbG9uZScsIHgsIHgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5Onh9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogcGxheWVyIG5vdCBmb3VuZCEnKTsgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJvbGxEaWNlKGRhdGEpIHtcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlfX0sIGRhdGEuc29ja2V0SUQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdsb2cnLCB7bXNnOlwiUGxheWVyIHJvbGxlZCBcIiArIHRoaXMuY3VycmVudERpY2VWYWx1ZX0pO1xuICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXQoZGF0YSkge1xuICAgICAgICBpZih0eXBlb2YoZGF0YS5wcm9wZXJ0eSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCB7ZGV0YWlsczp0aGlzW2RhdGEucHJvcGVydHldfSwgZGF0YS5zb2NrZXRJRCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZW1pdChtc2csIGRhdGEsIHNvY2tldElEKSB7XG4gICAgICAgIGlmKG1zZyA9PSBcInJlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobXNnID09IFwibG9nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYnJvYWRjYXN0KG1zZywgZGF0YSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG59XG5cbm1vZHVsZS5leHBvcnRzLlNlcHRpa29uID0gU2VwdGlrb247XG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXG4gICAgaWYgKCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIC8vdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuZm9yY2VPcmllbnRhdGlvbih0cnVlKTtcbiAgICAgIC8vdGhpcy5nYW1lLnNjYWxlLnNldFNpemUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgICBcbiAgICAvL3RoaXMuZ2FtZS5zY2FsZS5zdGFydEZ1bGxTY3JlZW4oKTtcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbiA9IG5ldyBTZXB0aWtvbih0aGlzLmdhbWUpO1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XG4gIH1cblxuICBpbml0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgbGFzdERpY2VSb2xsOiAwLFxuICAgIH07XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb290O1xuIiwiXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIFxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxKTs7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XG4gICAgfVxuXG4gICAgLy9hZGQgaW50cm8gdGV4dFxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcbiAgICB9KTtcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XG5cbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICB9XG5cbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cbiAgfVxuXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XG4gIH1cbiAgdXBkYXRlKCkge31cblxuICBvbklucHV0RG93biAoKSB7XG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hc3NldCA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xuICAgIFxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICB9XG5cbiAgbG9hZFJlc291cmNlcygpIHtcbiAgICAgIFxuICAgIC8vTUVOVSBSRVNPVVJDRVNcbiAgICAvL21lbnUgYmFja2dyb3VuZFxuICAgIC8vdGV4dCBpbWFnZXNcbiAgICAvL211c2ljIGZpbGVzID9cbiAgICBcbiAgICAvL2xvYWQgZ2FtZSBkYXRhXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcbiAgXG4gICAgLy9HQU1FIFJFU09VUkNFU1xuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCdhc3NldHMvbWVkaXVtX2JvYXJkLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdkaWNlJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG4gICAgXG4gICAgLy8gbW9kYWwgaW1hZ2VzXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X25vJywnYXNzZXRzL3RleHRfbm8ucG5nJyk7XG5cbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLDExMCwxNjgpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzKCdib29tJywgJ2Fzc2V0cy9ib29tLnBuZycsICdhc3NldHMvYm9vbS5qc29uJywgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCk7XG5cbiAgICAvL2F1ZGlvIGZpbGVzIFxuICAgIFxuICAgIC8vdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Nyb3NzaGFpcnMnLCAnYXNzZXRzL2Nyb3NzaGFpcl9yZWRfc21hbGwucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfcmVhZHknLCAnYXNzZXRzL3RleHRfcmVhZHkucG5nJyk7XG5cbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xuXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZ3Vuc2hvdCcsJ2Fzc2V0cy9ndW5zaG90LndhdicpO1xuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcbiAgfVxuXG4gIG9uTG9hZENvbXBsZXRlKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc2V0dXAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XG4iLCJpbXBvcnQgRGljZSBmcm9tICcuLi9wcmVmYWJzL2RpY2UnO1xuXG5jbGFzcyBTZXR1cCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiB9XG4gIFxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcbiAgICBcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uc2V0dXAoKTtcbiAgICBcblx0dGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcbiAgICBcbiAgICB0aGlzLmRpY2UgPSBuZXcgRGljZSh0aGlzLmdhbWUsIDE1MCwgMTUwKTtcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZGljZSk7XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFscygpIHtcbiAgXG4gICAgLy8gU3RhcnQgR2FtZVxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbCh7XG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxuICAgICAgICBpdGVtc0FycjogW3tcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQXJlIHlvdSBoYXBweSB3aXRoXFxuIHRoYXQgY2xvbmUgbGF5b3V0P1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogLTgwLFxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfbm9cIixcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgXVxuICAgIH0pO1xuICAgIFxuICB9XG4gIFxuICBcbiAgXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcbiJdfQ==
