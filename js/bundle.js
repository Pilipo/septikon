(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],2:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],3:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
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

var _serverFull = require('./states/serverFull');

var _serverFull2 = _interopRequireDefault(_serverFull);

var _septikon = require('./prefabs/septikon');

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof Storage !== "undefined") {
    if (localStorage.getItem('septUUID') !== null) {
        var uuid = localStorage.getItem('septUUID');
    } else {
        var _uuid = require('uuid/v4')();
        localStorage.setItem('septUUID', _uuid);
    }
} else {
    console.error("Local Storage is required!");
}

// const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
var game = new Phaser.Game("100", "100", Phaser.AUTO);
game.septikon = new _septikon2.default(game);
game.client = new _client2.default(game.septikon);

game.state.add('boot', new _boot2.default());
game.state.add('game', new _game2.default());
game.state.add('setup', new _setup2.default());
game.state.add('preloader', new _preloader2.default());
game.state.add('gameover', new _gameover2.default());
game.state.add('serverFull', new _serverFull2.default());

game.state.start('boot');

},{"./prefabs/client":7,"./prefabs/septikon":16,"./states/boot":18,"./states/game":19,"./states/gameover":20,"./states/preloader":21,"./states/serverFull":22,"./states/setup":23,"uuid/v4":3}],5:[function(require,module,exports){
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
			var innerModal;
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

					innerModal = game.add.sprite(0, 0);
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
				innerModal = game.add.sprite(0, 0);
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

				modalLabel._offsetX = 0;
				modalLabel._offsetY = 0;
				modalLabel.lockPosition = lockPosition;
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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

var Biodrone = function (_Phaser$Sprite) {
  _inherits(Biodrone, _Phaser$Sprite);

  //initialization code in the constructor
  function Biodrone(game, x, y, frame, uuid) {
    _classCallCheck(this, Biodrone);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Biodrone.__proto__ || Object.getPrototypeOf(Biodrone)).call(this, game, x, y, 'biodrone', frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

    _this.uuid = uuid;
    //set size
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this biodrone occupies)
    _this.angle = _this.game.boardGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;

    return _this;
  }

  _createClass(Biodrone, [{
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

  return Biodrone;
}(Phaser.Sprite);

exports.default = Biodrone;

},{}],7:[function(require,module,exports){
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

        // All messages from server contain data.type and data.action
        // type = one of either "personnel" or "resource" or whatever. 
        // action = create, read, update, or delete.  
        this.socket.on('update', function (data) {
            if (data.type === "personnel") {
                this.septikon.updatePersonnel(data);
            } else if (data.type === "ordnance") {
                this.septikon.updateOrdnance(data);
            } else if (data.type === "resources") {
                this.septikon.updateResources(data);
            } else if (data.type === "tile") {
                this.septikon.updateTile(data);
            } else if (data.type === "dice") {
                this.septikon.game.dice.setValue(data.details.value);
            } else if (data.type === "arms") {
                // this may need to be a basic personnel update?
                console.log("update personnel arms!");
                console.log(data);
                this.septikon.updateArms(data);
            } else if (data.type === "info") {
                console.log(data);
                // this.septikon.updateInfo(data);
            } else {
                console.log(data);
            }
        });

        // Request messages are looking for client response to a modal message
        this.socket.on('request', function (data) {
            console.log('REQUEST: ');
            switch (data.details.type) {
                case "askStart":
                    this.septikon.showModal('askStart');
                    break;

            }
        });

        // This goes away
        this.socket.on('action', function (data) {
            console.log("ACTION: ");
            if (typeof this.septikon[data.callback] === "function") {
                console.log(data);
                this.septikon[data.callback](data.details);
            } else {
                console.log("ERROR: no method found called septikon." + data.callback);
            }
        });
    }

    _createClass(Client, [{
        key: 'askNewPlayer',
        value: function askNewPlayer() {
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

var Clone = function (_Phaser$Sprite) {
  _inherits(Clone, _Phaser$Sprite);

  //initialization code in the constructor
  function Clone(game, x, y, frame, uuid) {
    _classCallCheck(this, Clone);

    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this, game, x, y, 'clone', frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    _this.uuid = uuid;
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);
    _this.angle = _this.game.personnelGroup.angle * -1;
    _this.game.personnelGroup.add(_this);
    return _this;
  }

  _createClass(Clone, [{
    key: 'remove',
    value: function remove() {
      this.destroy();
    }
  }, {
    key: 'move',
    value: function move(point) {
      var targetPixels = this.game.septikon.tileToPixels(point.x, point.y);
      var distance = Math.abs(this.y - targetPixels.y + this.x - targetPixels.x).toFixed(1);
      var tween = this.game.add.tween(this).to({ x: targetPixels.x, y: targetPixels.y }, 1200, Phaser.Easing.Cubic.Out, true);
      // tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);
    }
  }]);

  return Clone;
}(Phaser.Sprite);

exports.default = Clone;

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
var Confirm = function (_Phaser$Sprite) {
    _inherits(Confirm, _Phaser$Sprite);

    //initialization code in the constructor
    function Confirm(game, x, y) {
        _classCallCheck(this, Confirm);

        //setup physics properties
        var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, game, x, y, 'text_go'));

        _this.anchor.setTo(0.5, 0.5);
        _this.game.physics.arcade.enableBody(_this);

        //set click event
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.clicked, _this);

        //set size
        _this.width = 50;
        _this.scale.y = Math.abs(_this.scale.x);
        // this.filters = [this.game.add.filter('Gray')];
        // this.alpha = 0.5;
        return _this;
    }

    _createClass(Confirm, [{
        key: 'clicked',
        value: function clicked() {
            this.game.client.sendInput({ event: 'confirmClicked' });
        }
    }, {
        key: 'enable',
        value: function enable() {
            // this.alpha = 1;
            this.filters = null;
            // this.inputEnabled = true;
        }
    }, {
        key: 'disable',
        value: function disable() {
            // this.alpha = 0.5;
            // this.filters = [this.game.add.filter('Gray')];
            // this.inputEnabled = false;
        }
    }]);

    return Confirm;
}(Phaser.Sprite);

exports.default = Confirm;

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

    //set click event
    _this.inputEnabled = true;
    _this.events.onInputDown.add(_this.clicked, _this);

    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);
    // this.filters = [this.game.add.filter('Gray')];
    // this.alpha = 0.5;

    _this.value = 10;
    _this.frame = _this.value - 1;
    return _this;
  }

  _createClass(Dice, [{
    key: 'clicked',
    value: function clicked() {
      this.game.client.sendInput({ event: 'diceClicked' });
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.alpha = 1;
      this.filters = null;
      this.inputEnabled = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      // this.alpha = 0.5;
      // this.filters = [this.game.add.filter('Gray')];
      // this.inputEnabled = false;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.value = value;
      this.frame = value - 1;
    }
  }]);

  return Dice;
}(Phaser.Sprite);

exports.default = Dice;

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ordnance = function (_Phaser$Sprite) {
  _inherits(Ordnance, _Phaser$Sprite);

  //initialization code in the constructor
  function Ordnance(game, x, y, frame, type, uuid) {
    _classCallCheck(this, Ordnance);

    var ordFrame;
    switch (type) {
      case "shield":
        ordFrame = 4;
        break;
      case "biodrone":
        ordFrame = 1;
        break;
      case "satellite":
        ordFrame = 5;
        break;
      case "rocket":
        ordFrame = 2;
        break;
      default:
        console.error("Bad ordnance type");
        break;
    }

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Ordnance.__proto__ || Object.getPrototypeOf(Ordnance)).call(this, game, x, y, 'ordnance', ordFrame));

    _this.anchor.setTo(0.5, 0.5);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

    _this.uuid = uuid;
    _this.type = type;
    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this clone occupies)
    _this.angle = _this.game.boardGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;

    return _this;
  }

  return Ordnance;
}(Phaser.Sprite);

exports.default = Ordnance;

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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
    }
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

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require("../prefabs/clone");

var _clone2 = _interopRequireDefault(_clone);

var _biodrone = require("../prefabs/biodrone");

var _biodrone2 = _interopRequireDefault(_biodrone);

var _ordnance = require("../prefabs/ordnance");

