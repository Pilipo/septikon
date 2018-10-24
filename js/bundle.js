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

        this.socket.on('update', function (data) {
            if (data.type == "personnel") {
                this.septikon.updatePersonnel(data);
            }
            if (data.type == "ordnance") {
                this.septikon.updateOrdnance(data);
            }
            if (data.type == "resources") {
                this.septikon.updateResources(data);
            }
            if (data.type == "tile") {
                this.septikon.updateTile(data);
            }
            if (data.type == "dice") {
                this.septikon.game.dice.setValue(data.details.value);
            }
            if (data.type == "arms") {
                console.log("update personnel arms!");
                console.log(data);
                this.septikon.updateArms(data);
            }
            if (data.type == "info") {
                console.log(data);
                // this.septikon.updateInfo(data);
            }
        });

        this.socket.on('request', function (data) {
            console.log('REQUEST: ');
            switch (data.details.type) {
                case "askStart":
                    this.septikon.showModal('askStart');
                    break;

            }
        });

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

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this, game, x, y, 'clone', frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

    _this.uuid = uuid;
    //set size
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this clone occupies)
    _this.angle = _this.game.personnelGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;
    _this.game.personnelGroup.add(_this);
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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require('../prefabs/clone');

var _clone2 = _interopRequireDefault(_clone);

var _biodrone = require('../prefabs/biodrone');

var _biodrone2 = _interopRequireDefault(_biodrone);

var _ordnance = require('../prefabs/ordnance');

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
        key: 'updatePersonnel',
        value: function updatePersonnel(data) {
            // MOVE personnel

            if (data.details.action === "add") {
                console.log("adding personnel");
                this.addPersonnel(data.details.personnel, data.details.playerID);
            }

            if (data.details.action === "remove") {
                console.log("removing personnel");
                this.removePersonnel(data.details.personnel, data.details.playerID);
            }

            if (data.details.action === "move") {
                console.log("moving personnel");
                for (var j = 0; j < this.player.personnelArray.length; j++) {
                    var myPerson = this.player.personnelArray[j];
                    if (myPerson.uuid === data.details.personnel.uuid) {
                        var point = this.tileToPixels(data.details.personnel.x, data.details.personnel.y);
                        var distance = Math.abs(myPerson.y - point.y + myPerson.x - point.x).toFixed(1);
                        this.game.add.tween(myPerson).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                        this.player.personnelArray[j] = data.details.personnel;
                    }
                }
                console.log(data);
            }

            // for (let j = 0; j < this.player.personnelArray.length; j++) {
            //     let myPerson = this.player.personnelArray[j];
            //     if (myPerson.uuid === p.uuid) {
            //         matchFound = true;
            //     }
            // }
            // var currentPersonnel = null;
            // if (Array.isArray(data.details) === false) {
            //     data.details = [data.details];
            // }

            // if (this.opponent.personnelArray.length === 0 && data.details.length === 5) {
            //     for (var i in data.details) {
            //         this.addClone(data.details[i]);
            //     }      
            // } else {
            //     for (var p in this.opponent.personnelArray) {
            //         currentPersonnel = this.opponent.personnelArray[p];
            //         for (var d in data.details) {
            //             if (currentPersonnel.uuid == data.details[d].uuid) {
            //                 this.movePersonnel(data.details[d]);
            //             }
            //         }
            //     }
            // }
        }
    }, {
        key: 'updateOrdnance',
        value: function updateOrdnance(data) {}
    }, {
        key: 'updateResources',
        value: function updateResources(data) {}
    }, {
        key: 'updateTile',
        value: function updateTile(data) {
            this.tileArray[data.details.x][data.details.y].tileDetail = data.details.tile;
        }
    }, {
        key: 'showModal',
        value: function showModal(type) {
            this.game.modal.showModal(type);
        }
    }, {
        key: 'diceRolled',
        value: function diceRolled(details) {
            this.game.dice.setValue(details.value);
            this.legalMoves = details.gamePieces;
            var pointArray = [];
            // console.log(details.gamePieces[0].origin);
            for (var i = 0; i < details.gamePieces.length; i++) {
                pointArray.push({ x: details.gamePieces[i].origin.x, y: details.gamePieces[i].origin.y });
            }
            this.showTiles(pointArray, 0xF63636);
        }
    }, {
        key: 'offerDice',
        value: function offerDice() {
            this.game.dice.enable();
        }
    }, {
        key: 'takeDice',
        value: function takeDice() {
            this.game.dice.disable();
        }
    }, {
        key: 'offerGunners',
        value: function offerGunners(data) {
            this.choosingTargets = true;
            this.legalGunners = data.gunners;
            this.game.go.enable();
            console.log("animate some indication of viable gunners on the surface. Maybe a pointer bouncing over them?");
            //TODO: Emit an indicator for selecting a gunner
        }
    }, {
        key: 'addPersonnel',
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
        key: 'addOrdnance',
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
        key: 'movePersonnel',
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
        key: 'moveOrdnance',
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
        key: 'removePersonnel',
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
        key: 'removeAllPersonnel',
        value: function removeAllPersonnel() {
            for (var i = 0; i < this.game.boardGroup.children.length; i++) {
                if (this.game.boardGroup.children[i].constructor == _clone2.default) {
                    this.game.boardGroup.children[i].destroy();
                    i--;
                }
            }
        }
    }, {
        key: 'updatePlayer',
        value: function updatePlayer(details) {
            for (var i in details) {
                this.player[i] = details[i];
            }

            // DEBUG BLOCK
            this.game.client.sendInput({ event: 'tileClicked', x: 8, y: 0 });
            this.game.client.sendInput({ event: 'tileClicked', x: 8, y: 19 });
            this.game.client.sendInput({ event: 'tileClicked', x: 6, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 4, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 0, y: 10 });

            this.game.client.sendInput({ event: 'tileClicked', x: 23, y: 20 });
            this.game.client.sendInput({ event: 'tileClicked', x: 23, y: 1 });
            this.game.client.sendInput({ event: 'tileClicked', x: 24, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 26, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 30, y: 10 });
        }
    }, {
        key: 'initResources',
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
        key: 'createTileArray',
        value: function createTileArray(columns, rows, point) {
            this.tileDetail = this.game.cache.getJSON('tileDetail');

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
                        x = coords[0];
                        y = coords[1];
                        this.tileArray[x][y].tileDetail = {};
                        this.tileArray[x][y].tileDetail.damaged = false;
                        this.tileArray[x][y].tileDetail.occupied = false;
                        this.tileArray[x][y].tileDetail.x = x;
                        this.tileArray[x][y].tileDetail.y = y;
                        this.tileArray[x][y].tileDetail.type = obj[prop].type;

                        if (typeof this.tileArray[x][y] != 'undefined') this.tileArray[x][y].tileDetail.name = obj[prop].name;else console.log(x + ":" + y + " not found!");

                        if (x < 9) this.tileArray[x][y].tileDetail.owner = 1;else if (x > 20) this.tileArray[x][y].tileDetail.owner = 2;

                        if (typeof obj[prop].properties != 'undefined') {
                            this.tileArray[x][y].tileDetail.properties = obj[prop].properties;
                        }
                    }
                }
            }
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
            return { x: tileObj.x + tileObj.width / 2, y: tileObj.y + tileObj.height / 2 };
        }
    }, {
        key: 'tileClicked',
        value: function tileClicked(obj) {
            this.hideTiles();
            this.game.client.sendInput({ event: 'tileClicked', x: parseInt(obj.tileDetail.x), y: parseInt(obj.tileDetail.y) });

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
        key: 'showTiles',
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
        key: 'hideTiles',
        value: function hideTiles(tileArray) {
            if (!tileArray) {
                for (var i in this.shownTiles) {
                    this.tileArray[this.shownTiles[i].x][this.shownTiles[i].y].alpha = 0;
                }
                this.shownTiles = [];
            }
        }
    }, {
        key: 'damageTile',
        value: function damageTile(data) {

            var currentTile = this.tileArray[data.x][data.y];

            currentTile.tint = 0X333333;
            currentTile.alpha = 0.8;
            currentTile.tileDamaged = true;

            var test = this.game.add.sprite(currentTile.x, currentTile.y + currentTile.height / 2, 'boom');
            this.game.boardGroup.add(test);
            test.angle = 270;
            test.anchor.set(0.5, 0.7);
            test.animations.add('boom');
            test.animations.play('boom', 20, false, true);
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.game.state.start('game');
        }
    }, {
        key: 'serverFull',
        value: function serverFull() {
            this.game.state.start('serverFull');
        }
    }]);

    return Septikon;
}();