var _ordnance2 = _interopRequireDefault(_ordnance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Septikon = function () {
  //initialization code in the constructor
  function Septikon(game) {
    _classCallCheck(this, Septikon);

    this.game = game;
    this.player = {
      personnelArray: [],
      ordnanceArray: []
    };
    this.opponent = {
      personnelArray: [],
      ordnanceArray: []
    };

    this.shownTiles = [];
    this.tileArray = [];

    this.legalMoves = null;
    this.selectedToMove = null;
    this.legalGunners = null;

    this.choosingTargets = false;
    this.selectedGunners = [];
  }

  _createClass(Septikon, [{
    key: "updatePersonnel",
    value: function updatePersonnel(data) {
      // CRUD on personnel

      if (data.details.action === "create" || data.details.action === "add") {
        this.addPersonnel(data.details.personnel, data.details.playerID);
      } else if (data.details.action === "read") {} else if (data.details.action === "update" || data.details.action === "move") {
        console.log("moving personnel");
        for (var j = 0; j < this.player.personnelArray.length; j++) {
          var myPerson = this.player.personnelArray[j];
          if (myPerson.uuid === data.details.personnel.uuid) {
            console.log("Moving to " + data.details.personnel.x + ", " + data.details.personnel.y);
            myPerson.move({
              x: data.details.personnel.x,
              y: data.details.personnel.y
            });
          }
        }
      } else if (data.details.action === "delete" || data.details.action === "remove") {
        this.removePersonnel(data.details.personnel, data.details.playerID);
      } else {
        console.log("Data set is outside of CRUD:");
        console.log(data);
      }
    }
  }, {
    key: "updateOrdnance",
    value: function updateOrdnance(data) {}
  }, {
    key: "updateResources",
    value: function updateResources(data) {}
  }, {
    key: "updateArms",
    value: function updateArms(data) {
      console.log("shows weapons on clones");
    }
  }, {
    key: "updateTile",
    value: function updateTile(data) {
      this.tileArray[data.details.x][data.details.y].tileDetail = data.details.tile;
    }
  }, {
    key: "showModal",
    value: function showModal(type) {
      this.game.modal.showModal(type);
    }
  }, {
    key: "diceRolled",
    value: function diceRolled(details) {
      this.game.dice.setValue(details.value);
      this.legalMoves = details.gamePieces;
      var pointArray = [];
      // console.log(details.gamePieces[0].origin);
      for (var i = 0; i < details.gamePieces.length; i++) {
        pointArray.push({
          x: details.gamePieces[i].origin.x,
          y: details.gamePieces[i].origin.y
        });
      }
      this.showTiles(pointArray, 0xf63636);
    }
  }, {
    key: "offerDice",
    value: function offerDice() {
      this.game.dice.enable();
    }
  }, {
    key: "takeDice",
    value: function takeDice() {
      this.game.dice.disable();
    }
  }, {
    key: "addPersonnel",
    value: function addPersonnel(personnel, playerID) {
      var point = this.tileToPixels(personnel.x, personnel.y);
      var newPersonnel = null;
      if (personnel.typeEnum.CLONE === personnel.type) {
        newPersonnel = new _clone2.default(this.game, point.x, point.y, null, personnel.uuid);
      } else if (personnel.typeEnum.BIODRONE === personnel.type) {
        newPersonnel = new _biodrone2.default(this.game, point.x, point.y, null, personnel.uuid);
      }
      if (playerID == this.player.id) {
        this.player.personnelArray.push(newPersonnel);
      } else {
        this.opponent.personnelArray.push(newPersonnel);
      }
    }
  }, {
    key: "addOrdnance",
    value: function addOrdnance(details) {
      var point = this.tileToPixels(details.point.x, details.point.y);
      var ord = new _ordnance2.default(this.game, point.x, point.y, null, details.type, details.uuid);
      if (details.playerID == this.player.id) {
        this.player.ordnanceArray.push(ord);
      } else {
        this.opponent.ordnanceArray.push(ord);
      }
      this.game.boardGroup.add(ord);
    }
  }, {
    key: "movePersonnel",
    value: function movePersonnel(data) {
      var tween = null;
      var distance = null;
      var point = this.tileToPixels(data.x, data.y);
      for (var i in this.player.personnelArray) {
        if (this.player.personnelArray[i].uuid == data.uuid) {
          distance = Math.abs(this.player.personnelArray[i].y - point.y + this.player.personnelArray[i].x - point.x).toFixed(1);
          tween = this.game.add.tween(this.player.personnelArray[i]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
          // Trigger tile. Not quite sure how to do this yet.
          //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
        }
      }
      for (var j in this.opponent.personnelArray) {
        if (this.opponent.personnelArray[j].uuid == data.uuid) {
          distance = Math.abs(this.opponent.personnelArray[j].y - point.y + this.opponent.personnelArray[j].x - point.x).toFixed(1);
          tween = this.game.add.tween(this.opponent.personnelArray[j]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
        }
      }
    }
  }, {
    key: "moveOrdnance",
    value: function moveOrdnance(data) {
      var tween = null;
      var distance = null;
      var point = null;
      for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
        point = this.tileToPixels(data[dataIndex].x, data[dataIndex].y);
        for (var i in this.player.ordnanceArray) {
          if (this.player.ordnanceArray[i].uuid == data[dataIndex].uuid) {
            distance = Math.abs(this.player.ordnanceArray[i].y - point.y + this.player.ordnanceArray[i].x - point.x).toFixed(1);
            tween = this.game.add.tween(this.player.ordnanceArray[i]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
          }
        }
        for (var j in this.opponent.ordnanceArray) {
          if (this.opponent.ordnanceArray[j].uuid == data[dataIndex].uuid) {
            distance = Math.abs(this.opponent.ordnanceArray[j].y - point.y + this.opponent.ordnanceArray[j].x - point.x).toFixed(1);
            tween = this.game.add.tween(this.opponent.ordnanceArray[j]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
          }
        }
      }
    }
  }, {
    key: "removePersonnel",
    value: function removePersonnel(data) {
      console.log(this.game.personnelGroup.children);
      for (var i = 0; i < this.game.personnelGroup.children.length; i++) {
        if (this.game.personnelGroup.children[i].uuid === data.uuid) {
          this.game.personnelGroup.children[i].destroy();
        }
      }
      console.log(this.game.personnelGroup.children);
      return true;
      //   for (let i = 0; i < this.player.personnelArray.length; i++) {
      //       if (this.player.personnelArray[i].uuid == data.uuid) {
      //           let personnelToDestroy = this.player.personnelArray[i];
      //           this.player.personnelArray.splice(i,1);
      //           personnelToDestroy.destroy();
      //           return true;
      //       }
      //   }
      //   return false;
    }
  }, {
    key: "updatePlayer",
    value: function updatePlayer(details) {
      for (var i in details) {
        this.player[i] = details[i];
      }

      // DEBUG BLOCK
      // this.game.client.sendInput({ event: "tileClicked", x: 1, y: 20 });
      // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 17 });
      // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 16 });
      // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 15 });
      // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 14 });

      // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 6 });
      // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 5 });
      // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 4 });
      // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 3 });
      // this.game.client.sendInput({ event: "tileClicked", x: 29, y: 0 });

      // this.game.client.sendInput({ event: "confirmClicked"});
      // this.game.client.sendInput({ event: "diceClicked"});
    }
  }, {
    key: "initResources",
    value: function initResources() {
      var currentRec = null;
      var graphics = this.game.add.graphics(0, 0);
      //graphics.lineStyle(4, 0xffd900, 1);
      graphics.beginFill(0xffffff, 1);
      graphics.drawRoundedRect(100, 100, this.tileWidth - 4, this.tileHeight - 4, 14);

      for (var c in this.tileArray) {
        for (var r in this.tileArray[c]) {
          if (this.tileArray[c][r].tileOwner == this.player.id && this.tileArray[c][r].tileType == "warehouse") {
            if (r < 5 || r > 15) {
              currentRec = this.game.add.sprite(this.tileArray[c][r].x + this.tileArray[c][r].width / 2, this.tileArray[c][r].y + this.tileArray[c][r].width / 2, graphics.generateTexture());
              currentRec.angle = Math.floor(Math.random() * 40) - 20;
              currentRec.anchor.setTo(0.5);
              switch (this.tileArray[c][r].tileName) {
                case "energy":
                  currentRec.tint = 0xfce315;
                  break;
                case "oxygen":
                  currentRec.tint = 0x00b1f0;
                  break;
                case "rocket":
                  currentRec.tint = 0xe82a2c;
                  break;
                case "metal":
                  currentRec.tint = 0xfffffe;
                  break;
                case "biomass":
                  currentRec.tint = 0x8ac342;
                  break;
                case "biodrone":
                  currentRec.tint = 0x9f3a9b;
                  break;
                case "uranium":
                  currentRec.tint = 0xf36520;
                  break;
                default:
                  break;
              }
              this.game.boardGroup.add(currentRec);
            }
          }
        }
      }
      graphics.destroy();
    }
  }, {
    key: "createTileArray",
    value: function createTileArray(columns, rows, point) {
      this.tileDetail = this.game.cache.getJSON("tileDetail");

      this.tileStartCoordinates = { x: 0, y: 0 };

      var x, y;

      this.marginBottom = this.marginTop = this.game.boardGroup.height / 17.475;
      this.marginLeft = this.game.boardGroup.width / 24;
      this.marginRight = this.game.boardGroup.width / 26.3158;
      this.tileWidth = this.tileHeight = this.game.boardGroup.width / 39;
      this.padding = (this.game.boardGroup.width - (this.marginLeft + this.marginRight) - this.tileWidth * 31) / 30;

      //this.tileWidth = 25;//(this.backgroundWidth - ((this.marginLeft + this.marginRight) + (this.padding * (columns - 1)))) / columns;
      //this.tileHeight = 25;//(this.backgroundHeight - ((this.marginTop + this.marginBottom) + (this.padding * (rows - 1)))) / rows;

      this.tileStartCoordinates.x = point.x + this.marginLeft;
      this.tileStartCoordinates.y = point.y + this.marginTop;

      var graphics = this.game.add.graphics(0, 0);
      //graphics.lineStyle(4, 0xffd900, 1);
      graphics.beginFill(0xffffff, 1);
      graphics.drawRect(100, 100, this.tileWidth, this.tileHeight);

      for (var column = 0; column < columns; column++) {
        for (var row = 0; row < rows; row++) {
          x = this.tileStartCoordinates.x + this.tileWidth * column + (this.padding * column - 1);
          y = this.tileStartCoordinates.y + this.tileHeight * row + (this.padding * row - 1);
          //graphics.generateTexture();

          var currentTile = this.game.add.sprite(x, y, graphics.generateTexture());
          this.game.boardGroup.add(currentTile);
          currentTile.alpha = 0; // 0.25;
          currentTile.inputEnabled = true;
          currentTile.events.onInputDown.add(this.tileClicked, this);

          if (typeof this.tileArray[column] == "undefined") this.tileArray[column] = [];

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
            x = coords[0];
            y = coords[1];
            this.tileArray[x][y].tileDetail = {};
            this.tileArray[x][y].tileDetail.damaged = false;
            this.tileArray[x][y].tileDetail.occupied = false;
            this.tileArray[x][y].tileDetail.x = x;
            this.tileArray[x][y].tileDetail.y = y;
            this.tileArray[x][y].tileDetail.type = obj[prop].type;

            if (typeof this.tileArray[x][y] != "undefined") this.tileArray[x][y].tileDetail.name = obj[prop].name;else console.log(x + ":" + y + " not found!");

            if (x < 9) this.tileArray[x][y].tileDetail.owner = 1;else if (x > 20) this.tileArray[x][y].tileDetail.owner = 2;

            if (typeof obj[prop].properties != "undefined") {
              this.tileArray[x][y].tileDetail.properties = obj[prop].properties;
            }
          }
        }
      }
    }
  }, {
    key: "pixelsToTile",
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
    key: "tileToPixels",
    value: function tileToPixels(x, y) {
      var tileObj = this.tileArray[x][y];
      return {
        x: tileObj.x + tileObj.width / 2,
        y: tileObj.y + tileObj.height / 2
      };
    }
  }, {
    key: "tileClicked",
    value: function tileClicked(obj) {
      this.hideTiles();
      this.game.client.sendInput({
        event: "tileClicked",
        x: parseInt(obj.tileDetail.x),
        y: parseInt(obj.tileDetail.y)
      });

      // DEBUG BLOCK
      console.log("----TILE DETAIL----");
      console.log("Name: " + obj.tileDetail.name);
      console.log("Type: " + obj.tileDetail.type);
      console.log("Occupied: " + obj.tileDetail.occupied);
      console.log("Damaged: " + obj.tileDetail.damaged);
      console.log("X: " + obj.tileDetail.x + " Y:" + obj.tileDetail.y);
      //   this.addOrdnance({point:{x:obj.tileX, y:obj.tileY}, type:'biodrone', uuid:Math.random()});

      return;
    }
  }, {
    key: "showTiles",
    value: function showTiles(coordsArray, color) {
      console.log("SHOW TILES!!");
      console.log(coordsArray);
      // if(typeof(coordsArray.pointArray) !== 'undefined') {
      //     coordsArray = coordsArray.pointArray;
      // }
      for (var i in coordsArray) {
        this.tileArray[coordsArray[i].x][coordsArray[i].y].alpha = 0.5;
        if (color) {
          this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = color;
        } else {
          this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = 0xffd900;
        }
        this.shownTiles.push({ x: coordsArray[i].x, y: coordsArray[i].y });
      }
    }
  }, {
    key: "hideTiles",
    value: function hideTiles(tileArray) {
      if (!tileArray) {
        for (var i in this.shownTiles) {
          this.tileArray[this.shownTiles[i].x][this.shownTiles[i].y].alpha = 0;
        }
        this.shownTiles = [];
      }
    }
  }, {
    key: "damageTile",
    value: function damageTile(data) {
      var currentTile = this.tileArray[data.x][data.y];

      currentTile.tint = 0x333333;
      currentTile.alpha = 0.8;
      currentTile.tileDamaged = true;

      var test = this.game.add.sprite(currentTile.x, currentTile.y + currentTile.height / 2, "boom");
      this.game.boardGroup.add(test);
      test.angle = 270;
      test.anchor.set(0.5, 0.7);
      test.animations.add("boom");
      test.animations.play("boom", 20, false, true);
    }
  }, {
    key: "repairTile",
    value: function repairTile(data) {
      var currentTile = this.tileArray[data.x][data.y];
      currentTile.alpha = 0;
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.game.state.start("game");
    }
  }, {
    key: "serverFull",
    value: function serverFull() {
      this.game.state.start("serverFull");
    }
  }]);

  return Septikon;
}();

exports.default = Septikon;

},{"../prefabs/biodrone":6,"../prefabs/clone":8,"../prefabs/ordnance":13}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

var Token = function (_Phaser$Sprite) {
  _inherits(Token, _Phaser$Sprite);

  //initialization code in the constructor
  function Token(game, x, y, key, frame, uuid) {
    _classCallCheck(this, Token);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Token.__proto__ || Object.getPrototypeOf(Token)).call(this, game, x, y, key, frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);

    _this.uuid = uuid;
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this clone occupies)
    _this.angle = _this.game.personnelGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.personnelGroup.add(_this);
    return _this;
  }

  _createClass(Token, [{
    key: "remove",
    value: function remove() {
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
      this.destroy();
    }
  }, {
    key: "highlightOn",
    value: function highlightOn() {
      this.tint = 0xFF5500;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 1;
    }
  }, {
    key: "highlightOff",
    value: function highlightOff() {
      this.tint = 0xffffff;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 0;
    }
  }, {
    key: "move",
    value: function move(targetTile) {
      var targetPixels = this.game.septikon.tileToPixels(targetTile.x, targetTile.y);
      var distance = Math.abs(this.y - targetPixels.y + this.x - targetPixels.x).toFixed(1);
      var tween = this.game.add.tween(this).to({ x: targetPixels.x, y: targetPixels.y }, 2400, Phaser.Easing.Cubic.Out, true);
      tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);
    }
  }]);

  return Token;
}(Phaser.Sprite);

exports.default = Clone;

},{}],18:[function(require,module,exports){
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
      this.game.time.advancedTiming = true;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
      //setup device scaling
      if (!this.game.device.desktop) {
        this.game.scale.parentIsWindow = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.scale.minWidth = 480;
        this.game.scale.minHeight = 260;
        this.game.scale.forceOrientation(true);
      }

      this.initGlobalVariables();

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

},{"../prefabs/septikon":16}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dice = require('../prefabs/dice');

var _dice2 = _interopRequireDefault(_dice);

var _confirm = require('../prefabs/confirm');

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

            //this.game.input.onDown.add(this.toggleFullscreen, this);
            this.game.stage.disableVisibilityChange = true;

            this.game.boardGroup = this.game.add.group();
            this.game.personnelGroup = this.game.add.group();
            this.game.ordnanceGroup = this.game.add.group();
            this.game.resourcesGroup = this.game.add.group();
            this.game.hudGroup = this.game.add.group();

            this.game.modal = new gameModal(this.game);
            this.createModals();

            this.background = this.game.add.sprite(0, 0, 'background');
            this.background.anchor.setTo(0.5, 0.5);
            this.game.boardGroup.centerX = this.game.personnelGroup.centerX = this.game.ordnanceGroup.centerX = this.game.resourcesGroup.centerX = this.game.world.centerX;
            this.game.boardGroup.centerY = this.game.personnelGroup.centerY = this.game.ordnanceGroup.centerY = this.game.resourcesGroup.centerY = this.game.world.centerY;

            this.game.hudBg = this.game.add.sprite(0, 0, 'hud-bg');

            this.game.dice = new _dice2.default(this.game, 50, 40);
            this.game.dice.scale.setTo(0.25);
            this.game.confirm = new _confirm2.default(this.game, 40, 80);
            this.game.confirm.scale.setTo(0.25);

            this.game.add.existing(this.game.dice);
            this.game.add.existing(this.game.confirm);

            this.game.hudGroup.add(this.game.hudBg);
            this.game.hudGroup.add(this.game.dice);
            this.game.hudGroup.add(this.game.confirm);
            this.game.boardGroup.add(this.background);

            this.game.septikon.createTileArray(31, 21, { x: 0 - this.background.width / 2, y: 0 - this.background.height / 2 });

            this.refreshBoard();
        }
    }, {
        key: 'createModals',
        value: function createModals() {
            this.game.modal.createModal({
                type: "askStart",
                includeBackground: false,
                modalCloseOnInput: false,
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
                        this.game.modal.hideModal("askStart");
                        this.game.client.sendInput({ event: 'setPlayerState', value: 'start' });
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
    }, {
        key: 'refreshBoard',
        value: function refreshBoard() {

            var scale = window.innerWidth / this.background.height;
            if (scale > 1.9) {
                scale = 1.9;
            }
            this.game.personnelGroup.scale.setTo(scale);
            this.game.ordnanceGroup.scale.setTo(scale);
            this.game.resourcesGroup.scale.setTo(scale);
            this.game.boardGroup.scale.setTo(scale);
            this.game.personnelGroup.scale = this.game.ordnanceGroup.scale = this.game.resourcesGroup.scale = this.game.boardGroup.scale;
            this.game.boardGroup.x = this.game.world.centerX;
            this.game.personnelGroup.x = this.game.ordnanceGroup.x = this.game.resourcesGroup.x = this.game.boardGroup.x;

            if (this.game.septikon.player.id == 1) {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = -90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            } else {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            }
        }
    }, {
        key: 'update',
        value: function update() {
            //   this.dice.frame = Math.floor(Math.random() * 6) + 1;
            // this.game.debug.text('Mouse', 700, 32);

            // this.game.debug.text('Mouse X: ' + this.game.input.x, 700, 64);
            // this.game.debug.text('Mouse Y: ' + this.game.input.y, 700, 92);
        }
    }, {
        key: 'render',
        value: function render() {
            this.refreshBoard();
            /*
            var x = 32;
            var y = 0;
            var yi = 32;
            this.game.debug.text('Viewport', x, y += yi);
            this.game.debug.text('Viewport Width: ' + this.game.scale.viewportWidth, x, y += yi);
            this.game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
            this.game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);
            this.game.debug.text('Viewport Height: ' + this.game.scale.viewportHeight, x, y += yi);
            this.game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
            this.game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);
            //  Device: How to get device size.
            //  Use window.screen.width for device width and window.screen.height for device height. 
            //  .availWidth and .availHeight give you the device size minus UI taskbars. (Try on an iPhone.) 
            //  Device size is static and does not change when the page is resized or rotated.
            x = 350;
            y = 0;
            this.game.debug.text('Board Group', x, y += yi);
            this.game.debug.text('this.game.boardGroup.x: ' + this.game.boardGroup.x, x, y += yi);
            this.game.debug.text('this.game.boardGroup.y: ' + this.game.boardGroup.y, x, y += yi);
            this.game.debug.text('this.game.boardGroup.width: ' + this.game.boardGroup.width, x, y += yi);
            this.game.debug.text('this.game.boardGroup.height: ' + this.game.boardGroup.height, x, y += yi);
            x = 32;
            y = 300;
            this.game.debug.text('Background Detail', x, y += yi);
            this.game.debug.text('this.background.x: ' + this.background.x, x, y += yi);
            this.game.debug.text('this.background.y: ' + this.background.y, x, y += yi);
            this.game.debug.text('this.background.width: ' + this.background.width, x, y += yi);
            this.game.debug.text('this.background.height: ' + this.background.height, x, y += yi);
            this.game.debug.text('this.background.scale: ' + this.game.boardGroup.scale.x, x, y += yi);
            */
        }
    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            if (this.game.scale.isFullScreen) {
                this.game.scale.stopFullScreen();
            } else {
                this.game.scale.startFullScreen(false);
            }
        }
    }]);

    return Game;
}(Phaser.State);