exports.default = Septikon;

},{"../prefabs/biodrone":6,"../prefabs/clone":8,"../prefabs/ordnance":13}],17:[function(require,module,exports){
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

                if (moves !== false) {
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

},{"../prefabs/clone":8,"../prefabs/ordnance":13,"../prefabs/personnel":14,"../prefabs/resources":15}],18:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9jbGllbnQvbWFpbi5qcyIsInNyYy9jbGllbnQvbW9kYWwuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvYmlvZHJvbmUuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL2Nsb25lLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL2NvbmZpcm0uanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvY3Jvc3NoYWlycy5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9kaWNlLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9vcmRuYW5jZS5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9wZXJzb25uZWwuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL3NlcHRpa29uLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL3RlYW0uanMiLCJzcmMvY2xpZW50L3N0YXRlcy9ib290LmpzIiwic3JjL2NsaWVudC9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9jbGllbnQvc3RhdGVzL2dhbWVvdmVyLmpzIiwic3JjL2NsaWVudC9zdGF0ZXMvcHJlbG9hZGVyLmpzIiwic3JjL2NsaWVudC9zdGF0ZXMvc2VydmVyRnVsbC5qcyIsInNyYy9jbGllbnQvc3RhdGVzL3NldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBYyxVQUZQO0FBR1Asa0NBQWMsR0FIUDtBQUlQLG1DQUFlLEdBSlI7QUFLUCxtQ0FBZTtBQUxSLGlCQUFELEVBTVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMsOERBRlY7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUyxDQUFDO0FBTlgsaUJBTk8sRUFhUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyxLQUFLLElBQUwsQ0FBVSxJQUZwQjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTO0FBTlYsaUJBYk87QUFKVixhQURKO0FBNEJEOzs7O0VBNUVpQixPQUFPLEs7O2tCQStFWixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcbmltcG9ydCBTZXJ2ZXJGdWxsIGZyb20gJy4vc3RhdGVzL3NlcnZlckZ1bGwnO1xuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xufVxuXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcIjEwMFwiLCBcIjEwMFwiLCBQaGFzZXIuQVVUTyk7XG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xuXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NlcnZlckZ1bGwnLCBuZXcgU2VydmVyRnVsbCgpKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcblxuXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdGdhbWUubW9kYWxzID0ge307XG5cblx0LyoqXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcblxuXHRcdFx0dmFyIG1vZGFsO1xuXHRcdFx0dmFyIGlubmVyTW9kYWw7XG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xuXHRcdFx0XHRtb2RhbC54ID0gMDtcblx0XHRcdFx0bW9kYWwueSA9IDA7XG5cblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcblxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xuXHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0Jztcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XG5cblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcblxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbC5sb2NrUG9zaXRpb24gPSBsb2NrUG9zaXRpb247XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XG5cblx0XHR9LFxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHR9LFxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xuXHRcdH1cblx0fTtcbn07XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQmlvZHJvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgICBzdXBlcihnYW1lLCB4LCB5LCAnYmlvZHJvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgXHJcbiAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgIC8vc2V0IHNpemVcclxuICAgICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgICBcclxuICAgICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgYmlvZHJvbmUgb2NjdXBpZXMpXHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG4gIFxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICBcclxuICAgIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xyXG4gICAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICAgIFxyXG4gICAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBNb3ZlIHRvIG5ldyBob21lXHJcbiAgICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xyXG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBCaW9kcm9uZTtcclxuICAiLCJcbmNsYXNzIENsaWVudCB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XG4gICAgICAgIFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInBlcnNvbm5lbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVQZXJzb25uZWwoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJvcmRuYW5jZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVPcmRuYW5jZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVSZXNvdXJjZXMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJ0aWxlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZVRpbGUoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IFwiZGljZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5nYW1lLmRpY2Uuc2V0VmFsdWUoZGF0YS5kZXRhaWxzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcImFybXNcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHBlcnNvbm5lbCBhcm1zIVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZUFybXMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IFwiaW5mb1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXB0aWtvbi51cGRhdGVJbmZvKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVxdWVzdCcsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFza1N0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFDVElPTjogXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZih0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IG5vIG1ldGhvZCBmb3VuZCBjYWxsZWQgc2VwdGlrb24uXCIgKyBkYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cblxuXHRhc2tOZXdQbGF5ZXIoKSB7XG5cdFx0dGhpcy5zb2NrZXQuZW1pdCgnbmV3UGxheWVyJywge3V1aWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyl9KTtcblx0fVxuICAgIFxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIGlucHV0Jyk7XG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2lucHV0JywgcGF5bG9hZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuXG5jbGFzcyBDbG9uZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHV1aWQpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XG4gICAgICAgIFxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDI3O1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmFkZCh0aGlzKTtcbiAgfVxuICBcbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGhpZ2hsaWdodE9uKCkge1xuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XG4gIH1cbiAgXG4gIGhpZ2hsaWdodE9mZigpIHtcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xuICB9XG4gIFxuICBnZXRMZWdhbE1vdmVzKCkge1xuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcbiAgICBcbiAgICBcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcbiAgfVxuICBcbiAgbW92ZShjb29yZGluYXRlcykge1xuICBcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIFxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcbiAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIENvbmZpcm0gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7ICBcclxuICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3RleHRfZ28nKTtcclxuICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuICBcclxuICAgICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5jbGlja2VkLCB0aGlzKTtcclxuICBcclxuICAgICAgLy9zZXQgc2l6ZVxyXG4gICAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgIH1cclxuICBcclxuICAgIGNsaWNrZWQgKCkge1xyXG4gICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdjb25maXJtQ2xpY2tlZCd9KTtcclxuICAgIH1cclxuICBcclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgICAvLyB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29uZmlybTtcclxuICAiLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcblxuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gMzU7IFxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG5cbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XG5cbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcblxuICAgIC8vc2V0IGNsaWNrIGV2ZW50XG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAvLyB0aGlzLmFscGhhID0gMC41O1xuICAgIFxuICAgIHRoaXMudmFsdWUgPSAxMDtcbiAgICB0aGlzLmZyYW1lID0gdGhpcy52YWx1ZS0xO1xuICB9XG5cbiAgY2xpY2tlZCAoKSB7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcbiAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyYW1lID0gdmFsdWUgLSAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpY2U7XG4iLCJjbGFzcyBNYXN0ZXIge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7IiwiY2xhc3MgT3JkbmFuY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB0eXBlLCB1dWlkKSB7XG4gICAgdmFyIG9yZEZyYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInNoaWVsZFwiOlxuICAgICAgICBvcmRGcmFtZSA9IDQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgIG9yZEZyYW1lID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgIG9yZEZyYW1lID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgIG9yZEZyYW1lID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFkIG9yZG5hbmNlIHR5cGVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnb3JkbmFuY2UnLCBvcmRGcmFtZSk7XG4gICAgICAgIFxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxuICAgIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIE9YWUdFTjogMCxcbiAgICAgICAgUk9DS0VUOiAxLFxuICAgICAgICBNRVRBTDogMixcbiAgICAgICAgRU5FUkdZOiAzLFxuICAgICAgICBCSU9NQVNTOiA0LFxuICAgICAgICBCSU9EUk9ORTogNSxcbiAgICAgICAgVVJBTklVTTogNlxuICAgIH0pO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XG4gICAgfVxuICB9XG4gIFxuICBjaGVjayh0eXBlLCBjb3VudCkge1xuICAgIGlmKHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA+IGNvdW50KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBnZXRDb3VudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xuICB9XG4gICAgXG4gIGFkZCh0eXBlLCBjb3VudCkge1xuICB9XG4gIFxuICByZW1vdmUodHlwZSwgY291bnQpIHtcbiAgICB0aGlzLnJlc291cmNlc1t0eXBlXSAtPSBjb3VudDtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcbmltcG9ydCBCaW9kcm9uZSBmcm9tICcuLi9wcmVmYWJzL2Jpb2Ryb25lJztcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcblxuY2xhc3MgU2VwdGlrb24ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMucGxheWVyID0geyBcbiAgICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG4gICAgdGhpcy5vcHBvbmVudCA9IHtcbiAgICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG4gICAgXG4gICAgdGhpcy5zaG93blRpbGVzID0gW107XG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFRvTW92ZSA9IG51bGw7XG4gICAgdGhpcy5sZWdhbEd1bm5lcnMgPSBudWxsO1xuXG4gICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG5cbiAgICB1cGRhdGVQZXJzb25uZWwoZGF0YSkge1xuICAgICAgICAvLyBNT1ZFIHBlcnNvbm5lbFxuXG4gICAgICAgIGlmIChkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcImFkZFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGluZyBwZXJzb25uZWxcIik7XG4gICAgICAgICAgICB0aGlzLmFkZFBlcnNvbm5lbChkYXRhLmRldGFpbHMucGVyc29ubmVsLCBkYXRhLmRldGFpbHMucGxheWVySUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgcGVyc29ubmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQZXJzb25uZWwoZGF0YS5kZXRhaWxzLnBlcnNvbm5lbCwgZGF0YS5kZXRhaWxzLnBsYXllcklEKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcIm1vdmVcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZpbmcgcGVyc29ubmVsXCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBteVBlcnNvbiA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2pdO1xuICAgICAgICAgICAgICAgIGlmIChteVBlcnNvbi51dWlkID09PSBkYXRhLmRldGFpbHMucGVyc29ubmVsLnV1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YS5kZXRhaWxzLnBlcnNvbm5lbC54LCBkYXRhLmRldGFpbHMucGVyc29ubmVsLnkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyhteVBlcnNvbi55IC0gcG9pbnQueSArIG15UGVyc29uLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKG15UGVyc29uKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtqXSA9IGRhdGEuZGV0YWlscy5wZXJzb25uZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgbXlQZXJzb24gPSB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtqXTtcbiAgICAgICAgICAgIC8vICAgICBpZiAobXlQZXJzb24udXVpZCA9PT0gcC51dWlkKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG1hdGNoRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgLy8gdmFyIGN1cnJlbnRQZXJzb25uZWwgPSBudWxsO1xuICAgICAgICAvLyBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRldGFpbHMpID09PSBmYWxzZSkge1xuICAgICAgICAvLyAgICAgZGF0YS5kZXRhaWxzID0gW2RhdGEuZGV0YWlsc107XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5sZW5ndGggPT09IDAgJiYgZGF0YS5kZXRhaWxzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAvLyAgICAgZm9yICh2YXIgaSBpbiBkYXRhLmRldGFpbHMpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFkZENsb25lKGRhdGEuZGV0YWlsc1tpXSk7XG4gICAgICAgIC8vICAgICB9ICAgICAgXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBmb3IgKHZhciBwIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgLy8gICAgICAgICBjdXJyZW50UGVyc29ubmVsID0gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtwXTtcbiAgICAgICAgLy8gICAgICAgICBmb3IgKHZhciBkIGluIGRhdGEuZGV0YWlscykge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoY3VycmVudFBlcnNvbm5lbC51dWlkID09IGRhdGEuZGV0YWlsc1tkXS51dWlkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQZXJzb25uZWwoZGF0YS5kZXRhaWxzW2RdKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHVwZGF0ZU9yZG5hbmNlKGRhdGEpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUmVzb3VyY2VzKGRhdGEpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlVGlsZShkYXRhKSB7XG4gICAgICAgIHRoaXMudGlsZUFycmF5W2RhdGEuZGV0YWlscy54XVtkYXRhLmRldGFpbHMueV0udGlsZURldGFpbCA9IGRhdGEuZGV0YWlscy50aWxlO1xuICAgIH1cblxuICBzaG93TW9kYWwodHlwZSkge1xuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwodHlwZSk7XG4gIH1cbiAgXG4gIGRpY2VSb2xsZWQoZGV0YWlscykge1xuICAgIHRoaXMuZ2FtZS5kaWNlLnNldFZhbHVlKGRldGFpbHMudmFsdWUpO1xuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcbiAgICB2YXIgcG9pbnRBcnJheSA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKGRldGFpbHMuZ2FtZVBpZWNlc1swXS5vcmlnaW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV0YWlscy5nYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvaW50QXJyYXkucHVzaCh7IHg6IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW4ueCwgeTogZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbi55IH0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dUaWxlcyhwb2ludEFycmF5LCAweEY2MzYzNik7XG4gIH1cblxuICBvZmZlckRpY2UoKSB7XG4gICAgICB0aGlzLmdhbWUuZGljZS5lbmFibGUoKTtcbiAgfVxuXG4gIHRha2VEaWNlKCkge1xuICAgICAgdGhpcy5nYW1lLmRpY2UuZGlzYWJsZSgpO1xuICB9XG5cbiAgb2ZmZXJHdW5uZXJzKGRhdGEpIHtcbiAgICAgIHRoaXMuY2hvb3NpbmdUYXJnZXRzID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVnYWxHdW5uZXJzID0gZGF0YS5ndW5uZXJzO1xuICAgICAgdGhpcy5nYW1lLmdvLmVuYWJsZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJhbmltYXRlIHNvbWUgaW5kaWNhdGlvbiBvZiB2aWFibGUgZ3VubmVycyBvbiB0aGUgc3VyZmFjZS4gTWF5YmUgYSBwb2ludGVyIGJvdW5jaW5nIG92ZXIgdGhlbT9cIik7XG4gICAgICAvL1RPRE86IEVtaXQgYW4gaW5kaWNhdG9yIGZvciBzZWxlY3RpbmcgYSBndW5uZXJcbiAgfVxuICBcbiAgYWRkUGVyc29ubmVsKHBlcnNvbm5lbCwgcGxheWVySUQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhwZXJzb25uZWwueCwgcGVyc29ubmVsLnkpO1xuICAgIGxldCBuZXdQZXJzb25uZWwgPSBudWxsO1xuICAgIGlmIChwZXJzb25uZWwudHlwZUVudW0uQ0xPTkUgPT09IHBlcnNvbm5lbC50eXBlKSB7XG4gICAgICAgIG5ld1BlcnNvbm5lbCA9IG5ldyBDbG9uZSh0aGlzLmdhbWUsIHBvaW50LngsIHBvaW50LnksIG51bGwsIHBlcnNvbm5lbC51dWlkKTtcbiAgICB9IGVsc2UgaWYgKHBlcnNvbm5lbC50eXBlRW51bS5CSU9EUk9ORSA9PT0gcGVyc29ubmVsLnR5cGUpIHtcbiAgICAgICAgbmV3UGVyc29ubmVsID0gbmV3IEJpb2Ryb25lKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgcGVyc29ubmVsLnV1aWQpO1xuICAgIH1cbiAgICBpZihwbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xuICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5wdXNoKG5ld1BlcnNvbm5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5wdXNoKG5ld1BlcnNvbm5lbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkT3JkbmFuY2UoZGV0YWlscykge1xuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRldGFpbHMucG9pbnQueCwgZGV0YWlscy5wb2ludC55KTtcbiAgICB2YXIgb3JkID0gbmV3IE9yZG5hbmNlKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgZGV0YWlscy50eXBlLCBkZXRhaWxzLnV1aWQpO1xuICAgIGlmKGRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheS5wdXNoKG9yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKG9yZCk7XG4gIH1cblxuICBtb3ZlUGVyc29ubmVsKGRhdGEpIHtcbiAgICBsZXQgdHdlZW4gPSBudWxsO1xuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XG4gICAgbGV0IHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YS54LCBkYXRhLnkpO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnkgLSBwb2ludC55ICsgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUuIE5vdCBxdWl0ZSBzdXJlIGhvdyB0byBkbyB0aGlzIHlldC5cbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlT3JkbmFuY2UoZGF0YSkge1xuICAgIHZhciB0d2VlbiA9IG51bGw7XG4gICAgdmFyIGRpc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcG9pbnQgPSBudWxsO1xuICAgIGZvciAodmFyIGRhdGFJbmRleCA9IDA7IGRhdGFJbmRleCA8IGRhdGEubGVuZ3RoOyBkYXRhSW5kZXgrKykge1xuICAgICAgICBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRhdGFbZGF0YUluZGV4XS54LCBkYXRhW2RhdGFJbmRleF0ueSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0udXVpZCA9PSBkYXRhW2RhdGFJbmRleF0udXVpZCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS55IC0gcG9pbnQueSArIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0udXVpZCA9PSBkYXRhW2RhdGFJbmRleF0udXVpZCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnkgLSBwb2ludC55ICsgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVQZXJzb25uZWwoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuY2hpbGRyZW4pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbltpXS51dWlkID09PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xuICAgIC8vICAgICAgICAgICBsZXQgcGVyc29ubmVsVG9EZXN0cm95ID0gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV07XG4gICAgLy8gICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnNwbGljZShpLDEpO1xuICAgIC8vICAgICAgICAgICBwZXJzb25uZWxUb0Rlc3Ryb3kuZGVzdHJveSgpO1xuICAgIC8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW1vdmVBbGxQZXJzb25uZWwoKXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IENsb25lKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgdXBkYXRlUGxheWVyKGRldGFpbHMpIHtcbiAgICBmb3IgKHZhciBpIGluIGRldGFpbHMpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJbaV0gPSBkZXRhaWxzW2ldO1xuICAgIH1cblxuICAgIC8vIERFQlVHIEJMT0NLXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjgsIHk6MH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDo4LCB5OjE5fSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjYsIHk6MTB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6NCwgeToxMH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDowLCB5OjEwfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDoyMywgeToyMH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDoyMywgeToxfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjI0LCB5OjEwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjI2LCB5OjEwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjMwLCB5OjEwfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICB9XG5cbiAgaW5pdFJlc291cmNlcygpIHtcbiAgICB2YXIgY3VycmVudFJlYyA9IG51bGw7XG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmLCAxKTtcbiAgICBncmFwaGljcy5kcmF3Um91bmRlZFJlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLTQsIHRoaXMudGlsZUhlaWdodC00LCAxNCk7XG5cbiAgICBmb3IgKHZhciBjIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIHIgaW4gdGhpcy50aWxlQXJyYXlbY10pIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVPd25lciA9PSB0aGlzLnBsYXllci5pZCAmJiB0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlVHlwZSA9PSBcIndhcmVob3VzZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIgPCA1IHx8IHIgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy50aWxlQXJyYXlbY11bcl0ueCsodGhpcy50aWxlQXJyYXlbY11bcl0ud2lkdGgvMiksIHRoaXMudGlsZUFycmF5W2NdW3JdLnkrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5nbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNDApLTIwO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmY2UzMTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3h5Z2VuXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHgwMGIxZjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhlODJhMmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWV0YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGZmZmZmZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9tYXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHg4YWMzNDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDlmM2E5YjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1cmFuaXVtXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmMzY1MjA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRSZWMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBncmFwaGljcy5kZXN0cm95KCk7XG4gIH1cbiAgXG4gIGNyZWF0ZVRpbGVBcnJheShjb2x1bW5zLCByb3dzLCBwb2ludCkge1xuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd0aWxlRGV0YWlsJyk7XG5cbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzID0ge3g6MCwgeTowfTtcblxuICAgIHZhciB4LCB5O1xuICAgIFxuICAgIHRoaXMubWFyZ2luQm90dG9tID0gdGhpcy5tYXJnaW5Ub3AgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQvMTcuNDc1O1xuICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI0O1xuICAgIHRoaXMubWFyZ2luUmlnaHQgPSAgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjYuMzE1ODtcbiAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMudGlsZUhlaWdodCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzM5O1xuICAgIHRoaXMucGFkZGluZyA9ICh0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCAtICh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSAtICh0aGlzLnRpbGVXaWR0aCAqIDMxKSkvMzA7XG4gICAgICAgIFxuICAgIC8vdGhpcy50aWxlV2lkdGggPSAyNTsvLyh0aGlzLmJhY2tncm91bmRXaWR0aCAtICgodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgKyAodGhpcy5wYWRkaW5nICogKGNvbHVtbnMgLSAxKSkpKSAvIGNvbHVtbnM7XG4gICAgLy90aGlzLnRpbGVIZWlnaHQgPSAyNTsvLyh0aGlzLmJhY2tncm91bmRIZWlnaHQgLSAoKHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pICsgKHRoaXMucGFkZGluZyAqIChyb3dzIC0gMSkpKSkgLyByb3dzO1xuICAgICAgICBcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggPSBwb2ludC54ICsgdGhpcy5tYXJnaW5MZWZ0O1xuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSA9IHBvaW50LnkgKyB0aGlzLm1hcmdpblRvcDtcbiAgICBcbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xuICAgIGdyYXBoaWNzLmRyYXdSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KTtcbiAgICBcbiAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcbiAgICAgICAgICAgIHkgPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgKyAodGhpcy50aWxlSGVpZ2h0ICogcm93KSArICh0aGlzLnBhZGRpbmcgKiByb3cgLSAxKTtcbiAgICAgICAgICAgIC8vZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHgsIHksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjdXJyZW50VGlsZSk7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDA7IC8vIDAuMjU7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFRpbGUuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnRpbGVDbGlja2VkLCB0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID09ICd1bmRlZmluZWQnKSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID0gW107XG4gICAgICAgIFxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXVtyb3ddID0gY3VycmVudFRpbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICAgIFxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnRpbGVEZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVEZXRhaWwuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgIFxuICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlRGV0YWlsW2tleV07XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMF07XG4gICAgICAgICAgICAgICAgeSA9IGNvb3Jkc1sxXTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwueCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC55ID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XG5cbiAgICAgICAgICAgICAgICBpZih4IDwgOSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC5vd25lciA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeD4yMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC5vd25lciA9IDI7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdLnByb3BlcnRpZXMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC5wcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGl4ZWxzVG9UaWxlKHgsIHkpIHtcbiAgICB2YXIgeFRpbGUgPSAwO1xuICAgIHZhciB5VGlsZSA9IDA7XG4gICAgXG4gICAgZm9yICh2YXIgY29sIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIHJvdyBpbiB0aGlzLnRpbGVBcnJheVtjb2xdKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlQXJyYXlbY29sXVtyb3ddO1xuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcbiAgICAgICAgICAgICAgICB4VGlsZSA9IHBhcnNlSW50KGNvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcbiAgICAgICAgICAgICAgICB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt4OnhUaWxlLCB5OnlUaWxlfTtcbiAgfVxuICBcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcbiAgICB2YXIgdGlsZU9iaiA9IHRoaXMudGlsZUFycmF5W3hdW3ldO1xuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XG4gIH1cbiAgXG4gIHRpbGVDbGlja2VkKG9iaikge1xuICAgIHRoaXMuaGlkZVRpbGVzKCk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlRGV0YWlsLngpLCB5OnBhcnNlSW50KG9iai50aWxlRGV0YWlsLnkpfSk7XG5cbiAgICAvLyBERUJVRyBCTE9DS1xuICAgIGNvbnNvbGUubG9nKFwiLS0tLVRJTEUgREVUQUlMLS0tLVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIk5hbWU6IFwiICsgb2JqLnRpbGVEZXRhaWwubmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJUeXBlOiBcIiArIG9iai50aWxlRGV0YWlsLnR5cGUpO1xuICAgIGNvbnNvbGUubG9nKFwiT2NjdXBpZWQ6IFwiICsgb2JqLnRpbGVEZXRhaWwub2NjdXBpZWQpO1xuICAgIGNvbnNvbGUubG9nKFwiRGFtYWdlZDogXCIgKyBvYmoudGlsZURldGFpbC5kYW1hZ2VkKTtcbiAgICBjb25zb2xlLmxvZyhcIlg6IFwiICsgb2JqLnRpbGVEZXRhaWwueCArIFwiIFk6XCIgKyBvYmoudGlsZURldGFpbC55KTtcbiAgICAvLyAgIHRoaXMuYWRkT3JkbmFuY2Uoe3BvaW50Ont4Om9iai50aWxlWCwgeTpvYmoudGlsZVl9LCB0eXBlOidiaW9kcm9uZScsIHV1aWQ6TWF0aC5yYW5kb20oKX0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBzaG93VGlsZXMoY29vcmRzQXJyYXksIGNvbG9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNIT1cgVElMRVMhIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvb3Jkc0FycmF5KTtcbiAgICAvLyBpZih0eXBlb2YoY29vcmRzQXJyYXkucG9pbnRBcnJheSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gICAgIGNvb3Jkc0FycmF5ID0gY29vcmRzQXJyYXkucG9pbnRBcnJheTtcbiAgICAvLyB9XG4gICAgZm9yICh2YXIgaSBpbiBjb29yZHNBcnJheSkge1xuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS5hbHBoYSA9IDAuNTtcbiAgICAgICAgaWYoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLnRpbnQgPSBjb2xvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLnRpbnQgPSAweGZmZDkwMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh7eDpjb29yZHNBcnJheVtpXS54LHk6Y29vcmRzQXJyYXlbaV0ueX0pO1xuICAgIH1cbiAgfVxuICBcbiAgaGlkZVRpbGVzKHRpbGVBcnJheSkge1xuICAgIGlmKCF0aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnNob3duVGlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3RoaXMuc2hvd25UaWxlc1tpXS54XVt0aGlzLnNob3duVGlsZXNbaV0ueV0uYWxwaGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRhbWFnZVRpbGUoZGF0YSkge1xuICBcbiAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtkYXRhLnhdW2RhdGEueV07XG4gICAgXG4gICAgY3VycmVudFRpbGUudGludCA9IDBYMzMzMzMzO1xuICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC44O1xuICAgIGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID0gdHJ1ZTtcbiAgICBcbiAgICB2YXIgdGVzdCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKGN1cnJlbnRUaWxlLngsIGN1cnJlbnRUaWxlLnkgKyhjdXJyZW50VGlsZS5oZWlnaHQvMiksICdib29tJyk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRlc3QpO1xuICAgIHRlc3QuYW5nbGUgPSAyNzA7XG4gICAgdGVzdC5hbmNob3Iuc2V0KDAuNSwwLjcpO1xuICAgIHRlc3QuYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB0ZXN0LmFuaW1hdGlvbnMucGxheSgnYm9vbScsIDIwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgXG4gIH1cbiAgXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgfVxuXG4gIFxuICBzZXJ2ZXJGdWxsKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc2VydmVyRnVsbCcpO1xuICB9ICAgXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcHRpa29uO1xuIiwiaW1wb3J0IFJlc291cmNlcyBmcm9tICcuLi9wcmVmYWJzL3Jlc291cmNlcyc7XG5pbXBvcnQgUGVyc29ubmVsIGZyb20gJy4uL3ByZWZhYnMvcGVyc29ubmVsJztcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcbmltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJzsgLy8gVGhpcyB3aWxsIGJlIGluY29ycG9yYXRlZCBpbiBwZXJzb25uZWxcblxuY2xhc3MgVGVhbSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxuICAgIHRoaXMucmVjID0gbmV3IFJlc291cmNlcygpO1xuICAgIHRoaXMucmVjRW51bSA9IHRoaXMucmVjLnJlc291cmNlRW51bTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIFxuICAgIHRoaXMucGVyc29ubmVsID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgfVxuICBcbiAgcmVmcmVzaCgpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICAvL1Jlc291cmNlIEludGVyZmFjZVxuICBnZXRSZWNDb3VudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLmdldENvdW50KHR5cGUpO1xuICB9XG4gIFxuICBjaGVja1JlYyh0eXBlLCBjb3VudCkge1xuICAgIGlmICh0aGlzLmdldFJlY0NvdW50KHR5cGUpID49IGNvdW50KSBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgZXhjaGFuZ2VSZWMoY29zdFR5cGUsIGNvc3RDb3VudCwgeWllbGRUeXBlLCB5aWVsZENvdW50KSB7XG4gIH1cbiAgXG4gIGFkZFJlYyh0eXBlLCBjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlYy5hZGQodHlwZSwgY291bnQpO1xuICB9XG4gIFxuICByZW1vdmVSZWModHlwZSwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMucmVtb3ZlKHR5cGUsIGNvdW50KTtcbiAgfVxuICBcbiAgYWRkQ2xvbmUoeCwgeSwgcHJvcHMpIHtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHgseSk7XG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSxwb2ludC54LHBvaW50LnkpO1xuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9IHg7XG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy55ID0geTtcbiAgICBcbiAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgICAgIGNsb25lW2ldID0gcHJvcHNbaV07XG4gICAgfVxuICAgIHRoaXMucGVyc29ubmVsLnB1c2goY2xvbmUpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZChjbG9uZSk7XG4gIH1cbiAgXG4gIGdldENsb25lKGNvb3JkKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPT0gY29vcmQueCAmJiB0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnkgPT0gY29vcmQueSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25uZWxbaV07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGtpbGxDbG9uZShjb29yZCkge1xuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmQpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wZXJzb25uZWwuaW5kZXhPZihjbG9uZSk7XG4gICAgdGhpcy5wZXJzb25uZWwuc3BsaWNlKGluZGV4LDEpO1xuICAgIFxuICAgIGNsb25lLnJlbW92ZSgpO1xuICB9XG4gICAgXG4gIG9mZmVyTGVnYWxDbG9uZXMoKSB7XG4gICAgLy8gT2ZmZXIgY2xvbmVzIHRoYXQgaGF2ZSBsZWdhbCBtb3Zlc1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLnBlcnNvbm5lbFtpXS5nZXRMZWdhbE1vdmVzKCk7XG5cbiAgICAgICAgaWYobW92ZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBvZmZlckd1bm5lcnMoKSB7XG4gICAgLy8gT2ZmZXIgZ3VubmVyIFxuICAgIHZhciBndW5uZXJGb3VuZCA9IGZhbHNlO1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5pc0d1bm5lcikge1xuICAgICAgICAgICAgZ3VubmVyRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgLy90aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBndW5uZXJGb3VuZDtcbiAgfVxuICBcbiAgc2VsZWN0R3VubmVyKGNvb3Jkcykge1xuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcbiAgICBpZighY2xvbmUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZighY2xvbmUuaXNHdW5uZXIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgdmFyIGV4aXN0aW5nR3VubmVyID0gdGhpcy5zZWxlY3RlZEd1bm5lcnMuaW5kZXhPZihjbG9uZSk7XG4gICAgaWYoZXhpc3RpbmdHdW5uZXIgPj0gMCl7XG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9mZigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoZXhpc3RpbmdHdW5uZXIsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goY2xvbmUpO1xuICAgIH1cbiAgfVxuICBcbiAgY2xlYXJHdW5uZXJzKCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zZWxlY3RlZEd1bm5lcnMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0uaGlnaGxpZ2h0T2ZmKCk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cbiAgXG4gIHNlbGVjdENsb25lRm9yTW92ZShjb29yZHMpIHsgICAgXG4gIFxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcbiAgICBpZighY2xvbmUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPZmYoKTtcbiAgICB9XG4gICAgdGhpcy5sZWdhbFRpbGVzID0gY2xvbmUuZ2V0TGVnYWxNb3ZlcygpO1xuICAgIHRoaXMuc2VsZWN0ZWRDbG9uZSA9IGNsb25lO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zaG93VGlsZXModGhpcy5sZWdhbFRpbGVzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgbW92ZVNlbGVjdGVkQ2xvbmUoY29vcmRzKSB7XG4gICAgZm9yKHZhciBpIGluIHRoaXMubGVnYWxUaWxlcykge1xuICAgICAgICBpZih0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVggPT0gY29vcmRzLnggJiYgdGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVZID09IGNvb3Jkcy55KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2xvbmUubW92ZShjb29yZHMpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRDbG9uZTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXM7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICB0aGlzLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IHRydWU7XG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XG4gICAgLy9zZXR1cCBkZXZpY2Ugc2NhbGluZ1xuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuZm9yY2VPcmllbnRhdGlvbih0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgICBcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xuICB9XG5cbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwgPSB7XG4gICAgICBzY29yZTogMCxcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcbiIsImltcG9ydCBEaWNlIGZyb20gJy4uL3ByZWZhYnMvZGljZSc7XG5pbXBvcnQgQ29uZmlybSBmcm9tICcuLi9wcmVmYWJzL2NvbmZpcm0nO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIFxuICBjcmVhdGUoKSB7XG4gIFxuICAgIC8vdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy50b2dnbGVGdWxsc2NyZWVuLCB0aGlzKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmdhbWUub3JkbmFuY2VHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuXG5cbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7XG5cbiAgICB0aGlzLmdhbWUuaHVkQmcgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2h1ZC1iZycpO1xuXG4gICAgdGhpcy5nYW1lLmRpY2UgPSBuZXcgRGljZSh0aGlzLmdhbWUsIDUwLCA0MCk7XG4gICAgdGhpcy5nYW1lLmRpY2Uuc2NhbGUuc2V0VG8oMC4yNSk7XG4gICAgdGhpcy5nYW1lLmNvbmZpcm0gPSBuZXcgQ29uZmlybSh0aGlzLmdhbWUsIDQwLDgwKTtcbiAgICB0aGlzLmdhbWUuY29uZmlybS5zY2FsZS5zZXRUbygwLjI1KTtcblxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5nYW1lLmRpY2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5nYW1lLmNvbmZpcm0pO1xuICAgIFxuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmh1ZEJnKTtcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5kaWNlKTtcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5jb25maXJtKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGhpcy5iYWNrZ3JvdW5kKTtcblxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxLCB7eDowLXRoaXMuYmFja2dyb3VuZC53aWR0aC8yLCB5OjAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodC8yfSk7XG5cblxuICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XG5cbiAgfVxuXG5cbiAgY3JlYXRlTW9kYWxzKCkge1xuICAgICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxuICAgICAgICB7XG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IGZhbHNlLFxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJBcmUgeW91IGhhcHB5IHdpdGhcXG4gdGhhdCBjbG9uZSBsYXlvdXQ/XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfeWVzXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXG4gICAgICAgICAgICBvZmZzZXRYOiAtODAsXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZTonc3RhcnQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogODAsXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBdXG4gICAgfSk7XG4gIH1cblxuICByZWZyZXNoQm9hcmQoKSB7XG5cbiAgICB2YXIgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aC90aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xuICAgIGlmKHNjYWxlID4gMS45KSB7XG4gICAgICAgIHNjYWxlID0gMS45O1xuICAgIH1cbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xuICAgIHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcbiAgICB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuc2NhbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5zY2FsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5zY2FsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAueCA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnggPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAueCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLng7XG4gICAgXG4gICAgaWYodGhpcy5nYW1lLnNlcHRpa29uLnBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgPSAtOTA7IFxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAueSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAueSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgPSA5MDsgXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXG4gICAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC55ID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAueSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC55ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXG4gICAgfVxuXG4gIH1cblxuICBcbiAgdXBkYXRlKCkge1xuICAgIC8vICAgdGhpcy5kaWNlLmZyYW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xuICAgIFxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBYOiAnICsgdGhpcy5nYW1lLmlucHV0LngsIDcwMCwgNjQpO1xuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xuICB9XG4gIFxuICByZW5kZXIgKCkge1xuICAgICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcbiAgICAgIC8qXG5cbiAgICB2YXIgeCA9IDMyO1xuICAgIHZhciB5ID0gMDtcbiAgICB2YXIgeWkgPSAzMjtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVyV2lkdGg6ICcgKyB3aW5kb3cuaW5uZXJXaWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlcldpZHRoOiAnICsgd2luZG93Lm91dGVyV2lkdGgsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IEhlaWdodDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydEhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lckhlaWdodDogJyArIHdpbmRvdy5pbm5lckhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XG5cbiAgICAvLyAgRGV2aWNlOiBIb3cgdG8gZ2V0IGRldmljZSBzaXplLlxuXG4gICAgLy8gIFVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIGZvciBkZXZpY2Ugd2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGZvciBkZXZpY2UgaGVpZ2h0LiBcbiAgICAvLyAgLmF2YWlsV2lkdGggYW5kIC5hdmFpbEhlaWdodCBnaXZlIHlvdSB0aGUgZGV2aWNlIHNpemUgbWludXMgVUkgdGFza2JhcnMuIChUcnkgb24gYW4gaVBob25lLikgXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxuXG4gICAgeCA9IDM1MDtcbiAgICB5ID0gMDtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCb2FyZCBHcm91cCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLng6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC54LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnksIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcblxuICAgIHggPSAzMjtcbiAgICB5ID0gMzAwO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLng6ICcgKyB0aGlzLmJhY2tncm91bmQueCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQud2lkdGg6ICcgKyB0aGlzLmJhY2tncm91bmQud2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuaGVpZ2h0OiAnICsgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xuICAgICovXG4gICAgfVxuICAgIFxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIGlmKHRoaXMuZ2FtZS5zY2FsZS5pc0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0YXJ0RnVsbFNjcmVlbihmYWxzZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJnUmF0aW8gPSB0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCAvIHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgIGlmICgoKHRoaXMud29ybGRSYXRpbyAtIHRoaXMuYmdSYXRpbykgLyAyICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSA+IDApIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodC90aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQueCA9ICh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmJhY2tncm91bmQud2lkdGgpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQud2lkdGgvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGgqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQueSA9ICh0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCkgLyAyO1xuICAgIH1cblxuICAgIC8vYWRkIGludHJvIHRleHRcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XG4gICAgICBmb250OiAnNDJweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgdGhpcy5pbnB1dC5vbkRvd24uYWRkKHRoaXMub25JbnB1dERvd24sIHRoaXMpO1xuXG4gICAgLy9wcmV2ZW50IGFjY2lkZW50YWwgY2xpY2stdGhydSBieSBub3QgYWxsb3dpbmcgc3RhdGUgdHJhbnNpdGlvbiBmb3IgYSBzaG9ydCB0aW1lXG4gICAgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcblxuICAgIHRoaXMuc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgfVxuXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcbiAgICB2YXIgbWF4ID0gbG9jYWxTdG9yYWdlLm1heFNjb3JlIHx8IDA7IC8vZGVmYXVsdCB2YWx1ZSBvZiAwIGlzIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgaWYgKHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPiBtYXgpeyBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgPSB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlOyB9XG4gIH1cblxuICByZXNldEdsb2JhbFZhcmlhYmxlcygpe1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xuICB9XG4gIHVwZGF0ZSgpIHt9XG5cbiAgb25JbnB1dERvd24gKCkge1xuICAgIGlmKHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSl7XG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXNzZXQgPSBudWxsO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgLy9zZXR1cCBsb2FkaW5nIGJhclxuICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoICogMC41IC0gMTEwLCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41IC0gMTAsICdwcmVsb2FkZXInKTtcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcbiAgICBcbiAgICAvL1NldHVwIGxvYWRpbmcgYW5kIGl0cyBldmVudHNcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgfVxuXG4gIGxvYWRSZXNvdXJjZXMoKSB7XG4gICAgICBcbiAgICAvL01FTlUgUkVTT1VSQ0VTXG4gICAgLy9tZW51IGJhY2tncm91bmRcbiAgICAvL3RleHQgaW1hZ2VzXG4gICAgLy9tdXNpYyBmaWxlcyA/XG4gICAgLy8gIExvYWQgZmlsdGVyIHNjcmlwdHNcbiAgICAvLyB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXIvbWFzdGVyL3YyL2ZpbHRlcnMvR3JheS5qcycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdCgnZ3JheScsICdodHRwczovL2Nkbi5yYXdnaXQuY29tL3Bob3RvbnN0b3JtL3BoYXNlci1jZS9tYXN0ZXIvZmlsdGVycy9HcmF5LmpzJyk7XG5cbiAgICBcbiAgICAvL2xvYWQgZ2FtZSBkYXRhXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcbiAgXG4gICAgLy9HQU1FIFJFU09VUkNFU1xuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCdhc3NldHMvbWVkaXVtX2JvYXJkLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkaWNlJywnYXNzZXRzL2RpY2UucG5nJywgMTI4LCAxOTQsIDEwKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaHVkLWJnJywnYXNzZXRzL2h1ZC1iZy5wbmcnKTtcbiAgICBcbiAgICAvLyBtb2RhbCBpbWFnZXNcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF95ZXMnLCdhc3NldHMvdGV4dF95ZXMucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xuXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdjbG9uZScsICdhc3NldHMvY2xvbmUucG5nJywgMTEwLCAxNjgpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdvcmRuYW5jZScsICdhc3NldHMvb3JkbmFuY2UucG5nJywyNjQsIDI2NCwgNyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcblxuICAgIC8vYXVkaW8gZmlsZXMgXG4gICAgXG4gICAgLy90aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3NoYWlycycsICdhc3NldHMvY3Jvc3NoYWlyX3JlZF9zbWFsbC5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsICdhc3NldHMvdGV4dF9nby5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcblxuICAgIC8vdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RhcmdldCcsICdhc3NldHMvdGFyZ2V0LnBuZycsMTI4LjY2LDEyOCk7XG5cbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdndW5zaG90JywnYXNzZXRzL2d1bnNob3Qud2F2Jyk7XG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZGluZycsJ2Fzc2V0cy9kaW5nLndhdicpO1xuICB9XG5cbiAgb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xuICAgIC8vdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xuXG5jbGFzcyBTZXJ2ZXJGdWxsIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIGlzIGZ1bGwuIFRyeSBhZ2FpbiBsYXRlci5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyRnVsbDtcbiIsImNsYXNzIFNldHVwIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuIH1cbiAgXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmdhbWUubmFtZSA9IFwidXNlclwiO1xuXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICBcbiAgICAvLyB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XG4gICAgLy8gdGhpcy5jcmVhdGVNb2RhbHMoKTtcbiAgICAvLyB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKCd1c2VybmFtZScpO1xuXG4gICAgLy8gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcbiAgICAvLyB0aGlzLmJrc3AgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5CQUNLU1BBQ0UpO1xuICAgIC8vIHRoaXMuYmtzcC5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xuICAgIC8vIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XG4gICAgLy8gdGhpcy5lbnRlci5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuYXNrTmV3UGxheWVyKCk7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gICAgcmV0dXJuO1xuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnNldHVwKCk7XG4gICAgXG59XG5cbmtleVByZXNzKGNoYXIpIHtcblxuICAgIGlmKHR5cGVvZihjaGFyKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xuICAgICAgICAgICAgY2hhciA9IFwiX1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5tb2RhbC51cGRhdGVNb2RhbFZhbHVlKHRoaXMuZ2FtZS5uYW1lLCAndXNlcm5hbWUnLCA0KTtcbn1cbiAgXG4gIGNyZWF0ZU1vZGFscygpIHtcbiAgXG4gICAgLy8gU3RhcnQgR2FtZVxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcbiAgICAgICAge1xuICAgICAgICB0eXBlOiBcInVzZXJuYW1lXCIsXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiB0cnVlLFxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcbiAgICAgICAgaXRlbXNBcnI6IFt7XG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlR5cGUgYSB1c2VybmFtZSxcXG50aGVuIGhpdCA8RU5URVI+XFxuXFxuKG1heCBvZiAyNSBjaGFyYWN0ZXJzKVwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogNTBcbiAgICAgICAgfSwgXVxuICAgIH0pO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XG4iXX0=