exports.default = Game;

},{"../prefabs/confirm":9,"../prefabs/dice":11}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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
      //  Load filter scripts
      // this.game.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/Gray.js');
      this.game.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Gray.js');

      //load game data
      this.game.load.json('tileDetail', 'assets/tileDetail.json');
      this.game.load.json('wallGrid', 'assets/wallGrid.json');

      //GAME RESOURCES
      //game board background
      this.game.load.image('background', 'assets/medium_board.png');
      this.game.load.spritesheet('dice', 'assets/dice.png', 128, 194, 10);
      this.game.load.image('hud-bg', 'assets/hud-bg.png');

      // modal images
      this.game.load.image('text_yes', 'assets/text_yes.png');
      this.game.load.image('text_no', 'assets/text_no.png');
      this.game.load.image('text_go', 'assets/text_go.png');

      //player tokens spritesheets
      this.game.load.spritesheet('clone', 'assets/clone.png', 110, 168);
      this.game.load.spritesheet('ordnance', 'assets/ordnance.png', 264, 264, 7);
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
      //this.game.state.start('game');
    }
  }]);

  return Preloader;
}(Phaser.State);

exports.default = Preloader;

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _septikon = require("../prefabs/septikon");

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerFull = function (_Phaser$State) {
  _inherits(ServerFull, _Phaser$State);

  function ServerFull() {
    _classCallCheck(this, ServerFull);

    return _possibleConstructorReturn(this, (ServerFull.__proto__ || Object.getPrototypeOf(ServerFull)).call(this));
  }

  _createClass(ServerFull, [{
    key: "create",
    value: function create() {
      console.log("Server is full. Try again later.");
    }
  }]);

  return ServerFull;
}(Phaser.State);

exports.default = ServerFull;

},{"../prefabs/septikon":16}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            this.game.name = "user";

            this.game.stage.disableVisibilityChange = true;

            // this.game.modal = new gameModal(this.game);
            // this.createModals();
            // this.game.modal.showModal('username');

            // this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
            // this.bksp = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
            // this.bksp.onDown.add(this.keyPress, this);
            // this.enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            // this.enter.onDown.add(this.keyPress, this);
            this.game.client.askNewPlayer();
            this.game.state.start('game');
            return;
            //this.game.septikon.setup();
        }
    }, {
        key: "keyPress",
        value: function keyPress(char) {

            if ((typeof char === "undefined" ? "undefined" : _typeof(char)) === "object") {
                if (char.event.code === "Enter") {
                    this.game.state.start('game');
                    return;
                } else if (char.event.code === "Backspace") {
                    this.game.name = this.game.name.substring(0, this.game.name.length - 1);
                }
            } else {
                if (char == " ") {
                    char = "_";
                }
                this.game.name += char;
            }
            this.game.modal.updateModalValue(this.game.name, 'username', 4);
        }
    }, {
        key: "createModals",
        value: function createModals() {

            // Start Game
            this.game.modal.createModal({
                type: "username",
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
                    content: "Type a username,\nthen hit <ENTER>\n\n(max of 25 characters)",
                    fontFamily: "Luckiest Guy",
                    fontSize: 22,
                    color: "0x1e1e1e",
                    offsetY: -50
                }, {
                    type: "text",
                    content: this.game.name,
                    fontFamily: "Luckiest Guy",
                    fontSize: 22,
                    color: "0x1e1e1e",
                    offsetY: 50
                }]
            });
        }
    }]);

    return Setup;
}(Phaser.State);

exports.default = Setup;

},{}]},{},[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9jbGllbnQvbWFpbi5qcyIsInNyYy9jbGllbnQvbW9kYWwuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvYmlvZHJvbmUuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL2Nsb25lLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL2NvbmZpcm0uanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvY3Jvc3NoYWlycy5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9kaWNlLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9vcmRuYW5jZS5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9wZXJzb25uZWwuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL3NlcHRpa29uLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL3Rva2VuLmpzIiwic3JjL2NsaWVudC9zdGF0ZXMvYm9vdC5qcyIsInNyYy9jbGllbnQvc3RhdGVzL2dhbWUuanMiLCJzcmMvY2xpZW50L3N0YXRlcy9nYW1lb3Zlci5qcyIsInNyYy9jbGllbnQvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9jbGllbnQvc3RhdGVzL3NlcnZlckZ1bGwuanMiLCJzcmMvY2xpZW50L3N0YXRlcy9zZXR1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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SUFBVixDQUFlLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLE1BQWYsR0FBd0IsQ0FBcEQsQ0FBakI7QUFDSDtBQUNKLGFBUEQsTUFPTztBQUNILG9CQUFJLFFBQVEsR0FBWixFQUFpQjtBQUNiLDJCQUFPLEdBQVA7QUFDSDtBQUNELHFCQUFLLElBQUwsQ0FBVSxJQUFWLElBQWtCLElBQWxCO0FBQ0g7QUFDRCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixnQkFBaEIsQ0FBaUMsS0FBSyxJQUFMLENBQVUsSUFBM0MsRUFBaUQsVUFBakQsRUFBNkQsQ0FBN0Q7QUFDSDs7O3VDQUVnQjs7QUFFYjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLENBQ0k7QUFDQSxzQkFBTSxVQUROO0FBRUEsbUNBQW1CLElBRm5CO0FBR0EsbUNBQW1CLElBSG5CO0FBSUEsMEJBQVUsQ0FBQztBQUNQLDBCQUFNLFVBREM7QUFFUCxrQ0FBYyxVQUZQO0FBR1Asa0NBQWMsR0FIUDtBQUlQLG1DQUFlLEdBSlI7QUFLUCxtQ0FBZTtBQUxSLGlCQUFELEVBTVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMsOERBRlY7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUyxDQUFDO0FBTlgsaUJBTk8sRUFhUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyxLQUFLLElBQUwsQ0FBVSxJQUZwQjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTO0FBTlYsaUJBYk87QUFKVixhQURKO0FBNEJEOzs7O0VBNUVpQixPQUFPLEs7O2tCQStFWixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcbmltcG9ydCBTZXJ2ZXJGdWxsIGZyb20gJy4vc3RhdGVzL3NlcnZlckZ1bGwnO1xuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xufVxuXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcIjEwMFwiLCBcIjEwMFwiLCBQaGFzZXIuQVVUTyk7XG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xuXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NlcnZlckZ1bGwnLCBuZXcgU2VydmVyRnVsbCgpKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcblxuXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdGdhbWUubW9kYWxzID0ge307XG5cblx0LyoqXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcblxuXHRcdFx0dmFyIG1vZGFsO1xuXHRcdFx0dmFyIGlubmVyTW9kYWw7XG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xuXHRcdFx0XHRtb2RhbC54ID0gMDtcblx0XHRcdFx0bW9kYWwueSA9IDA7XG5cblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcblxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xuXHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0Jztcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XG5cblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcblxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbC5sb2NrUG9zaXRpb24gPSBsb2NrUG9zaXRpb247XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XG5cblx0XHR9LFxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHR9LFxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xuXHRcdH1cblx0fTtcbn07XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQmlvZHJvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgICBzdXBlcihnYW1lLCB4LCB5LCAnYmlvZHJvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgXHJcbiAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgIC8vc2V0IHNpemVcclxuICAgICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgICBcclxuICAgICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgYmlvZHJvbmUgb2NjdXBpZXMpXHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG4gIFxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICBcclxuICAgIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xyXG4gICAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICAgIFxyXG4gICAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBNb3ZlIHRvIG5ldyBob21lXHJcbiAgICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xyXG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBCaW9kcm9uZTtcclxuICAiLCJcbmNsYXNzIENsaWVudCB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XG4gICAgICAgIFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFsbCBtZXNzYWdlcyBmcm9tIHNlcnZlciBjb250YWluIGRhdGEudHlwZSBhbmQgZGF0YS5hY3Rpb25cbiAgICAgICAgLy8gdHlwZSA9IG9uZSBvZiBlaXRoZXIgXCJwZXJzb25uZWxcIiBvciBcInJlc291cmNlXCIgb3Igd2hhdGV2ZXIuIFxuICAgICAgICAvLyBhY3Rpb24gPSBjcmVhdGUsIHJlYWQsIHVwZGF0ZSwgb3IgZGVsZXRlLiAgXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09IFwicGVyc29ubmVsXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZVBlcnNvbm5lbChkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcIm9yZG5hbmNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZU9yZG5hbmNlKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwicmVzb3VyY2VzXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZVJlc291cmNlcyhkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcInRpbGVcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24udXBkYXRlVGlsZShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImRpY2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uZ2FtZS5kaWNlLnNldFZhbHVlKGRhdGEuZGV0YWlscy52YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJhcm1zXCIpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1heSBuZWVkIHRvIGJlIGEgYmFzaWMgcGVyc29ubmVsIHVwZGF0ZT9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBwZXJzb25uZWwgYXJtcyFcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVBcm1zKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiaW5mb1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXB0aWtvbi51cGRhdGVJbmZvKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVxdWVzdCBtZXNzYWdlcyBhcmUgbG9va2luZyBmb3IgY2xpZW50IHJlc3BvbnNlIHRvIGEgbW9kYWwgbWVzc2FnZVxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVxdWVzdCcsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFza1N0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIGdvZXMgYXdheVxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFDVElPTjogXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZih0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IG5vIG1ldGhvZCBmb3VuZCBjYWxsZWQgc2VwdGlrb24uXCIgKyBkYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cblxuXHRhc2tOZXdQbGF5ZXIoKSB7XG5cdFx0dGhpcy5zb2NrZXQuZW1pdCgnbmV3UGxheWVyJywge3V1aWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyl9KTtcblx0fVxuICAgIFxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIGlucHV0Jyk7XG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2lucHV0JywgcGF5bG9hZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuXG5jbGFzcyBDbG9uZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHV1aWQpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMud2lkdGggPSAyNztcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgKiAtMTtcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYWRkKHRoaXMpO1xuICB9XG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfSAgXG4gIG1vdmUocG9pbnQpIHtcbiAgICBsZXQgdGFyZ2V0UGl4ZWxzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhwb2ludC54LCBwb2ludC55KTtcbiAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSB0YXJnZXRQaXhlbHMueSArIHRoaXMueCAtIHRhcmdldFBpeGVscy54KS50b0ZpeGVkKDEpO1xuICAgIGxldCB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnRhcmdldFBpeGVscy54LCB5OnRhcmdldFBpeGVscy55fSwgMTIwMCwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgIC8vIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIENvbmZpcm0gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7ICBcclxuICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3RleHRfZ28nKTtcclxuICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuICBcclxuICAgICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5jbGlja2VkLCB0aGlzKTtcclxuICBcclxuICAgICAgLy9zZXQgc2l6ZVxyXG4gICAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgIH1cclxuICBcclxuICAgIGNsaWNrZWQgKCkge1xyXG4gICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdjb25maXJtQ2xpY2tlZCd9KTtcclxuICAgIH1cclxuICBcclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgICAvLyB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29uZmlybTtcclxuICAiLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcblxuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gMzU7IFxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG5cbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XG5cbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcblxuICAgIC8vc2V0IGNsaWNrIGV2ZW50XG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAvLyB0aGlzLmFscGhhID0gMC41O1xuICAgIFxuICAgIHRoaXMudmFsdWUgPSAxMDtcbiAgICB0aGlzLmZyYW1lID0gdGhpcy52YWx1ZS0xO1xuICB9XG5cbiAgY2xpY2tlZCAoKSB7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcbiAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyYW1lID0gdmFsdWUgLSAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpY2U7XG4iLCJjbGFzcyBNYXN0ZXIge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7IiwiY2xhc3MgT3JkbmFuY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB0eXBlLCB1dWlkKSB7XG4gICAgdmFyIG9yZEZyYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInNoaWVsZFwiOlxuICAgICAgICBvcmRGcmFtZSA9IDQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgIG9yZEZyYW1lID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgIG9yZEZyYW1lID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgIG9yZEZyYW1lID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFkIG9yZG5hbmNlIHR5cGVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnb3JkbmFuY2UnLCBvcmRGcmFtZSk7XG4gICAgICAgIFxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxuICAgIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIE9YWUdFTjogMCxcbiAgICAgICAgUk9DS0VUOiAxLFxuICAgICAgICBNRVRBTDogMixcbiAgICAgICAgRU5FUkdZOiAzLFxuICAgICAgICBCSU9NQVNTOiA0LFxuICAgICAgICBCSU9EUk9ORTogNSxcbiAgICAgICAgVVJBTklVTTogNlxuICAgIH0pO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XG4gICAgfVxuICB9XG4gIFxuICBjaGVjayh0eXBlLCBjb3VudCkge1xuICAgIGlmKHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA+IGNvdW50KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBnZXRDb3VudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xuICB9XG4gICAgXG4gIGFkZCh0eXBlLCBjb3VudCkge1xuICB9XG4gIFxuICByZW1vdmUodHlwZSwgY291bnQpIHtcbiAgICB0aGlzLnJlc291cmNlc1t0eXBlXSAtPSBjb3VudDtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tIFwiLi4vcHJlZmFicy9jbG9uZVwiO1xuaW1wb3J0IEJpb2Ryb25lIGZyb20gXCIuLi9wcmVmYWJzL2Jpb2Ryb25lXCI7XG5pbXBvcnQgT3JkbmFuY2UgZnJvbSBcIi4uL3ByZWZhYnMvb3JkbmFuY2VcIjtcblxuY2xhc3MgU2VwdGlrb24ge1xuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMucGxheWVyID0ge1xuICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgb3JkbmFuY2VBcnJheTogW11cbiAgICB9O1xuICAgIHRoaXMub3Bwb25lbnQgPSB7XG4gICAgICBwZXJzb25uZWxBcnJheTogW10sXG4gICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG5cbiAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xuXG4gICAgdGhpcy5sZWdhbE1vdmVzID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkVG9Nb3ZlID0gbnVsbDtcbiAgICB0aGlzLmxlZ2FsR3VubmVycyA9IG51bGw7XG5cbiAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cblxuICB1cGRhdGVQZXJzb25uZWwoZGF0YSkge1xuICAgIC8vIENSVUQgb24gcGVyc29ubmVsXG5cbiAgICBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJjcmVhdGVcIiB8fCBkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcImFkZFwiKSB7XG4gICAgICB0aGlzLmFkZFBlcnNvbm5lbChkYXRhLmRldGFpbHMucGVyc29ubmVsLCBkYXRhLmRldGFpbHMucGxheWVySUQpO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJyZWFkXCIpIHtcbiAgICB9IGVsc2UgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwidXBkYXRlXCIgfHwgZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJtb3ZlXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibW92aW5nIHBlcnNvbm5lbFwiKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IG15UGVyc29uID0gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbal07XG4gICAgICAgIGlmIChteVBlcnNvbi51dWlkID09PSBkYXRhLmRldGFpbHMucGVyc29ubmVsLnV1aWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vdmluZyB0byBcIiArIGRhdGEuZGV0YWlscy5wZXJzb25uZWwueCArIFwiLCBcIiArIGRhdGEuZGV0YWlscy5wZXJzb25uZWwueSk7XG4gICAgICAgICAgbXlQZXJzb24ubW92ZSh7XG4gICAgICAgICAgICB4OmRhdGEuZGV0YWlscy5wZXJzb25uZWwueCxcbiAgICAgICAgICAgIHk6ZGF0YS5kZXRhaWxzLnBlcnNvbm5lbC55XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiZGVsZXRlXCIgfHwgZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgdGhpcy5yZW1vdmVQZXJzb25uZWwoZGF0YS5kZXRhaWxzLnBlcnNvbm5lbCwgZGF0YS5kZXRhaWxzLnBsYXllcklEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJEYXRhIHNldCBpcyBvdXRzaWRlIG9mIENSVUQ6XCIpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3JkbmFuY2UoZGF0YSkge31cblxuICB1cGRhdGVSZXNvdXJjZXMoZGF0YSkge31cblxuICB1cGRhdGVBcm1zKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcInNob3dzIHdlYXBvbnMgb24gY2xvbmVzXCIpO1xuICB9XG5cbiAgdXBkYXRlVGlsZShkYXRhKSB7XG4gICAgdGhpcy50aWxlQXJyYXlbZGF0YS5kZXRhaWxzLnhdW2RhdGEuZGV0YWlscy55XS50aWxlRGV0YWlsID1cbiAgICAgIGRhdGEuZGV0YWlscy50aWxlO1xuICB9XG5cbiAgc2hvd01vZGFsKHR5cGUpIHtcbiAgICB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKHR5cGUpO1xuICB9XG5cbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XG4gICAgdGhpcy5nYW1lLmRpY2Uuc2V0VmFsdWUoZGV0YWlscy52YWx1ZSk7XG4gICAgdGhpcy5sZWdhbE1vdmVzID0gZGV0YWlscy5nYW1lUGllY2VzO1xuICAgIHZhciBwb2ludEFycmF5ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coZGV0YWlscy5nYW1lUGllY2VzWzBdLm9yaWdpbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXRhaWxzLmdhbWVQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50QXJyYXkucHVzaCh7XG4gICAgICAgIHg6IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW4ueCxcbiAgICAgICAgeTogZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbi55XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zaG93VGlsZXMocG9pbnRBcnJheSwgMHhmNjM2MzYpO1xuICB9XG5cbiAgb2ZmZXJEaWNlKCkge1xuICAgIHRoaXMuZ2FtZS5kaWNlLmVuYWJsZSgpO1xuICB9XG5cbiAgdGFrZURpY2UoKSB7XG4gICAgdGhpcy5nYW1lLmRpY2UuZGlzYWJsZSgpO1xuICB9XG5cbiAgYWRkUGVyc29ubmVsKHBlcnNvbm5lbCwgcGxheWVySUQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhwZXJzb25uZWwueCwgcGVyc29ubmVsLnkpO1xuICAgIGxldCBuZXdQZXJzb25uZWwgPSBudWxsO1xuICAgIGlmIChwZXJzb25uZWwudHlwZUVudW0uQ0xPTkUgPT09IHBlcnNvbm5lbC50eXBlKSB7XG4gICAgICBuZXdQZXJzb25uZWwgPSBuZXcgQ2xvbmUoXG4gICAgICAgIHRoaXMuZ2FtZSxcbiAgICAgICAgcG9pbnQueCxcbiAgICAgICAgcG9pbnQueSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGVyc29ubmVsLnV1aWRcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChwZXJzb25uZWwudHlwZUVudW0uQklPRFJPTkUgPT09IHBlcnNvbm5lbC50eXBlKSB7XG4gICAgICBuZXdQZXJzb25uZWwgPSBuZXcgQmlvZHJvbmUoXG4gICAgICAgIHRoaXMuZ2FtZSxcbiAgICAgICAgcG9pbnQueCxcbiAgICAgICAgcG9pbnQueSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgcGVyc29ubmVsLnV1aWRcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xuICAgICAgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkucHVzaChuZXdQZXJzb25uZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2gobmV3UGVyc29ubmVsKTtcbiAgICB9XG4gIH1cblxuICBhZGRPcmRuYW5jZShkZXRhaWxzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGV0YWlscy5wb2ludC54LCBkZXRhaWxzLnBvaW50LnkpO1xuICAgIHZhciBvcmQgPSBuZXcgT3JkbmFuY2UoXG4gICAgICB0aGlzLmdhbWUsXG4gICAgICBwb2ludC54LFxuICAgICAgcG9pbnQueSxcbiAgICAgIG51bGwsXG4gICAgICBkZXRhaWxzLnR5cGUsXG4gICAgICBkZXRhaWxzLnV1aWRcbiAgICApO1xuICAgIGlmIChkZXRhaWxzLnBsYXllcklEID09IHRoaXMucGxheWVyLmlkKSB7XG4gICAgICB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKG9yZCk7XG4gIH1cblxuICBtb3ZlUGVyc29ubmVsKGRhdGEpIHtcbiAgICBsZXQgdHdlZW4gPSBudWxsO1xuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XG4gICAgbGV0IHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YS54LCBkYXRhLnkpO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKFxuICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnkgLVxuICAgICAgICAgICAgcG9pbnQueSArXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS54IC1cbiAgICAgICAgICAgIHBvaW50LnhcbiAgICAgICAgKS50b0ZpeGVkKDEpO1xuICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGRcbiAgICAgICAgICAudHdlZW4odGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0pXG4gICAgICAgICAgLnRvKFxuICAgICAgICAgICAgeyB4OiBwb2ludC54LCB5OiBwb2ludC55IH0sXG4gICAgICAgICAgICBkaXN0YW5jZSAqIDExLFxuICAgICAgICAgICAgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXG4gICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGogaW4gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheSkge1xuICAgICAgaWYgKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhcbiAgICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnkgLVxuICAgICAgICAgICAgcG9pbnQueSArXG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLVxuICAgICAgICAgICAgcG9pbnQueFxuICAgICAgICApLnRvRml4ZWQoMSk7XG4gICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZFxuICAgICAgICAgIC50d2Vlbih0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdKVxuICAgICAgICAgIC50byhcbiAgICAgICAgICAgIHsgeDogcG9pbnQueCwgeTogcG9pbnQueSB9LFxuICAgICAgICAgICAgZGlzdGFuY2UgKiAxMSxcbiAgICAgICAgICAgIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZU9yZG5hbmNlKGRhdGEpIHtcbiAgICB2YXIgdHdlZW4gPSBudWxsO1xuICAgIHZhciBkaXN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHBvaW50ID0gbnVsbDtcbiAgICBmb3IgKHZhciBkYXRhSW5kZXggPSAwOyBkYXRhSW5kZXggPCBkYXRhLmxlbmd0aDsgZGF0YUluZGV4KyspIHtcbiAgICAgIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YVtkYXRhSW5kZXhdLngsIGRhdGFbZGF0YUluZGV4XS55KTtcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheSkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS51dWlkID09IGRhdGFbZGF0YUluZGV4XS51dWlkKSB7XG4gICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0ueSAtXG4gICAgICAgICAgICAgIHBvaW50LnkgK1xuICAgICAgICAgICAgICB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnggLVxuICAgICAgICAgICAgICBwb2ludC54XG4gICAgICAgICAgKS50b0ZpeGVkKDEpO1xuICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZFxuICAgICAgICAgICAgLnR3ZWVuKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0pXG4gICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgIHsgeDogcG9pbnQueCwgeTogcG9pbnQueSB9LFxuICAgICAgICAgICAgICBkaXN0YW5jZSAqIDExLFxuICAgICAgICAgICAgICBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS51dWlkID09IGRhdGFbZGF0YUluZGV4XS51dWlkKSB7XG4gICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS55IC1cbiAgICAgICAgICAgICAgcG9pbnQueSArXG4gICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS54IC1cbiAgICAgICAgICAgICAgcG9pbnQueFxuICAgICAgICAgICkudG9GaXhlZCgxKTtcbiAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGRcbiAgICAgICAgICAgIC50d2Vlbih0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0pXG4gICAgICAgICAgICAudG8oXG4gICAgICAgICAgICAgIHsgeDogcG9pbnQueCwgeTogcG9pbnQueSB9LFxuICAgICAgICAgICAgICBkaXN0YW5jZSAqIDExLFxuICAgICAgICAgICAgICBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBlcnNvbm5lbChkYXRhKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNoaWxkcmVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbltpXS51dWlkID09PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICBpZiAodGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAvLyAgICAgICAgICAgbGV0IHBlcnNvbm5lbFRvRGVzdHJveSA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldO1xuICAgIC8vICAgICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5zcGxpY2UoaSwxKTtcbiAgICAvLyAgICAgICAgICAgcGVyc29ubmVsVG9EZXN0cm95LmRlc3Ryb3koKTtcbiAgICAvLyAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlUGxheWVyKGRldGFpbHMpIHtcbiAgICBmb3IgKHZhciBpIGluIGRldGFpbHMpIHtcbiAgICAgIHRoaXMucGxheWVyW2ldID0gZGV0YWlsc1tpXTtcbiAgICB9XG5cbiAgICAvLyBERUJVRyBCTE9DS1xuICAgIC8vIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogMSwgeTogMjAgfSk7XG4gICAgLy8gdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiAwLCB5OiAxNyB9KTtcbiAgICAvLyB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7IGV2ZW50OiBcInRpbGVDbGlja2VkXCIsIHg6IDAsIHk6IDE2IH0pO1xuICAgIC8vIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogMCwgeTogMTUgfSk7XG4gICAgLy8gdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiAwLCB5OiAxNCB9KTtcblxuICAgIC8vIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogMzAsIHk6IDYgfSk7XG4gICAgLy8gdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiAzMCwgeTogNSB9KTtcbiAgICAvLyB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7IGV2ZW50OiBcInRpbGVDbGlja2VkXCIsIHg6IDMwLCB5OiA0IH0pO1xuICAgIC8vIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogMzAsIHk6IDMgfSk7XG4gICAgLy8gdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiAyOSwgeTogMCB9KTtcblxuICAgIC8vIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwiY29uZmlybUNsaWNrZWRcIn0pO1xuICAgIC8vIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwiZGljZUNsaWNrZWRcIn0pO1xuICB9XG5cbiAgaW5pdFJlc291cmNlcygpIHtcbiAgICB2YXIgY3VycmVudFJlYyA9IG51bGw7XG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmLCAxKTtcbiAgICBncmFwaGljcy5kcmF3Um91bmRlZFJlY3QoXG4gICAgICAxMDAsXG4gICAgICAxMDAsXG4gICAgICB0aGlzLnRpbGVXaWR0aCAtIDQsXG4gICAgICB0aGlzLnRpbGVIZWlnaHQgLSA0LFxuICAgICAgMTRcbiAgICApO1xuXG4gICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU93bmVyID09IHRoaXMucGxheWVyLmlkICYmXG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbY11bcl0udGlsZVR5cGUgPT0gXCJ3YXJlaG91c2VcIlxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAociA8IDUgfHwgciA+IDE1KSB7XG4gICAgICAgICAgICBjdXJyZW50UmVjID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoXG4gICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdLnggKyB0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aCAvIDIsXG4gICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdLnkgKyB0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aCAvIDIsXG4gICAgICAgICAgICAgIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudFJlYy5hbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKSAtIDIwO1xuICAgICAgICAgICAgY3VycmVudFJlYy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU5hbWUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImVuZXJneVwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmNlMzE1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwib3h5Z2VuXCI6XG4gICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHgwMGIxZjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGU4MmEyYztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm1ldGFsXCI6XG4gICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmZmZmZmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJiaW9tYXNzXCI6XG4gICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHg4YWMzNDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OWYzYTliO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwidXJhbml1bVwiOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZjM2NTIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRSZWMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBncmFwaGljcy5kZXN0cm95KCk7XG4gIH1cblxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcbiAgICB0aGlzLnRpbGVEZXRhaWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihcInRpbGVEZXRhaWxcIik7XG5cbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICB2YXIgeCwgeTtcblxuICAgIHRoaXMubWFyZ2luQm90dG9tID0gdGhpcy5tYXJnaW5Ub3AgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQgLyAxNy40NzU7XG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLyAyNDtcbiAgICB0aGlzLm1hcmdpblJpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLyAyNi4zMTU4O1xuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLyAzOTtcbiAgICB0aGlzLnBhZGRpbmcgPVxuICAgICAgKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC1cbiAgICAgICAgKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpIC1cbiAgICAgICAgdGhpcy50aWxlV2lkdGggKiAzMSkgL1xuICAgICAgMzA7XG5cbiAgICAvL3RoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcblxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xuXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmLCAxKTtcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XG5cbiAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgeCA9XG4gICAgICAgICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICtcbiAgICAgICAgICB0aGlzLnRpbGVXaWR0aCAqIGNvbHVtbiArXG4gICAgICAgICAgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xuICAgICAgICB5ID1cbiAgICAgICAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgK1xuICAgICAgICAgIHRoaXMudGlsZUhlaWdodCAqIHJvdyArXG4gICAgICAgICAgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xuICAgICAgICAvL2dyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xuXG4gICAgICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xuICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDA7IC8vIDAuMjU7XG4gICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xuXG4gICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl1bcm93XSA9IGN1cnJlbnRUaWxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnRpbGVEZXRhaWwpIHtcbiAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgb2JqID0gdGhpcy50aWxlRGV0YWlsW2tleV07XG4gICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xuICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICB4ID0gY29vcmRzWzBdO1xuICAgICAgICAgIHkgPSBjb29yZHNbMV07XG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbCA9IHt9O1xuICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwuZGFtYWdlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLnggPSB4O1xuICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwueSA9IHk7XG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC50eXBlID0gb2JqW3Byb3BdLnR5cGU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLm5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcbiAgICAgICAgICBlbHNlIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuXG4gICAgICAgICAgaWYgKHggPCA5KSB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLm93bmVyID0gMTtcbiAgICAgICAgICBlbHNlIGlmICh4ID4gMjApIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwub3duZXIgPSAyO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLnByb3BlcnRpZXMgPSBvYmpbcHJvcF0ucHJvcGVydGllcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwaXhlbHNUb1RpbGUoeCwgeSkge1xuICAgIHZhciB4VGlsZSA9IDA7XG4gICAgdmFyIHlUaWxlID0gMDtcblxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMudGlsZUFycmF5W2NvbF0pIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XTtcbiAgICAgICAgaWYgKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpIHhUaWxlID0gcGFyc2VJbnQoY29sKTtcblxuICAgICAgICBpZiAoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpIHlUaWxlID0gcGFyc2VJbnQocm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgeDogeFRpbGUsIHk6IHlUaWxlIH07XG4gIH1cblxuICB0aWxlVG9QaXhlbHMoeCwgeSkge1xuICAgIHZhciB0aWxlT2JqID0gdGhpcy50aWxlQXJyYXlbeF1beV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRpbGVPYmoueCArIHRpbGVPYmoud2lkdGggLyAyLFxuICAgICAgeTogdGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQgLyAyXG4gICAgfTtcbiAgfVxuXG4gIHRpbGVDbGlja2VkKG9iaikge1xuICAgIHRoaXMuaGlkZVRpbGVzKCk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe1xuICAgICAgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIixcbiAgICAgIHg6IHBhcnNlSW50KG9iai50aWxlRGV0YWlsLngpLFxuICAgICAgeTogcGFyc2VJbnQob2JqLnRpbGVEZXRhaWwueSlcbiAgICB9KTtcblxuICAgIC8vIERFQlVHIEJMT0NLXG4gICAgY29uc29sZS5sb2coXCItLS0tVElMRSBERVRBSUwtLS0tXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTmFtZTogXCIgKyBvYmoudGlsZURldGFpbC5uYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlR5cGU6IFwiICsgb2JqLnRpbGVEZXRhaWwudHlwZSk7XG4gICAgY29uc29sZS5sb2coXCJPY2N1cGllZDogXCIgKyBvYmoudGlsZURldGFpbC5vY2N1cGllZCk7XG4gICAgY29uc29sZS5sb2coXCJEYW1hZ2VkOiBcIiArIG9iai50aWxlRGV0YWlsLmRhbWFnZWQpO1xuICAgIGNvbnNvbGUubG9nKFwiWDogXCIgKyBvYmoudGlsZURldGFpbC54ICsgXCIgWTpcIiArIG9iai50aWxlRGV0YWlsLnkpO1xuICAgIC8vICAgdGhpcy5hZGRPcmRuYW5jZSh7cG9pbnQ6e3g6b2JqLnRpbGVYLCB5Om9iai50aWxlWX0sIHR5cGU6J2Jpb2Ryb25lJywgdXVpZDpNYXRoLnJhbmRvbSgpfSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzaG93VGlsZXMoY29vcmRzQXJyYXksIGNvbG9yKSB7XG4gICAgY29uc29sZS5sb2coXCJTSE9XIFRJTEVTISFcIik7XG4gICAgY29uc29sZS5sb2coY29vcmRzQXJyYXkpO1xuICAgIC8vIGlmKHR5cGVvZihjb29yZHNBcnJheS5wb2ludEFycmF5KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyAgICAgY29vcmRzQXJyYXkgPSBjb29yZHNBcnJheS5wb2ludEFycmF5O1xuICAgIC8vIH1cbiAgICBmb3IgKHZhciBpIGluIGNvb3Jkc0FycmF5KSB7XG4gICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS5hbHBoYSA9IDAuNTtcbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gY29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gMHhmZmQ5MDA7XG4gICAgICB9XG4gICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh7IHg6IGNvb3Jkc0FycmF5W2ldLngsIHk6IGNvb3Jkc0FycmF5W2ldLnkgfSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRpbGVzKHRpbGVBcnJheSkge1xuICAgIGlmICghdGlsZUFycmF5KSB7XG4gICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xuICAgICAgICB0aGlzLnRpbGVBcnJheVt0aGlzLnNob3duVGlsZXNbaV0ueF1bdGhpcy5zaG93blRpbGVzW2ldLnldLmFscGhhID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRhbWFnZVRpbGUoZGF0YSkge1xuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2RhdGEueF1bZGF0YS55XTtcblxuICAgIGN1cnJlbnRUaWxlLnRpbnQgPSAweDMzMzMzMztcbiAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDAuODtcbiAgICBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9IHRydWU7XG5cbiAgICB2YXIgdGVzdCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKFxuICAgICAgY3VycmVudFRpbGUueCxcbiAgICAgIGN1cnJlbnRUaWxlLnkgKyBjdXJyZW50VGlsZS5oZWlnaHQgLyAyLFxuICAgICAgXCJib29tXCJcbiAgICApO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0ZXN0KTtcbiAgICB0ZXN0LmFuZ2xlID0gMjcwO1xuICAgIHRlc3QuYW5jaG9yLnNldCgwLjUsIDAuNyk7XG4gICAgdGVzdC5hbmltYXRpb25zLmFkZChcImJvb21cIik7XG4gICAgdGVzdC5hbmltYXRpb25zLnBsYXkoXCJib29tXCIsIDIwLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICByZXBhaXJUaWxlKGRhdGEpIHtcbiAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtkYXRhLnhdW2RhdGEueV07XG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydChcImdhbWVcIik7XG4gIH1cblxuICBzZXJ2ZXJGdWxsKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydChcInNlcnZlckZ1bGxcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VwdGlrb247XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuXG5jbGFzcyBUb2tlbiBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgdXVpZCkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksIGtleSwgZnJhbWUpO1xuICAgICAgICBcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMud2lkdGggPSAyNztcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgKiAtMTtcblxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5hZGQodGhpcyk7XG4gIH1cbiAgXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBoaWdobGlnaHRPbigpIHtcbiAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAxO1xuICB9XG4gIFxuICBoaWdobGlnaHRPZmYoKSB7XG4gICAgdGhpcy50aW50ID0gMHhmZmZmZmY7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcbiAgfVxuICBcbiAgbW92ZSh0YXJnZXRUaWxlKSB7XG4gICAgbGV0IHRhcmdldFBpeGVscyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHModGFyZ2V0VGlsZS54LCB0YXJnZXRUaWxlLnkpO1xuICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHRhcmdldFBpeGVscy55ICsgdGhpcy54IC0gdGFyZ2V0UGl4ZWxzLngpLnRvRml4ZWQoMSk7XG4gICAgbGV0IHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6dGFyZ2V0UGl4ZWxzLngsIHk6dGFyZ2V0UGl4ZWxzLnl9LCAyNDAwLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xuICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb25lO1xuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xuXG5jbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgdGhpcy5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xuICAgIC8vc2V0dXAgZGV2aWNlIHNjYWxpbmdcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnBhcmVudElzV2luZG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluSGVpZ2h0ID0gMjYwO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLmZvcmNlT3JpZW50YXRpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0R2xvYmFsVmFyaWFibGVzKCk7XG4gICAgXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcbiAgfVxuXG4gIGluaXRHbG9iYWxWYXJpYWJsZXMoKXtcbiAgICB0aGlzLmdhbWUuZ2xvYmFsID0ge1xuICAgICAgc2NvcmU6IDAsXG4gICAgICBsYXN0RGljZVJvbGw6IDAsXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3Q7XG4iLCJpbXBvcnQgRGljZSBmcm9tICcuLi9wcmVmYWJzL2RpY2UnO1xuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi4vcHJlZmFicy9jb25maXJtJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBcbiAgY3JlYXRlKCkge1xuICBcbiAgICAvL3RoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKHRoaXMudG9nZ2xlRnVsbHNjcmVlbiwgdGhpcyk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcblxuXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xuXG4gICAgdGhpcy5nYW1lLmh1ZEJnID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdodWQtYmcnKTtcblxuICAgIHRoaXMuZ2FtZS5kaWNlID0gbmV3IERpY2UodGhpcy5nYW1lLCA1MCwgNDApO1xuICAgIHRoaXMuZ2FtZS5kaWNlLnNjYWxlLnNldFRvKDAuMjUpO1xuICAgIHRoaXMuZ2FtZS5jb25maXJtID0gbmV3IENvbmZpcm0odGhpcy5nYW1lLCA0MCw4MCk7XG4gICAgdGhpcy5nYW1lLmNvbmZpcm0uc2NhbGUuc2V0VG8oMC4yNSk7XG5cbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZ2FtZS5kaWNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZ2FtZS5jb25maXJtKTtcbiAgICBcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5odWRCZyk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuZGljZSk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuY29uZmlybSk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRoaXMuYmFja2dyb3VuZCk7XG5cbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uY3JlYXRlVGlsZUFycmF5KDMxLCAyMSwge3g6MC10aGlzLmJhY2tncm91bmQud2lkdGgvMiwgeTowLXRoaXMuYmFja2dyb3VuZC5oZWlnaHQvMn0pO1xuXG5cbiAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xuXG4gIH1cblxuXG4gIGNyZWF0ZU1vZGFscygpIHtcbiAgICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcbiAgICAgICAge1xuICAgICAgICB0eXBlOiBcImFza1N0YXJ0XCIsXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiBmYWxzZSxcbiAgICAgICAgbW9kYWxDbG9zZU9uSW5wdXQ6IGZhbHNlLFxuICAgICAgICBpdGVtc0FycjogW3tcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQXJlIHlvdSBoYXBweSB3aXRoXFxuIHRoYXQgY2xvbmUgbGF5b3V0P1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogLTgwLFxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3N0YXJ0J30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfbm9cIixcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgXVxuICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaEJvYXJkKCkge1xuXG4gICAgdmFyIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcbiAgICBpZihzY2FsZSA+IDEuOSkge1xuICAgICAgICBzY2FsZSA9IDEuOTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcbiAgICB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XG4gICAgdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnNjYWxlID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuc2NhbGUgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuc2NhbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC54ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnggPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC54ID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnggPSB0aGlzLmdhbWUuYm9hcmRHcm91cC54O1xuICAgIFxuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gLTkwOyBcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnkgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC55ID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnkgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAueSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAueSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxuICAgIH1cblxuICB9XG5cbiAgXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyAgIHRoaXMuZGljZS5mcmFtZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UnLCA3MDAsIDMyKTtcbiAgICBcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWDogJyArIHRoaXMuZ2FtZS5pbnB1dC54LCA3MDAsIDY0KTtcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWTogJyArIHRoaXMuZ2FtZS5pbnB1dC55LCA3MDAsIDkyKTtcbiAgfVxuICBcbiAgcmVuZGVyICgpIHtcbiAgICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XG4gICAgICAvKlxuXG4gICAgdmFyIHggPSAzMjtcbiAgICB2YXIgeSA9IDA7XG4gICAgdmFyIHlpID0gMzI7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0JywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgV2lkdGg6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRXaWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lcldpZHRoOiAnICsgd2luZG93LmlubmVyV2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJXaWR0aDogJyArIHdpbmRvdy5vdXRlcldpZHRoLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBIZWlnaHQ6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRIZWlnaHQsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJIZWlnaHQ6ICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJIZWlnaHQ6ICcgKyB3aW5kb3cub3V0ZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xuXG4gICAgLy8gIERldmljZTogSG93IHRvIGdldCBkZXZpY2Ugc2l6ZS5cblxuICAgIC8vICBVc2Ugd2luZG93LnNjcmVlbi53aWR0aCBmb3IgZGV2aWNlIHdpZHRoIGFuZCB3aW5kb3cuc2NyZWVuLmhlaWdodCBmb3IgZGV2aWNlIGhlaWdodC4gXG4gICAgLy8gIC5hdmFpbFdpZHRoIGFuZCAuYXZhaWxIZWlnaHQgZ2l2ZSB5b3UgdGhlIGRldmljZSBzaXplIG1pbnVzIFVJIHRhc2tiYXJzLiAoVHJ5IG9uIGFuIGlQaG9uZS4pIFxuICAgIC8vICBEZXZpY2Ugc2l6ZSBpcyBzdGF0aWMgYW5kIGRvZXMgbm90IGNoYW5nZSB3aGVuIHRoZSBwYWdlIGlzIHJlc2l6ZWQgb3Igcm90YXRlZC5cblxuICAgIHggPSAzNTA7XG4gICAgeSA9IDA7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQm9hcmQgR3JvdXAnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC54OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnk6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC55LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGg6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodCwgeCwgeSArPSB5aSk7XG5cbiAgICB4ID0gMzI7XG4gICAgeSA9IDMwMDtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCYWNrZ3JvdW5kIERldGFpbCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC54OiAnICsgdGhpcy5iYWNrZ3JvdW5kLngsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueTogJyArIHRoaXMuYmFja2dyb3VuZC55LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLndpZHRoOiAnICsgdGhpcy5iYWNrZ3JvdW5kLndpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLmhlaWdodDogJyArIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuc2NhbGU6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS54LCB4LCB5ICs9IHlpKTtcbiAgICAqL1xuICAgIH1cbiAgICBcbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcbiAgICBpZih0aGlzLmdhbWUuc2NhbGUuaXNGdWxsU2NyZWVuKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdG9wRnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdGFydEZ1bGxTY3JlZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICAvL2FkZCBiYWNrZ3JvdW5kIGltYWdlXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XG4gICAgdGhpcy5iZ1JhdGlvID0gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGggLyB0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XG4gICAgdGhpcy53b3JsZFJhdGlvID0gdGhpcy5nYW1lLndvcmxkLndpZHRoIC8gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcbiAgICBpZiAoKCh0aGlzLndvcmxkUmF0aW8gLSB0aGlzLmJnUmF0aW8pIC8gMiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkgPiAwKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0KnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnggPSAodGhpcy5nYW1lLndvcmxkLndpZHRoIC0gdGhpcy5iYWNrZ3JvdW5kLndpZHRoKSAvIDI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoL3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoKnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSAodGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQpIC8gMjtcbiAgICB9XG5cbiAgICAvL2FkZCBpbnRybyB0ZXh0XG4gICAgdGhpcy5nYW1lb3ZlclRleHQgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCBcIlNjb3JlID0gXCIrdGhpcy5nYW1lLmdsb2JhbC5zY29yZSwge1xuICAgICAgZm9udDogJzQycHggQXJpYWwnLCBmaWxsOiAnI2ZmZmZmZicsIGFsaWduOiAnY2VudGVyJ1xuICAgIH0pO1xuICAgIHRoaXMuZ2FtZW92ZXJUZXh0LmFuY2hvci5zZXQoMC41KTtcblxuICAgIHRoaXMuaW5wdXQub25Eb3duLmFkZCh0aGlzLm9uSW5wdXREb3duLCB0aGlzKTtcblxuICAgIC8vcHJldmVudCBhY2NpZGVudGFsIGNsaWNrLXRocnUgYnkgbm90IGFsbG93aW5nIHN0YXRlIHRyYW5zaXRpb24gZm9yIGEgc2hvcnQgdGltZVxuICAgIHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDAuNSwgZnVuY3Rpb24oKXsgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gdHJ1ZTsgfSwgdGhpcyk7XG5cbiAgICB0aGlzLnNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB0aGlzLnJlc2V0R2xvYmFsVmFyaWFibGVzKCk7XG4gIH1cblxuICBzYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCl7XG4gICAgdmFyIG1heCA9IGxvY2FsU3RvcmFnZS5tYXhTY29yZSB8fCAwOyAvL2RlZmF1bHQgdmFsdWUgb2YgMCBpcyBpdCBkb2VzIG5vdCBleGlzdFxuICAgIGlmICh0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID4gbWF4KXsgbG9jYWxTdG9yYWdlLm1heFNjb3JlID0gdGhpcy5nYW1lLmdsb2JhbC5zY29yZTsgfVxuICB9XG5cbiAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKXtcbiAgICB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID0gMDtcbiAgfVxuICB1cGRhdGUoKSB7fVxuXG4gIG9uSW5wdXREb3duICgpIHtcbiAgICBpZih0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUpe1xuICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdtZW51Jyk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsImNsYXNzIFByZWxvYWRlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmFzc2V0ID0gbnVsbDtcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIC8vc2V0dXAgbG9hZGluZyBiYXJcbiAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDEwLCAncHJlbG9hZGVyJyk7XG4gICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5hc3NldCk7XG4gICAgXG4gICAgLy9TZXR1cCBsb2FkaW5nIGFuZCBpdHMgZXZlbnRzXG4gICAgdGhpcy5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XG4gIH1cblxuICBsb2FkUmVzb3VyY2VzKCkge1xuICAgICAgXG4gICAgLy9NRU5VIFJFU09VUkNFU1xuICAgIC8vbWVudSBiYWNrZ3JvdW5kXG4gICAgLy90ZXh0IGltYWdlc1xuICAgIC8vbXVzaWMgZmlsZXMgP1xuICAgIC8vICBMb2FkIGZpbHRlciBzY3JpcHRzXG4gICAgLy8gdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL21hc3Rlci92Mi9maWx0ZXJzL0dyYXkuanMnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXItY2UvbWFzdGVyL2ZpbHRlcnMvR3JheS5qcycpO1xuXG4gICAgXG4gICAgLy9sb2FkIGdhbWUgZGF0YVxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3dhbGxHcmlkJywgJ2Fzc2V0cy93YWxsR3JpZC5qc29uJyk7XG4gIFxuICAgIC8vR0FNRSBSRVNPVVJDRVNcbiAgICAvL2dhbWUgYm9hcmQgYmFja2dyb3VuZFxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWNrZ3JvdW5kJywnYXNzZXRzL21lZGl1bV9ib2FyZC5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZGljZScsJ2Fzc2V0cy9kaWNlLnBuZycsIDEyOCwgMTk0LCAxMCk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2h1ZC1iZycsJ2Fzc2V0cy9odWQtYmcucG5nJyk7XG4gICAgXG4gICAgLy8gbW9kYWwgaW1hZ2VzXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X25vJywnYXNzZXRzL3RleHRfbm8ucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCdhc3NldHMvdGV4dF9nby5wbmcnKTtcblxuICAgIC8vcGxheWVyIHRva2VucyBzcHJpdGVzaGVldHNcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2xvbmUnLCAnYXNzZXRzL2Nsb25lLnBuZycsIDExMCwgMTY4KTtcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnb3JkbmFuY2UnLCAnYXNzZXRzL29yZG5hbmNlLnBuZycsMjY0LCAyNjQsIDcpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzKCdib29tJywgJ2Fzc2V0cy9ib29tLnBuZycsICdhc3NldHMvYm9vbS5qc29uJywgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCk7XG5cbiAgICAvL2F1ZGlvIGZpbGVzIFxuICAgIFxuICAgIC8vdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Nyb3NzaGFpcnMnLCAnYXNzZXRzL2Nyb3NzaGFpcl9yZWRfc21hbGwucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfcmVhZHknLCAnYXNzZXRzL3RleHRfcmVhZHkucG5nJyk7XG5cbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xuXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZ3Vuc2hvdCcsJ2Fzc2V0cy9ndW5zaG90LndhdicpO1xuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcbiAgfVxuXG4gIG9uTG9hZENvbXBsZXRlKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc2V0dXAnKTtcbiAgICAvL3RoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcbiIsImltcG9ydCBTZXB0aWtvbiBmcm9tICcuLi9wcmVmYWJzL3NlcHRpa29uJztcblxuY2xhc3MgU2VydmVyRnVsbCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlNlcnZlciBpcyBmdWxsLiBUcnkgYWdhaW4gbGF0ZXIuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlckZ1bGw7XG4iLCJjbGFzcyBTZXR1cCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiB9XG4gIFxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLm5hbWUgPSBcInVzZXJcIjtcblxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG4gICAgXG4gICAgLy8gdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xuICAgIC8vIHRoaXMuY3JlYXRlTW9kYWxzKCk7XG4gICAgLy8gdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCgndXNlcm5hbWUnKTtcblxuICAgIC8vIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRDYWxsYmFja3ModGhpcywgbnVsbCwgbnVsbCwgdGhpcy5rZXlQcmVzcyk7XG4gICAgLy8gdGhpcy5ia3NwID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuQkFDS1NQQUNFKTtcbiAgICAvLyB0aGlzLmJrc3Aub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcbiAgICAvLyB0aGlzLmVudGVyID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuRU5URVIpO1xuICAgIC8vIHRoaXMuZW50ZXIub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LmFza05ld1BsYXllcigpO1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgIHJldHVybjtcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xuICAgIFxufVxuXG5rZXlQcmVzcyhjaGFyKSB7XG5cbiAgICBpZih0eXBlb2YoY2hhcikgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5uYW1lID0gdGhpcy5nYW1lLm5hbWUuc3Vic3RyaW5nKDAsIHRoaXMuZ2FtZS5uYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoYXIgPT0gXCIgXCIpIHtcbiAgICAgICAgICAgIGNoYXIgPSBcIl9cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdhbWUubmFtZSArPSBjaGFyO1xuICAgIH1cbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XG59XG4gIFxuICBjcmVhdGVNb2RhbHMoKSB7XG4gIFxuICAgIC8vIFN0YXJ0IEdhbWVcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXG4gICAgICAgIHtcbiAgICAgICAgdHlwZTogXCJ1c2VybmFtZVwiLFxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcbiAgICAgICAgbW9kYWxDbG9zZU9uSW5wdXQ6IHRydWUsXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJUeXBlIGEgdXNlcm5hbWUsXFxudGhlbiBoaXQgPEVOVEVSPlxcblxcbihtYXggb2YgMjUgY2hhcmFjdGVycylcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5nYW1lLm5hbWUsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IDUwXG4gICAgICAgIH0sIF1cbiAgICB9KTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xuIl19
