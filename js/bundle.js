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
console.log("Here's game!");
console.log(game.septikon);
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

    var _this = _possibleConstructorReturn(this, (Biodrone.__proto__ || Object.getPrototypeOf(Biodrone)).call(this, game, x, y, 'ordnance', 1));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    _this.uuid = uuid;
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);
    _this.angle = _this.game.boardGroup.angle * -1;
    _this.game.personnelGroup.add(_this);
    return _this;
  }

  _createClass(Biodrone, [{
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
            console.log(data);
            if (data.type === "personnel") {
                if (data.details.action === "create") {
                    this.septikon.addPersonnel(data);
                } else if (data.details.action === "update") {
                    this.septikon.updatePersonnel(data);
                } else if (data.details.action === "delete") {
                    this.septikon.deletePersonnel(data);
                }
            } else if (data.type === "ordnance") {
                if (data.details.action === "create") {
                    this.septikon.createOrdnance(data);
                } else if (data.details.action === "update") {
                    this.septikon.updateOrdnance(data);
                } else if (data.details.action === "delete") {
                    this.septikon.deleteOrdnance(data);
                }
            } else if (data.type === "resource") {
                if (data.details.action === "create") {
                    this.septikon.createResources(data);
                } else if (data.details.action === "update") {
                    this.septikon.updateResources(data);
                } else if (data.details.action === "delete") {
                    this.septikon.deleteResources(data);
                }
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ordnance = function (_Phaser$Sprite) {
  _inherits(Ordnance, _Phaser$Sprite);

  //initialization code in the constructor
  function Ordnance(game, x, y, frame, type, uuid) {
    _classCallCheck(this, Ordnance);

    var ordFrame;
    switch (type.toLowerCase()) {
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
      case "warhead":
        ordFrame = 2;
        break;
      default:
        console.error("Bad ordnance type: " + type);
        return _possibleConstructorReturn(_this);
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

  _createClass(Ordnance, [{
    key: "move",
    value: function move(point) {
      var targetPixels = this.game.septikon.tileToPixels(point.x, point.y);
      var distance = Math.abs(this.y - targetPixels.y + this.x - targetPixels.x).toFixed(1);
      var tween = this.game.add.tween(this).to({ x: targetPixels.x, y: targetPixels.y }, 1200, Phaser.Easing.Cubic.Out, true);
    }
  }]);

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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resources = function (_Phaser$Sprite) {
  _inherits(Resources, _Phaser$Sprite);

  //initialization code in the constructor
  function Resources(game, x, y, type, uuid) {
    _classCallCheck(this, Resources);

    var graphics = game.add.graphics(0, 0);
    graphics.beginFill(0xffffff, 1);
    graphics.drawRoundedRect(100, 100, game.boardGroup.width / 39 - 4, game.boardGroup.width / 39 - 4, 14);

    var _this = _possibleConstructorReturn(this, (Resources.__proto__ || Object.getPrototypeOf(Resources)).call(this, game, x, y, graphics.generateTexture()));

    _this.angle = Math.floor(Math.random() * 40) - 20;
    _this.anchor.setTo(0.5);
    _this.tint = _this.resMap[type].tint;
    _this.resourceEnum = Object.freeze({
      OXYGEN: 0,
      ROCKET: 1,
      METAL: 2,
      ENERGY: 3,
      BIOMASS: 4,
      BIODRONE: 5,
      URANIUM: 6
    });
    _this.resMap = {
      energy1: {
        min: 0,
        max: 9,
        row: 2,
        tint: 0xfce315
      },
      energy2: {
        min: 20, //0
        max: 11, //9
        row: 2, //28
        tint: 0xfce315
      },
      oxygen: {
        min: 0, //20
        max: 9, //11
        row: 5, //25
        tint: 0x00b1f0
      },
      metal: {
        min: 0,
        max: 9,
        row: 3,
        tint: 0xfffffe
      },
      biodrone: {
        min: 20,
        max: 11,
        row: 4,
        tint: 0x9f3a9b
      },
      rocket: {
        min: 0, //20
        max: 9, //11
        row: 4, //26
        tint: 0xe82a2c
      },
      uranium: {
        min: 20,
        max: 11,
        row: 3,
        tint: 0xf36520
      },
      biomass: {
        min: 20,
        max: 11,
        row: 5,
        tint: 0x8ac342
      }
    };

    return _this;
  }

  _createClass(Resources, [{
    key: "check",
    value: function check(type, count) {
      if (this.resources[this.resourceEnum[type]] > count) return true;

      return false;
    }
  }, {
    key: "getType",
    value: function getType() {
      for (var i in this.resourceEnum) {
        if (this.resourceEnum[i] === this.type) {
          return i;
        }
      }
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
}(Phaser.Sprite);

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

var _resources = require("../prefabs/resources");

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Septikon = function () {
  //initialization code in the constructor
  function Septikon(game) {
    _classCallCheck(this, Septikon);

    this.game = game;
    this.player = {
      personnelArray: [],
      ordnanceArray: [],
      resourceArray: []
    };
    this.opponent = {
      personnelArray: [],
      ordnanceArray: [],
      resourceArray: []
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
      console.log("updating");
      console.log(data);
      if (data.details.action === "create" || data.details.action === "add") {
        this.addPersonnel(data);
      } else if (data.details.action === "read") {} else if (data.details.action === "update" || data.details.action === "move") {
        console.log("Update Personnel");
        console.log(data);
        for (var j = 0; j < this.player.personnelArray.length; j++) {
          var p = this.player.personnelArray[j];
          if (p.uuid === data.details.personnel.uuid) {
            p.move({
              x: data.details.personnel.x,
              y: data.details.personnel.y
            });
          }
        }
        for (var _j = 0; _j < this.opponent.personnelArray.length; _j++) {
          var _p = this.opponent.personnelArray[_j];
          if (_p.uuid === data.details.personnel.uuid) {
            _p.move({
              x: data.details.personnel.x,
              y: data.details.personnel.y
            });
          }
        }
      } else if (data.details.action === "delete" || data.details.action === "remove") {
        this.deletePersonnel(data.details.personnel, data.details.playerID);
        // this.removePersonnel(data.details.personnel, data.details.playerID);
      } else {
        console.log("Data set is outside of CRUD:");
        console.log(data);
      }
    }
  }, {
    key: "updateOrdnance",
    value: function updateOrdnance(data) {
      console.log("Let's update the ord");
      var ordArray = [];
      var svrOrd = data.details.ordnance;
      if (data.details.playerID == this.player.id) {
        ordArray = this.player.ordnanceArray;
      } else {
        ordArray = this.opponent.ordnanceArray;
      }

      for (var i in ordArray) {
        var o = ordArray[i];
        if (svrOrd.uuid === o.uuid) {
          if (o.x !== svrOrd.x || o.y !== svrOrd.y) {
            o.move({ x: svrOrd.x, y: svrOrd.y });
          }
        }
      }
    }
  }, {
    key: "updateResources",
    value: function updateResources(data) {}
  }, {
    key: "createResource",
    value: function createResource(data) {
      if (data.details.resourceArray !== undefined) {
        var rA = data.details.resourceArray;
        for (var i in rA) {
          this.createResource(rA[i]);
        }
      } else {
        var res = new _resources2.default(this.game, 0, 0, data.details.resource.type, data.details.resource.uuid());
      }
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
    key: "updateArms",
    value: function updateArms(data) {
      console.log("shows weapons on clones");
    }
  }, {
    key: "updateTile",
    value: function updateTile(data) {
      var newTile = data.details.tile;
      var oldTile = this.tileArray[newTile.x][newTile.y].tileDetail;
      if (oldTile.damaged === false && newTile.damaged === true) {
        this.damageTile(oldTile);
      }
      this.tileArray[newTile.x][newTile.y].tileDetail = newTile;
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
    key: "getPersonnel",
    value: function getPersonnel(p) {
      for (var i in this.player.personnelArray) {
        if (p.uuid === this.player.personnelArray[i].uuid) {
          return p;
        }
      }
      for (var _i in this.opponent.personnelArray) {
        if (p.uuid === this.opponent.personnelArray[_i].uuid) {
          return p;
        }
      }
      return false;
    }
  }, {
    key: "addPersonnel",
    value: function addPersonnel(data) {
      var p = data.details.personnel;
      var pFound = this.getPersonnel(data.details.personnel);
      if (pFound !== false) {
        data.details.action = "update";
        return this.updatePersonnel(data);
      }
      var c = this.tileToPixels(p.x, p.y);
      var nP = null;
      var pID = data.details.playerID;
      if (p.typeEnum.CLONE === p.type) {
        nP = new _clone2.default(this.game, c.x, c.y, null, p.uuid);
      } else if (p.typeEnum.BIODRONE === p.type) {
        nP = new _biodrone2.default(this.game, c.x, c.y, null, p.uuid);
      }

      if (pID == this.player.id) {
        this.player.personnelArray.push(nP);
      } else {
        this.opponent.personnelArray.push(nP);
      }
      console.log("Current personnel set");
      console.log("new pID is " + pID);
      console.log("player " + this.player.id);
      console.log(this.player.personnelArray);
      console.log("opponent " + this.opponent.id);
      console.log(this.opponent.personnelArray);
      console.log("-------------");
    }
  }, {
    key: "createOrdnance",
    value: function createOrdnance(data) {
      var svrOrd = data.details.ordnance;
      console.log(svrOrd);
      var point = this.tileToPixels(svrOrd.x, svrOrd.y);
      var newOrd = new _ordnance2.default(this.game, point.x, point.y, null, data.details.type, svrOrd.uuid);
      if (data.details.playerID == this.player.id) {
        this.player.ordnanceArray.push(newOrd);
      } else {
        this.opponent.ordnanceArray.push(newOrd);
      }
      this.game.boardGroup.add(newOrd);
    }
  }, {
    key: "deleteOrdnance",
    value: function deleteOrdnance(data) {
      var tO = data.details.ordnance;
      for (var i in this.player.ordnanceArray) {
        var o = this.player.ordnanceArray[i];
        if (o.uuid === tO.uuid) {
          o.destroy();
        }
      }
      for (var _i2 in this.opponent.ordnanceArray) {
        var _o = this.opponent.ordnanceArray[_i2];
        if (_o.uuid === tO.uuid) {
          _o.destroy();
        }
      }
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
    key: "deletePersonnel",
    value: function deletePersonnel(data) {
      var tP = data.details.personnel;
      for (var i in this.player.personnelArray) {
        var p = this.player.personnelArray[i];
        if (p.uuid === tP.uuid) {
          p.destroy();
        }
      }
      for (var _i3 in this.opponent.personnelArray) {
        var _p2 = this.opponent.personnelArray[_i3];
        if (_p2.uuid === tP.uuid) {
          _p2.destroy();
        }
      }
      return true;
    }
  }, {
    key: "updatePlayer",
    value: function updatePlayer(details) {
      for (var i in details) {
        this.player[i] = details[i];
      }

      // DEBUG BLOCK
      this.game.client.sendInput({ event: "tileClicked", x: 7, y: 20 });
      this.game.client.sendInput({ event: "tileClicked", x: 7, y: 0 });
      this.game.client.sendInput({ event: "tileClicked", x: 5, y: 10 });
      this.game.client.sendInput({ event: "tileClicked", x: 6, y: 17 });
      this.game.client.sendInput({ event: "tileClicked", x: 7, y: 14 });

      this.game.client.sendInput({ event: "tileClicked", x: 30, y: 2 });
      this.game.client.sendInput({ event: "tileClicked", x: 26, y: 10 });
      this.game.client.sendInput({ event: "tileClicked", x: 30, y: 4 });
      this.game.client.sendInput({ event: "tileClicked", x: 30, y: 5 });
      this.game.client.sendInput({ event: "tileClicked", x: 30, y: 6 });

      // this.game.client.sendInput({ event: "confirmClicked"});
      // this.game.client.sendInput({ event: "diceClicked"});
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
            x = parseInt(coords[0]);
            y = parseInt(coords[1]);
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
      console.log(obj.tileDetail);
      // console.log("Name: " + obj.tileDetail.name);
      // console.log("Type: " + obj.tileDetail.type);
      // console.log("Occupied: " + obj.tileDetail.occupied);
      // console.log("Damaged: " + obj.tileDetail.damaged);
      // console.log("X: " + obj.tileDetail.x + " Y:" + obj.tileDetail.y);
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
    value: function damageTile(targetTile) {
      var t = this.tileArray[targetTile.x][targetTile.y];

      t.tint = 0x333333;
      t.alpha = 0.8;

      var boom = this.game.add.sprite(t.x, t.y + t.height / 2, "boom");
      this.game.boardGroup.add(boom);
      boom.angle = 90;
      boom.anchor.set(0.5, 0.7);
      boom.animations.add("boom");
      boom.animations.play("boom", 20, false, true);
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

},{"../prefabs/biodrone":6,"../prefabs/clone":8,"../prefabs/ordnance":13,"../prefabs/resources":15}],17:[function(require,module,exports){
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
            this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
            this.game.input.onUp.add(this.mouseUp, this);
            this.game.input.onDown.add(this.mouseDown, this);
            this.view = 2;
            this.refreshBoard();
        }
    }, {
        key: 'mouseDown',
        value: function mouseDown() {
            this.mouseIsDown = true;
            this.startX = this.game.input.x;
            console.log("down");
            this.viewChangeComplete = false;
        }
    }, {
        key: 'mouseUp',
        value: function mouseUp() {
            this.mouseIsDown = false;
            console.log("up");
        }
    }, {
        key: 'swipeDone',
        value: function swipeDone() {
            if (this.viewChangeComplete === false) {
                var endX = this.game.input.x;
                if (endX < this.startX) {
                    this.game.debug.text('Swiped left', 700, 95);
                    this.view--;
                } else {
                    this.game.debug.text('Swipe right', 700, 95);
                    this.view++;
                }
                if (this.view > 4) {
                    this.view = 1;
                }
                if (this.view < 1) {
                    this.view = 4;
                }
                this.viewChangeComplete = true;
            }
        }
    }, {
        key: 'keyPress',
        value: function keyPress(char) {
            this.lastKey = char;
            if (char === "1") {
                this.view = 1;
            }
            if (char === "2") {
                this.view = 2;
            }
            if (char === "3") {
                this.view = 3;
            }
            if (char === "4") {
                this.view = 4;
            }
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
            var scale = null;
            if (this.view === 1 || this.view === 3) {
                scale = window.innerWidth / this.background.height;
            } else {
                scale = window.innerHeight * 0.8 / this.background.height;
            }
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

            if (this.view === 1) {
                // if(this.game.septikon.player.id == 1) {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = -90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            }
            if (this.view === 3) {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            }
            if (this.view === 2) {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 0;
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY + window.innerHeight * 0.1; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                // this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - ((this.background.width*scale)-window.innerHeight)/2; // Centered on this player's side
            }
            if (this.view === 4) {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 180;
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY + window.innerHeight * 0.1; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                // this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - ((this.background.width*scale)-window.innerHeight)/2; // Centered on this player's side
            }
        }
    }, {
        key: 'update',
        value: function update() {
            //   this.dice.frame = Math.floor(Math.random() * 6) + 1;
            this.game.debug.text('Keyboard', 700, 32);

            // let current = Phaser.Keyboard.
            this.game.debug.text('Key pressed: ' + this.lastKey, 700, 64);

            this.game.debug.text('Mouse X: ' + this.game.input.x, 700, 200);
            this.game.debug.text('Mouse Y: ' + this.game.input.y, 700, 230);
            if (this.mouseIsDown === true) {
                var distX = Math.abs(this.game.input.x - this.startX);
                if (distX > 50) {
                    this.swipeDone();
                }
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9jbGllbnQvbWFpbi5qcyIsInNyYy9jbGllbnQvbW9kYWwuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvYmlvZHJvbmUuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL2Nsb25lLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL2NvbmZpcm0uanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvY3Jvc3NoYWlycy5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9kaWNlLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9vcmRuYW5jZS5qcyIsInNyYy9jbGllbnQvcHJlZmFicy9wZXJzb25uZWwuanMiLCJzcmMvY2xpZW50L3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL3NlcHRpa29uLmpzIiwic3JjL2NsaWVudC9wcmVmYWJzL3Rva2VuLmpzIiwic3JjL2NsaWVudC9zdGF0ZXMvYm9vdC5qcyIsInNyYy9jbGllbnQvc3RhdGVzL2dhbWUuanMiLCJzcmMvY2xpZW50L3N0YXRlcy9nYW1lb3Zlci5qcyIsInNyYy9jbGllbnQvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9jbGllbnQvc3RhdGVzL3NlcnZlckZ1bGwuanMiLCJzcmMvY2xpZW50L3N0YXRlcy9zZXR1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QWlCO0FBQ2IsMkJBQU8sR0FBUDtBQUNIO0FBQ0QscUJBQUssSUFBTCxDQUFVLElBQVYsSUFBa0IsSUFBbEI7QUFDSDtBQUNELGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGdCQUFoQixDQUFpQyxLQUFLLElBQUwsQ0FBVSxJQUEzQyxFQUFpRCxVQUFqRCxFQUE2RCxDQUE3RDtBQUNIOzs7dUNBRWdCOztBQUViO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FDSTtBQUNBLHNCQUFNLFVBRE47QUFFQSxtQ0FBbUIsSUFGbkI7QUFHQSxtQ0FBbUIsSUFIbkI7QUFJQSwwQkFBVSxDQUFDO0FBQ1AsMEJBQU0sVUFEQztBQUVQLGtDQUFjLFVBRlA7QUFHUCxrQ0FBYyxHQUhQO0FBSVAsbUNBQWUsR0FKUjtBQUtQLG1DQUFlO0FBTFIsaUJBQUQsRUFNUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyw4REFGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLEtBQUssSUFBTCxDQUFVLElBRnBCO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVM7QUFOVixpQkFiTztBQUpWLGFBREo7QUE0QkQ7Ozs7RUE1RWlCLE9BQU8sSzs7a0JBK0VaLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vcHJlZmFicy9jbGllbnQnO1xyXG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9ib290JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XHJcbmltcG9ydCBTZXR1cCBmcm9tICcuL3N0YXRlcy9zZXR1cCc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9zdGF0ZXMvcHJlbG9hZGVyJztcclxuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcclxuaW1wb3J0IFNlcnZlckZ1bGwgZnJvbSAnLi9zdGF0ZXMvc2VydmVyRnVsbCc7XHJcbmltcG9ydCBTZXB0aWtvbiBmcm9tICcuL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xyXG4gICAgfVxyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xyXG59XHJcblxyXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKFwiMTAwXCIsIFwiMTAwXCIsIFBoYXNlci5BVVRPKTtcclxuZ2FtZS5zZXB0aWtvbiA9IG5ldyBTZXB0aWtvbihnYW1lKTtcclxuY29uc29sZS5sb2coXCJIZXJlJ3MgZ2FtZSFcIik7XHJcbmNvbnNvbGUubG9nKGdhbWUuc2VwdGlrb24pO1xyXG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XHJcblxyXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnc2V0dXAnLCBuZXcgU2V0dXAoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdzZXJ2ZXJGdWxsJywgbmV3IFNlcnZlckZ1bGwoKSk7XHJcblxyXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiIsInZhciBnYW1lTW9kYWwgPSBnYW1lTW9kYWwgfHwge307XHJcblxyXG5cclxuZ2FtZU1vZGFsID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHRnYW1lLm1vZGFscyA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBbaGlkZU1vZGFsIGRlc2NyaXB0aW9uXVxyXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXHJcblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cclxuXHQgKi9cclxuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XHJcblx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcclxuXHRcdFx0dmFyIGluY2x1ZGVCYWNrZ3JvdW5kID0gb3B0aW9ucy5pbmNsdWRlQmFja2dyb3VuZDsgLy8gbWF5YmUgbm90IG9wdGlvbmFsXHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XHJcblx0XHRcdFx0MC43IDogb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eTtcclxuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIHZDZW50ZXIgPSBvcHRpb25zLnZDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcclxuXHRcdFx0dmFyIGZpeGVkVG9DYW1lcmEgPSBvcHRpb25zLmZpeGVkVG9DYW1lcmEgfHwgZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgbW9kYWw7XHJcblx0XHRcdHZhciBpbm5lck1vZGFsO1xyXG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcblx0XHRcdGlmIChmaXhlZFRvQ2FtZXJhID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC55ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWwgPSBnYW1lLmFkZC5ncmFwaGljcyhnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xyXG5cdFx0XHRcdG1vZGFsLnggPSAwO1xyXG5cdFx0XHRcdG1vZGFsLnkgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbC5kcmF3UmVjdCgwLCAwLCBnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRcdGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xyXG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XHJcblx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtb2RhbExhYmVsO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcclxuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xyXG5cdFx0XHRcdHZhciBpdGVtQ29sb3IgPSBpdGVtLmNvbG9yIHx8IDB4MDAwMDAwO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xyXG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlID0gaXRlbS5zdHJva2UgfHwgJzB4MDAwMDAwJztcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XHJcblx0XHRcdFx0dmFyIG9mZnNldFggPSBpdGVtLm9mZnNldFggfHwgMDtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xyXG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xyXG5cdFx0XHRcdHZhciBjb250ZW50ID0gaXRlbS5jb250ZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcclxuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBpdGVtLmNhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcclxuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbkhvdmVyID0gaXRlbS5idXR0b25Ib3ZlciB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY09wYWNpdHkgPSBpdGVtLmdyYXBoaWNPcGFjaXR5IHx8IDE7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNSYWRpdXMgPSBpdGVtLmdyYXBoaWNSYWRpdXMgfHwgMDtcclxuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBpdGVtQW5jaG9yID0gaXRlbS5hbmNob3IgfHwge3g6MCx5OjB9O1xyXG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1ZID0gaXRlbS55IHx8IDA7XHJcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVIZWlnaHQgPSBpdGVtLnRpbGVTcHJpdGVIZWlnaHQgfHwgZ2FtZS5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xyXG5cclxuXHRcdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXHJcblx0XHRcdFx0XHRcdFx0ZmlsbDogXCIjXCIgKyBTdHJpbmcoaXRlbUNvbG9yKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduOiBpdGVtQWxpZ25cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0JztcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5hbGlnbiA9IHRleHRBbGlnbjtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2ltYWdlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInRpbGVTcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxyXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0aWxlU3ByaXRlJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxyXG5cdFx0XHRcdFx0XHR0aGlzLCBidXR0b25Ib3ZlciwgY29udGVudCwgYnV0dG9uQWN0aXZlLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XHJcblx0XHRcdFx0XHRpZiAoZ3JhcGhpY1JhZGl1cyA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCwgZ3JhcGhpY1JhZGl1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwubG9ja1Bvc2l0aW9uID0gbG9ja1Bvc2l0aW9uO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xyXG5cclxuXHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChjYWxsYmFjaywgbW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgIT09IFwiYml0bWFwVGV4dFwiICYmIGl0ZW1UeXBlICE9PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0gPSBtb2RhbEdyb3VwO1xyXG5cclxuXHRcdH0sXHJcblx0XHR1cGRhdGVNb2RhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHR5cGUsIGluZGV4LCBpZCkge1xyXG5cdFx0XHR2YXIgaXRlbTtcclxuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcclxuXHRcdFx0XHRpdGVtID0gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcclxuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0aXRlbS5sb2FkVGV4dHVyZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0fSxcclxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0aGlkZU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XHJcblx0XHRcdGRlbGV0ZSBnYW1lLm1vZGFsc1t0eXBlXTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQmlvZHJvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgICBzdXBlcihnYW1lLCB4LCB5LCAnb3JkbmFuY2UnLCAxKTtcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgIHRoaXMud2lkdGggPSAyNztcclxuICAgICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XHJcbiAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5hZGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfSAgXHJcbiAgICBtb3ZlKHBvaW50KSB7XHJcbiAgICAgIGxldCB0YXJnZXRQaXhlbHMgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSB0YXJnZXRQaXhlbHMueSArIHRoaXMueCAtIHRhcmdldFBpeGVscy54KS50b0ZpeGVkKDEpO1xyXG4gICAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7eDp0YXJnZXRQaXhlbHMueCwgeTp0YXJnZXRQaXhlbHMueX0sIDEyMDAsIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgICAgLy8gdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBCaW9kcm9uZTtcclxuICAiLCJcclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWxsIG1lc3NhZ2VzIGZyb20gc2VydmVyIGNvbnRhaW4gZGF0YS50eXBlIGFuZCBkYXRhLmFjdGlvblxyXG4gICAgICAgIC8vIHR5cGUgPSBvbmUgb2YgZWl0aGVyIFwicGVyc29ubmVsXCIgb3IgXCJyZXNvdXJjZVwiIG9yIHdoYXRldmVyLiBcclxuICAgICAgICAvLyBhY3Rpb24gPSBjcmVhdGUsIHJlYWQsIHVwZGF0ZSwgb3IgZGVsZXRlLiAgXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gXCJwZXJzb25uZWxcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiY3JlYXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmFkZFBlcnNvbm5lbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24udXBkYXRlUGVyc29ubmVsKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcImRlbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5kZWxldGVQZXJzb25uZWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcIm9yZG5hbmNlXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcImNyZWF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5jcmVhdGVPcmRuYW5jZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24udXBkYXRlT3JkbmFuY2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmRlbGV0ZU9yZG5hbmNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJyZXNvdXJjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJjcmVhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uY3JlYXRlUmVzb3VyY2VzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcInVwZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVSZXNvdXJjZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiZGVsZXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmRlbGV0ZVJlc291cmNlcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwidGlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZVRpbGUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSBcImRpY2VcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5nYW1lLmRpY2Uuc2V0VmFsdWUoZGF0YS5kZXRhaWxzLnZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09IFwiYXJtc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1heSBuZWVkIHRvIGJlIGEgYmFzaWMgcGVyc29ubmVsIHVwZGF0ZT9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHBlcnNvbm5lbCBhcm1zIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVBcm1zKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gXCJpbmZvXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXB0aWtvbi51cGRhdGVJbmZvKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBtZXNzYWdlcyBhcmUgbG9va2luZyBmb3IgY2xpZW50IHJlc3BvbnNlIHRvIGEgbW9kYWwgbWVzc2FnZVxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVFVRVNUOiAnKTtcclxuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNrU3RhcnRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnNob3dNb2RhbCgnYXNrU3RhcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBnb2VzIGF3YXlcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUNUSU9OOiBcIik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKGRhdGEuZGV0YWlscyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbWV0aG9kIGZvdW5kIGNhbGxlZCBzZXB0aWtvbi5cIiArIGRhdGEuY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRhc2tOZXdQbGF5ZXIoKSB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXdQbGF5ZXInLCB7dXVpZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKX0pO1xyXG5cdH1cclxuICAgIFxyXG4gICAgc2VuZElucHV0KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2lucHV0JywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuXHJcbmNsYXNzIENsb25lIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpO1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgIHRoaXMud2lkdGggPSAyNztcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmFuZ2xlICogLTE7XHJcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYWRkKHRoaXMpO1xyXG4gIH1cclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9ICBcclxuICBtb3ZlKHBvaW50KSB7XHJcbiAgICBsZXQgdGFyZ2V0UGl4ZWxzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhwb2ludC54LCBwb2ludC55KTtcclxuICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHRhcmdldFBpeGVscy55ICsgdGhpcy54IC0gdGFyZ2V0UGl4ZWxzLngpLnRvRml4ZWQoMSk7XHJcbiAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7eDp0YXJnZXRQaXhlbHMueCwgeTp0YXJnZXRQaXhlbHMueX0sIDEyMDAsIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgIC8vIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb25lO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBDb25maXJtIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gICAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSkgeyAgXHJcbiAgICAgIHN1cGVyKGdhbWUsIHgsIHksICd0ZXh0X2dvJyk7XHJcbiAgXHJcbiAgICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgXHJcbiAgICAgIC8vc2V0IGNsaWNrIGV2ZW50XHJcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XHJcbiAgXHJcbiAgICAgIC8vc2V0IHNpemVcclxuICAgICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgICAvLyB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgIC8vIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjbGlja2VkICgpIHtcclxuICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnY29uZmlybUNsaWNrZWQnfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgLy8gdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG4gICAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENvbmZpcm07XHJcbiAgIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSAzNTsgXHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG5cclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpe1xyXG4gICAgdGhpcy54ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci54O1xyXG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3NzaGFpcnM7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdkaWNlJywgZnJhbWUpO1xyXG5cclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuXHJcbiAgICAvL3NldCBjbGljayBldmVudFxyXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgIC8vIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICBcclxuICAgIHRoaXMudmFsdWUgPSAxMDtcclxuICAgIHRoaXMuZnJhbWUgPSB0aGlzLnZhbHVlLTE7XHJcbiAgfVxyXG5cclxuICBjbGlja2VkICgpIHtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ2RpY2VDbGlja2VkJ30pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgLy8gdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG4gICAgICAvLyB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZnJhbWUgPSB2YWx1ZSAtIDE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlO1xyXG4iLCJjbGFzcyBNYXN0ZXIge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyOyIsImNsYXNzIE9yZG5hbmNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdHlwZSwgdXVpZCkge1xyXG4gICAgdmFyIG9yZEZyYW1lO1xyXG4gICAgc3dpdGNoICh0eXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSBcInNoaWVsZFwiOlxyXG4gICAgICAgIG9yZEZyYW1lID0gNDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XHJcbiAgICAgICAgb3JkRnJhbWUgPSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XHJcbiAgICAgICAgb3JkRnJhbWUgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicm9ja2V0XCI6XHJcbiAgICAgICAgb3JkRnJhbWUgPSAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwid2FyaGVhZFwiOlxyXG4gICAgICAgIG9yZEZyYW1lID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFkIG9yZG5hbmNlIHR5cGU6IFwiICsgdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ29yZG5hbmNlJywgb3JkRnJhbWUpO1xyXG5cclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgXHJcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcclxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcblxyXG4gIH1cclxuXHJcbiAgbW92ZShwb2ludCkge1xyXG4gICAgbGV0IHRhcmdldFBpeGVscyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSB0YXJnZXRQaXhlbHMueSArIHRoaXMueCAtIHRhcmdldFBpeGVscy54KS50b0ZpeGVkKDEpO1xyXG4gICAgbGV0IHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6dGFyZ2V0UGl4ZWxzLngsIHk6dGFyZ2V0UGl4ZWxzLnl9LCAxMjAwLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgdHlwZSwgdXVpZCkgeyBcclxuICAgIGxldCBncmFwaGljcyA9IGdhbWUuYWRkLmdyYXBoaWNzKDAsMCk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KFxyXG4gICAgICAxMDAsXHJcbiAgICAgIDEwMCxcclxuICAgICAgKGdhbWUuYm9hcmRHcm91cC53aWR0aCAvIDM5KSAtIDQsXHJcbiAgICAgIChnYW1lLmJvYXJkR3JvdXAud2lkdGggLyAzOSkgLSA0LFxyXG4gICAgICAxNFxyXG4gICAgKTtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MCkgLSAyMDtcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgICB0aGlzLnRpbnQgPSB0aGlzLnJlc01hcFt0eXBlXS50aW50O1xyXG4gICAgdGhpcy5yZXNvdXJjZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBPWFlHRU46IDAsXHJcbiAgICAgICAgUk9DS0VUOiAxLFxyXG4gICAgICAgIE1FVEFMOiAyLFxyXG4gICAgICAgIEVORVJHWTogMyxcclxuICAgICAgICBCSU9NQVNTOiA0LFxyXG4gICAgICAgIEJJT0RST05FOiA1LFxyXG4gICAgICAgIFVSQU5JVU06IDZcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNNYXAgPSB7XHJcbiAgICAgIGVuZXJneTE6e1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDksXHJcbiAgICAgICAgcm93OiAyLFxyXG4gICAgICAgIHRpbnQ6IDB4ZmNlMzE1XHJcbiAgICAgIH0sIFxyXG4gICAgICBlbmVyZ3kyOntcclxuICAgICAgICBtaW46IDIwLC8vMFxyXG4gICAgICAgIG1heDogMTEsLy85XHJcbiAgICAgICAgcm93OiAyLC8vMjhcclxuICAgICAgICB0aW50OiAweGZjZTMxNVxyXG4gICAgICB9LFxyXG4gICAgICBveHlnZW46e1xyXG4gICAgICAgIG1pbjogMCwvLzIwXHJcbiAgICAgICAgbWF4OiA5LC8vMTFcclxuICAgICAgICByb3c6IDUsLy8yNVxyXG4gICAgICAgIHRpbnQ6IDB4MDBiMWYwXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGFsOntcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiA5LFxyXG4gICAgICAgIHJvdzogMyxcclxuICAgICAgICB0aW50OiAweGZmZmZmZVxyXG4gICAgICB9LFxyXG4gICAgICBiaW9kcm9uZTp7XHJcbiAgICAgICAgbWluOiAyMCxcclxuICAgICAgICBtYXg6IDExLFxyXG4gICAgICAgIHJvdzogNCxcclxuICAgICAgICB0aW50OiAweDlmM2E5YlxyXG4gICAgICB9LFxyXG4gICAgICByb2NrZXQ6e1xyXG4gICAgICAgIG1pbjogMCwvLzIwXHJcbiAgICAgICAgbWF4OiA5LC8vMTFcclxuICAgICAgICByb3c6IDQsLy8yNlxyXG4gICAgICAgIHRpbnQ6IDB4ZTgyYTJjXHJcbiAgICAgIH0sXHJcbiAgICAgIHVyYW5pdW06e1xyXG4gICAgICAgIG1pbjogMjAsXHJcbiAgICAgICAgbWF4OiAxMSxcclxuICAgICAgICByb3c6IDMsXHJcbiAgICAgICAgdGludDogMHhmMzY1MjBcclxuICAgICAgfSxcclxuICAgICAgYmlvbWFzczp7XHJcbiAgICAgICAgbWluOiAyMCxcclxuICAgICAgICBtYXg6IDExLFxyXG4gICAgICAgIHJvdzogNSxcclxuICAgICAgICB0aW50OiAweDhhYzM0MlxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY2hlY2sodHlwZSwgY291bnQpIHtcclxuICAgIGlmKHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA+IGNvdW50KVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHlwZSgpIHtcclxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5yZXNvdXJjZUVudW0pIHtcclxuICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUVudW1baV0gPT09IHRoaXMudHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvdW50KHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlc291cmNlc1t0eXBlXTtcclxuICB9XHJcbiAgICBcclxuICBhZGQodHlwZSwgY291bnQpIHtcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKHR5cGUsIGNvdW50KSB7XHJcbiAgICB0aGlzLnJlc291cmNlc1t0eXBlXSAtPSBjb3VudDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlczsiLCJpbXBvcnQgQ2xvbmUgZnJvbSBcIi4uL3ByZWZhYnMvY2xvbmVcIjtcclxuaW1wb3J0IEJpb2Ryb25lIGZyb20gXCIuLi9wcmVmYWJzL2Jpb2Ryb25lXCI7XHJcbmltcG9ydCBPcmRuYW5jZSBmcm9tIFwiLi4vcHJlZmFicy9vcmRuYW5jZVwiO1xyXG5pbXBvcnQgUmVzb3VyY2UgZnJvbSBcIi4uL3ByZWZhYnMvcmVzb3VyY2VzXCI7XHJcblxyXG5jbGFzcyBTZXB0aWtvbiB7XHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxyXG4gICAgICBvcmRuYW5jZUFycmF5OiBbXSxcclxuICAgICAgcmVzb3VyY2VBcnJheTpbXVxyXG4gICAgfTtcclxuICAgIHRoaXMub3Bwb25lbnQgPSB7XHJcbiAgICAgIHBlcnNvbm5lbEFycmF5OiBbXSxcclxuICAgICAgb3JkbmFuY2VBcnJheTogW10sXHJcbiAgICAgIHJlc291cmNlQXJyYXk6W11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xyXG5cclxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IG51bGw7XHJcbiAgICB0aGlzLnNlbGVjdGVkVG9Nb3ZlID0gbnVsbDtcclxuICAgIHRoaXMubGVnYWxHdW5uZXJzID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBlcnNvbm5lbChkYXRhKSB7XHJcbiAgICAvLyBDUlVEIG9uIHBlcnNvbm5lbFxyXG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGluZ1wiKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiY3JlYXRlXCIgfHwgZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJhZGRcIikge1xyXG4gICAgICB0aGlzLmFkZFBlcnNvbm5lbChkYXRhKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJyZWFkXCIpIHtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJ1cGRhdGVcIiB8fCBkYXRhLmRldGFpbHMuYWN0aW9uID09PSBcIm1vdmVcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZSBQZXJzb25uZWxcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtqXTtcclxuICAgICAgICBpZiAocC51dWlkID09PSBkYXRhLmRldGFpbHMucGVyc29ubmVsLnV1aWQpIHtcclxuICAgICAgICAgIHAubW92ZSh7XHJcbiAgICAgICAgICAgIHg6ZGF0YS5kZXRhaWxzLnBlcnNvbm5lbC54LFxyXG4gICAgICAgICAgICB5OmRhdGEuZGV0YWlscy5wZXJzb25uZWwueVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxldCBwID0gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXTtcclxuICAgICAgICBpZiAocC51dWlkID09PSBkYXRhLmRldGFpbHMucGVyc29ubmVsLnV1aWQpIHtcclxuICAgICAgICAgIHAubW92ZSh7XHJcbiAgICAgICAgICAgIHg6ZGF0YS5kZXRhaWxzLnBlcnNvbm5lbC54LFxyXG4gICAgICAgICAgICB5OmRhdGEuZGV0YWlscy5wZXJzb25uZWwueVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiZGVsZXRlXCIgfHwgZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJyZW1vdmVcIikge1xyXG4gICAgICB0aGlzLmRlbGV0ZVBlcnNvbm5lbChkYXRhLmRldGFpbHMucGVyc29ubmVsLCBkYXRhLmRldGFpbHMucGxheWVySUQpO1xyXG4gICAgICAvLyB0aGlzLnJlbW92ZVBlcnNvbm5lbChkYXRhLmRldGFpbHMucGVyc29ubmVsLCBkYXRhLmRldGFpbHMucGxheWVySUQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJEYXRhIHNldCBpcyBvdXRzaWRlIG9mIENSVUQ6XCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZU9yZG5hbmNlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTGV0J3MgdXBkYXRlIHRoZSBvcmRcIik7XHJcbiAgICBsZXQgb3JkQXJyYXkgPSBbXTtcclxuICAgIGxldCBzdnJPcmQgPSBkYXRhLmRldGFpbHMub3JkbmFuY2U7XHJcbiAgICBpZiAoZGF0YS5kZXRhaWxzLnBsYXllcklEID09IHRoaXMucGxheWVyLmlkKSB7XHJcbiAgICAgIG9yZEFycmF5ID0gdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9yZEFycmF5ID0gdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgaW4gb3JkQXJyYXkpIHtcclxuICAgICAgbGV0IG8gPSBvcmRBcnJheVtpXTtcclxuICAgICAgaWYgKHN2ck9yZC51dWlkID09PSBvLnV1aWQpIHtcclxuICAgICAgICBpZiAoby54ICE9PSBzdnJPcmQueCB8fCBvLnkgIT09IHN2ck9yZC55KSB7XHJcbiAgICAgICAgICBvLm1vdmUoe3g6c3ZyT3JkLngsIHk6c3ZyT3JkLnl9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlc291cmNlcyhkYXRhKSB7fVxyXG5cclxuICBjcmVhdGVSZXNvdXJjZShkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5kZXRhaWxzLnJlc291cmNlQXJyYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgckEgPSBkYXRhLmRldGFpbHMucmVzb3VyY2VBcnJheTtcclxuICAgICAgZm9yIChsZXQgaSBpbiByQSkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUmVzb3VyY2UockFbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzID0gbmV3IFJlc291cmNlKFxyXG4gICAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgZGF0YS5kZXRhaWxzLnJlc291cmNlLnR5cGUsXHJcbiAgICAgICAgZGF0YS5kZXRhaWxzLnJlc291cmNlLnV1aWQoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFJlc291cmNlcygpIHtcclxuICAgIHZhciBjdXJyZW50UmVjID0gbnVsbDtcclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KFxyXG4gICAgICAxMDAsXHJcbiAgICAgIDEwMCxcclxuICAgICAgdGhpcy50aWxlV2lkdGggLSA0LFxyXG4gICAgICB0aGlzLnRpbGVIZWlnaHQgLSA0LFxyXG4gICAgICAxNFxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKHZhciBjIGluIHRoaXMudGlsZUFycmF5KSB7XHJcbiAgICAgIGZvciAodmFyIHIgaW4gdGhpcy50aWxlQXJyYXlbY10pIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlT3duZXIgPT0gdGhpcy5wbGF5ZXIuaWQgJiZcclxuICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVUeXBlID09IFwid2FyZWhvdXNlXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChyIDwgNSB8fCByID4gMTUpIHtcclxuICAgICAgICAgICAgY3VycmVudFJlYyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKFxyXG4gICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdLnggKyB0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY11bcl0ueSArIHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjdXJyZW50UmVjLmFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDApIC0gMjA7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU5hbWUpIHtcclxuICAgICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGZjZTMxNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJveHlnZW5cIjpcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4MDBiMWYwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhlODJhMmM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFwibWV0YWxcIjpcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmZmZmZlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcImJpb21hc3NcIjpcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OGFjMzQyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDlmM2E5YjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJ1cmFuaXVtXCI6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGYzNjUyMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFJlYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBcm1zKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2hvd3Mgd2VhcG9ucyBvbiBjbG9uZXNcIik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUaWxlKGRhdGEpIHtcclxuICAgIGxldCBuZXdUaWxlID0gZGF0YS5kZXRhaWxzLnRpbGU7XHJcbiAgICBsZXQgb2xkVGlsZSA9IHRoaXMudGlsZUFycmF5W25ld1RpbGUueF1bbmV3VGlsZS55XS50aWxlRGV0YWlsO1xyXG4gICAgaWYgKG9sZFRpbGUuZGFtYWdlZCA9PT0gZmFsc2UgJiYgbmV3VGlsZS5kYW1hZ2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuZGFtYWdlVGlsZShvbGRUaWxlKTtcclxuICAgIH1cclxuICAgIHRoaXMudGlsZUFycmF5W25ld1RpbGUueF1bbmV3VGlsZS55XS50aWxlRGV0YWlsID0gbmV3VGlsZTtcclxuICB9XHJcblxyXG4gIHNob3dNb2RhbCh0eXBlKSB7XHJcbiAgICB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zZXRWYWx1ZShkZXRhaWxzLnZhbHVlKTtcclxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcclxuICAgIHZhciBwb2ludEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkZXRhaWxzLmdhbWVQaWVjZXNbMF0ub3JpZ2luKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV0YWlscy5nYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHBvaW50QXJyYXkucHVzaCh7XHJcbiAgICAgICAgeDogZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbi54LFxyXG4gICAgICAgIHk6IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW4ueVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2hvd1RpbGVzKHBvaW50QXJyYXksIDB4ZjYzNjM2KTtcclxuICB9XHJcblxyXG4gIG9mZmVyRGljZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5kaWNlLmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgdGFrZURpY2UoKSB7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQZXJzb25uZWwocCkge1xyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICBpZiAocC51dWlkID09PSB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICBpZiAocC51dWlkID09PSB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2ldLnV1aWQpIHtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkUGVyc29ubmVsKGRhdGEpIHtcclxuICAgIGxldCBwID0gZGF0YS5kZXRhaWxzLnBlcnNvbm5lbDtcclxuICAgIGxldCBwRm91bmQgPSB0aGlzLmdldFBlcnNvbm5lbChkYXRhLmRldGFpbHMucGVyc29ubmVsKTtcclxuICAgIGlmIChwRm91bmQgIT09IGZhbHNlKSB7XHJcbiAgICAgIGRhdGEuZGV0YWlscy5hY3Rpb24gPSBcInVwZGF0ZVwiO1xyXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVQZXJzb25uZWwoZGF0YSk7XHJcbiAgICB9IFxyXG4gICAgbGV0IGMgPSB0aGlzLnRpbGVUb1BpeGVscyhwLngsIHAueSk7XHJcbiAgICBsZXQgblAgPSBudWxsO1xyXG4gICAgbGV0IHBJRCA9IGRhdGEuZGV0YWlscy5wbGF5ZXJJRDtcclxuICAgIGlmIChwLnR5cGVFbnVtLkNMT05FID09PSBwLnR5cGUpIHtcclxuICAgICAgblAgPSBuZXcgQ2xvbmUoXHJcbiAgICAgICAgdGhpcy5nYW1lLFxyXG4gICAgICAgIGMueCxcclxuICAgICAgICBjLnksXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBwLnV1aWRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocC50eXBlRW51bS5CSU9EUk9ORSA9PT0gcC50eXBlKSB7XHJcbiAgICAgIG5QID0gbmV3IEJpb2Ryb25lKFxyXG4gICAgICAgIHRoaXMuZ2FtZSxcclxuICAgICAgICBjLngsXHJcbiAgICAgICAgYy55LFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgcC51dWlkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwSUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkucHVzaChuUCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goblApO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJDdXJyZW50IHBlcnNvbm5lbCBzZXRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIm5ldyBwSUQgaXMgXCIgKyBwSUQpO1xyXG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXIgXCIgKyB0aGlzLnBsYXllci5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9wcG9uZW50IFwiICsgdGhpcy5vcHBvbmVudC5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KTtcclxuICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVPcmRuYW5jZShkYXRhKSB7XHJcbiAgICBsZXQgc3ZyT3JkID0gZGF0YS5kZXRhaWxzLm9yZG5hbmNlO1xyXG4gICAgY29uc29sZS5sb2coc3ZyT3JkKTtcclxuICAgIGxldCBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKHN2ck9yZC54LCBzdnJPcmQueSk7XHJcbiAgICBsZXQgbmV3T3JkID0gbmV3IE9yZG5hbmNlKFxyXG4gICAgICB0aGlzLmdhbWUsXHJcbiAgICAgIHBvaW50LngsXHJcbiAgICAgIHBvaW50LnksXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIGRhdGEuZGV0YWlscy50eXBlLFxyXG4gICAgICBzdnJPcmQudXVpZFxyXG4gICAgKTtcclxuICAgIGlmIChkYXRhLmRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheS5wdXNoKG5ld09yZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkucHVzaChuZXdPcmQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKG5ld09yZCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVPcmRuYW5jZShkYXRhKSB7XHJcbiAgICBsZXQgdE8gPSBkYXRhLmRldGFpbHMub3JkbmFuY2U7XHJcbiAgICBmb3IgKGxldCBpIGluIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgbGV0IG8gPSB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldO1xyXG4gICAgICBpZiAoby51dWlkID09PSB0Ty51dWlkKSB7XHJcbiAgICAgICAgby5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5KSB7XHJcbiAgICAgIGxldCBvID0gdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2ldO1xyXG4gICAgICBpZiAoby51dWlkID09PSB0Ty51dWlkKSB7XHJcbiAgICAgICAgby5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmVQZXJzb25uZWwoZGF0YSkge1xyXG4gICAgbGV0IHR3ZWVuID0gbnVsbDtcclxuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XHJcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLngsIGRhdGEueSk7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoXHJcbiAgICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS55IC1cclxuICAgICAgICAgICAgcG9pbnQueSArXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnggLVxyXG4gICAgICAgICAgICBwb2ludC54XHJcbiAgICAgICAgKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZFxyXG4gICAgICAgICAgLnR3ZWVuKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldKVxyXG4gICAgICAgICAgLnRvKFxyXG4gICAgICAgICAgICB7IHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSxcclxuICAgICAgICAgICAgZGlzdGFuY2UgKiAxMSxcclxuICAgICAgICAgICAgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXHJcbiAgICAgICAgLy90d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdtb3ZlQ29tcGxldGUnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pOywgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnV1aWQgPT0gZGF0YS51dWlkKSB7XHJcbiAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhcclxuICAgICAgICAgIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtXHJcbiAgICAgICAgICAgIHBvaW50LnkgK1xyXG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLVxyXG4gICAgICAgICAgICBwb2ludC54XHJcbiAgICAgICAgKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZFxyXG4gICAgICAgICAgLnR3ZWVuKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0pXHJcbiAgICAgICAgICAudG8oXHJcbiAgICAgICAgICAgIHsgeDogcG9pbnQueCwgeTogcG9pbnQueSB9LFxyXG4gICAgICAgICAgICBkaXN0YW5jZSAqIDExLFxyXG4gICAgICAgICAgICBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZU9yZG5hbmNlKGRhdGEpIHtcclxuICAgIHZhciB0d2VlbiA9IG51bGw7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBudWxsO1xyXG4gICAgdmFyIHBvaW50ID0gbnVsbDtcclxuICAgIGZvciAodmFyIGRhdGFJbmRleCA9IDA7IGRhdGFJbmRleCA8IGRhdGEubGVuZ3RoOyBkYXRhSW5kZXgrKykge1xyXG4gICAgICBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRhdGFbZGF0YUluZGV4XS54LCBkYXRhW2RhdGFJbmRleF0ueSk7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnV1aWQgPT0gZGF0YVtkYXRhSW5kZXhdLnV1aWQpIHtcclxuICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0ueSAtXHJcbiAgICAgICAgICAgICAgcG9pbnQueSArXHJcbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS54IC1cclxuICAgICAgICAgICAgICBwb2ludC54XHJcbiAgICAgICAgICApLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGRcclxuICAgICAgICAgICAgLnR3ZWVuKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0pXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICB7IHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSxcclxuICAgICAgICAgICAgICBkaXN0YW5jZSAqIDExLFxyXG4gICAgICAgICAgICAgIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnV1aWQgPT0gZGF0YVtkYXRhSW5kZXhdLnV1aWQpIHtcclxuICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnMoXHJcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS55IC1cclxuICAgICAgICAgICAgICBwb2ludC55ICtcclxuICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0ueCAtXHJcbiAgICAgICAgICAgICAgcG9pbnQueFxyXG4gICAgICAgICAgKS50b0ZpeGVkKDEpO1xyXG4gICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkXHJcbiAgICAgICAgICAgIC50d2Vlbih0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0pXHJcbiAgICAgICAgICAgIC50byhcclxuICAgICAgICAgICAgICB7IHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSxcclxuICAgICAgICAgICAgICBkaXN0YW5jZSAqIDExLFxyXG4gICAgICAgICAgICAgIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVBlcnNvbm5lbChkYXRhKSB7XHJcbiAgICBsZXQgdFAgPSBkYXRhLmRldGFpbHMucGVyc29ubmVsO1xyXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldO1xyXG4gICAgICBpZiAocC51dWlkID09PSB0UC51dWlkKSB7XHJcbiAgICAgICAgcC5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICBsZXQgcCA9IHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbaV07XHJcbiAgICAgIGlmIChwLnV1aWQgPT09IHRQLnV1aWQpIHtcclxuICAgICAgICBwLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XHJcbiAgICAgIHRoaXMucGxheWVyW2ldID0gZGV0YWlsc1tpXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBERUJVRyBCTE9DS1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiA3LCB5OiAyMCB9KTtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogNywgeTogMCB9KTtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogNSwgeTogMTAgfSk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7IGV2ZW50OiBcInRpbGVDbGlja2VkXCIsIHg6IDYsIHk6IDE3IH0pO1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiA3LCB5OiAxNCB9KTtcclxuXHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7IGV2ZW50OiBcInRpbGVDbGlja2VkXCIsIHg6IDMwLCB5OiAyIH0pO1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiAyNiwgeTogMTAgfSk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7IGV2ZW50OiBcInRpbGVDbGlja2VkXCIsIHg6IDMwLCB5OiA0IH0pO1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLCB4OiAzMCwgeTogNSB9KTtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHsgZXZlbnQ6IFwidGlsZUNsaWNrZWRcIiwgeDogMzAsIHk6IDYgfSk7XHJcblxyXG4gICAgLy8gdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoeyBldmVudDogXCJjb25maXJtQ2xpY2tlZFwifSk7XHJcbiAgICAvLyB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7IGV2ZW50OiBcImRpY2VDbGlja2VkXCJ9KTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcclxuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKFwidGlsZURldGFpbFwiKTtcclxuXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzID0geyB4OiAwLCB5OiAwIH07XHJcblxyXG4gICAgdmFyIHgsIHk7XHJcblxyXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodCAvIDE3LjQ3NTtcclxuICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC8gMjQ7XHJcbiAgICB0aGlzLm1hcmdpblJpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLyAyNi4zMTU4O1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCAvIDM5O1xyXG4gICAgdGhpcy5wYWRkaW5nID1cclxuICAgICAgKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC1cclxuICAgICAgICAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgLVxyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoICogMzEpIC9cclxuICAgICAgMzA7XHJcblxyXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcclxuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcclxuXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggPSBwb2ludC54ICsgdGhpcy5tYXJnaW5MZWZ0O1xyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xyXG5cclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG5cclxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XHJcbiAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XHJcbiAgICAgICAgeCA9XHJcbiAgICAgICAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggK1xyXG4gICAgICAgICAgdGhpcy50aWxlV2lkdGggKiBjb2x1bW4gK1xyXG4gICAgICAgICAgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xyXG4gICAgICAgIHkgPVxyXG4gICAgICAgICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ICtcclxuICAgICAgICAgIHRoaXMudGlsZUhlaWdodCAqIHJvdyArXHJcbiAgICAgICAgICAodGhpcy5wYWRkaW5nICogcm93IC0gMSk7XHJcbiAgICAgICAgLy9ncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeSxcclxuICAgICAgICAgIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xyXG4gICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcclxuICAgICAgICBjdXJyZW50VGlsZS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcclxuXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlRGV0YWlsKSB7XHJcbiAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZURldGFpbFtrZXldO1xyXG4gICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcclxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XHJcblxyXG4gICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgIHggPSBwYXJzZUludChjb29yZHNbMF0pO1xyXG4gICAgICAgICAgeSA9IHBhcnNlSW50KGNvb3Jkc1sxXSk7XHJcbiAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsID0ge307XHJcbiAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwub2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwueCA9IHg7XHJcbiAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLnkgPSB5O1xyXG4gICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC50eXBlID0gb2JqW3Byb3BdLnR5cGU7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLm5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcclxuICAgICAgICAgIGVsc2UgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcblxyXG4gICAgICAgICAgaWYgKHggPCA5KSB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGV0YWlsLm93bmVyID0gMTtcclxuICAgICAgICAgIGVsc2UgaWYgKHggPiAyMCkgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURldGFpbC5vd25lciA9IDI7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEZXRhaWwucHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGl4ZWxzVG9UaWxlKHgsIHkpIHtcclxuICAgIHZhciB4VGlsZSA9IDA7XHJcbiAgICB2YXIgeVRpbGUgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICBmb3IgKHZhciByb3cgaW4gdGhpcy50aWxlQXJyYXlbY29sXSkge1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVBcnJheVtjb2xdW3Jvd107XHJcbiAgICAgICAgaWYgKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpIHhUaWxlID0gcGFyc2VJbnQoY29sKTtcclxuXHJcbiAgICAgICAgaWYgKHkgPiBvYmoueSAmJiB5IDwgb2JqLnkgKyBvYmouaGVpZ2h0KSB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IHg6IHhUaWxlLCB5OiB5VGlsZSB9O1xyXG4gIH1cclxuXHJcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcclxuICAgIHZhciB0aWxlT2JqID0gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiB0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoIC8gMixcclxuICAgICAgeTogdGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQgLyAyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdGlsZUNsaWNrZWQob2JqKSB7XHJcbiAgICB0aGlzLmhpZGVUaWxlcygpO1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe1xyXG4gICAgICBldmVudDogXCJ0aWxlQ2xpY2tlZFwiLFxyXG4gICAgICB4OiBwYXJzZUludChvYmoudGlsZURldGFpbC54KSxcclxuICAgICAgeTogcGFyc2VJbnQob2JqLnRpbGVEZXRhaWwueSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERFQlVHIEJMT0NLXHJcbiAgICBjb25zb2xlLmxvZyhcIi0tLS1USUxFIERFVEFJTC0tLS1cIik7XHJcbiAgICBjb25zb2xlLmxvZyhvYmoudGlsZURldGFpbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk5hbWU6IFwiICsgb2JqLnRpbGVEZXRhaWwubmFtZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlR5cGU6IFwiICsgb2JqLnRpbGVEZXRhaWwudHlwZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIk9jY3VwaWVkOiBcIiArIG9iai50aWxlRGV0YWlsLm9jY3VwaWVkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRGFtYWdlZDogXCIgKyBvYmoudGlsZURldGFpbC5kYW1hZ2VkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiWDogXCIgKyBvYmoudGlsZURldGFpbC54ICsgXCIgWTpcIiArIG9iai50aWxlRGV0YWlsLnkpO1xyXG4gICAgLy8gICB0aGlzLmFkZE9yZG5hbmNlKHtwb2ludDp7eDpvYmoudGlsZVgsIHk6b2JqLnRpbGVZfSwgdHlwZTonYmlvZHJvbmUnLCB1dWlkOk1hdGgucmFuZG9tKCl9KTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBzaG93VGlsZXMoY29vcmRzQXJyYXksIGNvbG9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNIT1cgVElMRVMhIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGNvb3Jkc0FycmF5KTtcclxuICAgIC8vIGlmKHR5cGVvZihjb29yZHNBcnJheS5wb2ludEFycmF5KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vICAgICBjb29yZHNBcnJheSA9IGNvb3Jkc0FycmF5LnBvaW50QXJyYXk7XHJcbiAgICAvLyB9XHJcbiAgICBmb3IgKHZhciBpIGluIGNvb3Jkc0FycmF5KSB7XHJcbiAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLmFscGhhID0gMC41O1xyXG4gICAgICBpZiAoY29sb3IpIHtcclxuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gY29sb3I7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0udGludCA9IDB4ZmZkOTAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHsgeDogY29vcmRzQXJyYXlbaV0ueCwgeTogY29vcmRzQXJyYXlbaV0ueSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcclxuICAgIGlmICghdGlsZUFycmF5KSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5zaG93blRpbGVzKSB7XHJcbiAgICAgICAgdGhpcy50aWxlQXJyYXlbdGhpcy5zaG93blRpbGVzW2ldLnhdW3RoaXMuc2hvd25UaWxlc1tpXS55XS5hbHBoYSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VUaWxlKHRhcmdldFRpbGUpIHtcclxuICAgIGxldCB0ID0gdGhpcy50aWxlQXJyYXlbdGFyZ2V0VGlsZS54XVt0YXJnZXRUaWxlLnldO1xyXG5cclxuICAgIHQudGludCA9IDB4MzMzMzMzO1xyXG4gICAgdC5hbHBoYSA9IDAuODtcclxuXHJcbiAgICB2YXIgYm9vbSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKFxyXG4gICAgICB0LngsXHJcbiAgICAgIHQueSArIHQuaGVpZ2h0IC8gMixcclxuICAgICAgXCJib29tXCJcclxuICAgICk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoYm9vbSk7XHJcbiAgICBib29tLmFuZ2xlID0gOTA7XHJcbiAgICBib29tLmFuY2hvci5zZXQoMC41LCAwLjcpO1xyXG4gICAgYm9vbS5hbmltYXRpb25zLmFkZChcImJvb21cIik7XHJcbiAgICBib29tLmFuaW1hdGlvbnMucGxheShcImJvb21cIiwgMjAsIGZhbHNlLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHJlcGFpclRpbGUoZGF0YSkge1xyXG4gICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbZGF0YS54XVtkYXRhLnldO1xyXG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwiZ2FtZVwiKTtcclxuICB9XHJcblxyXG4gIHNlcnZlckZ1bGwoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoXCJzZXJ2ZXJGdWxsXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VwdGlrb247XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcblxyXG5jbGFzcyBUb2tlbiBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwga2V5LCBmcmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG5cclxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICB0aGlzLndpZHRoID0gMjc7XHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgXHJcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcclxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgKiAtMTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5hZGQodGhpcyk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0T24oKSB7XHJcbiAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZ2hsaWdodE9mZigpIHtcclxuICAgIHRoaXMudGludCA9IDB4ZmZmZmZmO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICB9XHJcbiAgXHJcbiAgbW92ZSh0YXJnZXRUaWxlKSB7XHJcbiAgICBsZXQgdGFyZ2V0UGl4ZWxzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh0YXJnZXRUaWxlLngsIHRhcmdldFRpbGUueSk7XHJcbiAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSB0YXJnZXRQaXhlbHMueSArIHRoaXMueCAtIHRhcmdldFBpeGVscy54KS50b0ZpeGVkKDEpO1xyXG4gICAgbGV0IHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6dGFyZ2V0UGl4ZWxzLngsIHk6dGFyZ2V0UGl4ZWxzLnl9LCAyNDAwLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuc2VwdGlrb24udHJpZ2dlclRpbGUsIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb25lO1xyXG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5jbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xyXG4gICAgdGhpcy5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcclxuICAgIC8vc2V0dXAgZGV2aWNlIHNjYWxpbmdcclxuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYXJlbnRJc1dpbmRvdyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbkhlaWdodCA9IDI2MDtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLmZvcmNlT3JpZW50YXRpb24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0R2xvYmFsVmFyaWFibGVzKCk7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XHJcbiAgfVxyXG5cclxuICBpbml0R2xvYmFsVmFyaWFibGVzKCl7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsID0ge1xyXG4gICAgICBzY29yZTogMCxcclxuICAgICAgbGFzdERpY2VSb2xsOiAwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb290O1xyXG4iLCJpbXBvcnQgRGljZSBmcm9tICcuLi9wcmVmYWJzL2RpY2UnO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tICcuLi9wcmVmYWJzL2NvbmZpcm0nO1xyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gIFxyXG4gICAgLy90aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICB0aGlzLmdhbWUub3JkbmFuY2VHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIHRoaXMuZ2FtZS5odWRHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcclxuXHJcblxyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRpY2UgPSBuZXcgRGljZSh0aGlzLmdhbWUsIDUwLCA0MCk7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zY2FsZS5zZXRUbygwLjI1KTtcclxuICAgIHRoaXMuZ2FtZS5jb25maXJtID0gbmV3IENvbmZpcm0odGhpcy5nYW1lLCA0MCw4MCk7XHJcbiAgICB0aGlzLmdhbWUuY29uZmlybS5zY2FsZS5zZXRUbygwLjI1KTtcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZ2FtZS5kaWNlKTtcclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5nYW1lLmNvbmZpcm0pO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5odWRCZyk7XHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5kaWNlKTtcclxuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmNvbmZpcm0pO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRoaXMuYmFja2dyb3VuZCk7XHJcblxyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRDYWxsYmFja3ModGhpcywgbnVsbCwgbnVsbCwgdGhpcy5rZXlQcmVzcyk7XHJcbiAgICB0aGlzLmdhbWUuaW5wdXQub25VcC5hZGQodGhpcy5tb3VzZVVwLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKHRoaXMubW91c2VEb3duLCB0aGlzKTtcclxuICAgIHRoaXMudmlldyA9IDI7XHJcbiAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xyXG5cclxuICB9XHJcbiAgICBtb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZUlzRG93biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSB0aGlzLmdhbWUuaW5wdXQueDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIik7XHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlQ29tcGxldGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZVVwKCkge1xyXG4gICAgICAgIHRoaXMubW91c2VJc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXBlRG9uZSgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3Q2hhbmdlQ29tcGxldGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmRYID0gdGhpcy5nYW1lLmlucHV0Lng7XHJcbiAgICAgICAgICAgIGlmIChlbmRYIDwgdGhpcy5zdGFydFgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdTd2lwZWQgbGVmdCcsIDcwMCwgOTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LS07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnU3dpcGUgcmlnaHQnLCA3MDAsIDk1KTsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldysrOyAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudmlldyA+IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudmlldyA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldyA9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWV3Q2hhbmdlQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhjaGFyKSB7XHJcbiAgICAgIHRoaXMubGFzdEtleSA9IGNoYXI7XHJcbiAgICAgIGlmIChjaGFyID09PSBcIjFcIikge1xyXG4gICAgICAgICAgdGhpcy52aWV3ID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoY2hhciA9PT0gXCIzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjaGFyID09PSBcIjRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSA0O1xyXG4gICAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTW9kYWxzKCkge1xyXG4gICAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogZmFsc2UsXHJcbiAgICAgICAgbW9kYWxDbG9zZU9uSW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xyXG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxyXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQXJlIHlvdSBoYXBweSB3aXRoXFxuIHRoYXQgY2xvbmUgbGF5b3V0P1wiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfeWVzXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcclxuICAgICAgICAgICAgb2Zmc2V0WDogLTgwLFxyXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZTonc3RhcnQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X25vXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcclxuICAgICAgICAgICAgb2Zmc2V0WDogODAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQm9hcmQoKSB7XHJcbiAgICB2YXIgc2NhbGUgPSBudWxsO1xyXG4gICAgaWYgKHRoaXMudmlldyA9PT0gMSAgfHwgdGhpcy52aWV3ID09PSAzKSB7XHJcbiAgICAgICAgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aC90aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzY2FsZSA9IHdpbmRvdy5pbm5lckhlaWdodCAqMC44L3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBpZihzY2FsZSA+IDEuOSkge1xyXG4gICAgICAgIHNjYWxlID0gMS45O1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcclxuICAgIHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcclxuICAgIHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XHJcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuc2NhbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5zY2FsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5zY2FsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnggPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC54ID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnggPSB0aGlzLmdhbWUuYm9hcmRHcm91cC54O1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnZpZXcgPT09IDEpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcclxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gLTkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnkgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC55ID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnkgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcclxuICAgIH0gXHJcbiAgICBpZiAodGhpcy52aWV3ID09PSAzKXtcclxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcclxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAueSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAueSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmlldyA9PT0gMil7XHJcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDA7IFxyXG4gICAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC55ID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAueSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC55ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgd2luZG93LmlubmVySGVpZ2h0ICowLjE7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC55ID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAueSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC55ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52aWV3ID09PSA0KXtcclxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gMTgwOyBcclxuICAgICAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAueSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAueSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArIHdpbmRvdy5pbm5lckhlaWdodCAqMC4xOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcclxuICAgICAgICAvLyB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAueSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnkgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAueSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vICAgdGhpcy5kaWNlLmZyYW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0tleWJvYXJkJywgNzAwLCAzMik7XHJcbiAgICBcclxuICAgIC8vIGxldCBjdXJyZW50ID0gUGhhc2VyLktleWJvYXJkLlxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0tleSBwcmVzc2VkOiAnICsgdGhpcy5sYXN0S2V5LCA3MDAsIDY0KTtcclxuXHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBYOiAnICsgdGhpcy5nYW1lLmlucHV0LngsIDcwMCwgMjAwKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgMjMwKTtcclxuICAgIGlmICh0aGlzLm1vdXNlSXNEb3duID09PSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGRpc3RYID0gTWF0aC5hYnModGhpcy5nYW1lLmlucHV0LnggLSB0aGlzLnN0YXJ0WCk7XHJcbiAgICAgICAgaWYgKGRpc3RYID4gNTApIHtcclxuICAgICAgICAgICAgdGhpcy5zd2lwZURvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XHJcbiAgICAgIC8qXHJcblxyXG4gICAgdmFyIHggPSAzMjtcclxuICAgIHZhciB5ID0gMDtcclxuICAgIHZhciB5aSA9IDMyO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0JywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IFdpZHRoOiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0V2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lcldpZHRoOiAnICsgd2luZG93LmlubmVyV2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlcldpZHRoOiAnICsgd2luZG93Lm91dGVyV2lkdGgsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBIZWlnaHQ6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lckhlaWdodDogJyArIHdpbmRvdy5pbm5lckhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVySGVpZ2h0OiAnICsgd2luZG93Lm91dGVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICAvLyAgRGV2aWNlOiBIb3cgdG8gZ2V0IGRldmljZSBzaXplLlxyXG5cclxuICAgIC8vICBVc2Ugd2luZG93LnNjcmVlbi53aWR0aCBmb3IgZGV2aWNlIHdpZHRoIGFuZCB3aW5kb3cuc2NyZWVuLmhlaWdodCBmb3IgZGV2aWNlIGhlaWdodC4gXHJcbiAgICAvLyAgLmF2YWlsV2lkdGggYW5kIC5hdmFpbEhlaWdodCBnaXZlIHlvdSB0aGUgZGV2aWNlIHNpemUgbWludXMgVUkgdGFza2JhcnMuIChUcnkgb24gYW4gaVBob25lLikgXHJcbiAgICAvLyAgRGV2aWNlIHNpemUgaXMgc3RhdGljIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2hlbiB0aGUgcGFnZSBpcyByZXNpemVkIG9yIHJvdGF0ZWQuXHJcblxyXG4gICAgeCA9IDM1MDtcclxuICAgIHkgPSAwO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCb2FyZCBHcm91cCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC54OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnksIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgeCA9IDMyO1xyXG4gICAgeSA9IDMwMDtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQmFja2dyb3VuZCBEZXRhaWwnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLng6ICcgKyB0aGlzLmJhY2tncm91bmQueCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnk6ICcgKyB0aGlzLmJhY2tncm91bmQueSwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLndpZHRoOiAnICsgdGhpcy5iYWNrZ3JvdW5kLndpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuaGVpZ2h0OiAnICsgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnNjYWxlOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUueCwgeCwgeSArPSB5aSk7XHJcbiAgICAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcclxuICAgIGlmKHRoaXMuZ2FtZS5zY2FsZS5pc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RvcEZ1bGxTY3JlZW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0YXJ0RnVsbFNjcmVlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJnUmF0aW8gPSB0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCAvIHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcclxuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XHJcbiAgICBpZiAoKCh0aGlzLndvcmxkUmF0aW8gLSB0aGlzLmJnUmF0aW8pIC8gMiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodC90aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnggPSAodGhpcy5nYW1lLndvcmxkLndpZHRoIC0gdGhpcy5iYWNrZ3JvdW5kLndpZHRoKSAvIDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoL3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoKnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQueSA9ICh0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIGludHJvIHRleHRcclxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcclxuICAgICAgZm9udDogJzQycHggQXJpYWwnLCBmaWxsOiAnI2ZmZmZmZicsIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbkRvd24uYWRkKHRoaXMub25JbnB1dERvd24sIHRoaXMpO1xyXG5cclxuICAgIC8vcHJldmVudCBhY2NpZGVudGFsIGNsaWNrLXRocnUgYnkgbm90IGFsbG93aW5nIHN0YXRlIHRyYW5zaXRpb24gZm9yIGEgc2hvcnQgdGltZVxyXG4gICAgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xyXG4gICAgdmFyIG1heCA9IGxvY2FsU3RvcmFnZS5tYXhTY29yZSB8fCAwOyAvL2RlZmF1bHQgdmFsdWUgb2YgMCBpcyBpdCBkb2VzIG5vdCBleGlzdFxyXG4gICAgaWYgKHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPiBtYXgpeyBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgPSB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlOyB9XHJcbiAgfVxyXG5cclxuICByZXNldEdsb2JhbFZhcmlhYmxlcygpe1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHt9XHJcblxyXG4gIG9uSW5wdXREb3duICgpIHtcclxuICAgIGlmKHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSl7XHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImNsYXNzIFByZWxvYWRlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYXNzZXQgPSBudWxsO1xyXG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIC8vc2V0dXAgbG9hZGluZyBiYXJcclxuICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoICogMC41IC0gMTEwLCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41IC0gMTAsICdwcmVsb2FkZXInKTtcclxuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xyXG4gICAgXHJcbiAgICAvL1NldHVwIGxvYWRpbmcgYW5kIGl0cyBldmVudHNcclxuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkUmVzb3VyY2VzKCkge1xyXG4gICAgICBcclxuICAgIC8vTUVOVSBSRVNPVVJDRVNcclxuICAgIC8vbWVudSBiYWNrZ3JvdW5kXHJcbiAgICAvL3RleHQgaW1hZ2VzXHJcbiAgICAvL211c2ljIGZpbGVzID9cclxuICAgIC8vICBMb2FkIGZpbHRlciBzY3JpcHRzXHJcbiAgICAvLyB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXIvbWFzdGVyL3YyL2ZpbHRlcnMvR3JheS5qcycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyLWNlL21hc3Rlci9maWx0ZXJzL0dyYXkuanMnKTtcclxuXHJcbiAgICBcclxuICAgIC8vbG9hZCBnYW1lIGRhdGFcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuICBcclxuICAgIC8vR0FNRSBSRVNPVVJDRVNcclxuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZGljZScsJ2Fzc2V0cy9kaWNlLnBuZycsIDEyOCwgMTk0LCAxMCk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaHVkLWJnJywnYXNzZXRzL2h1ZC1iZy5wbmcnKTtcclxuICAgIFxyXG4gICAgLy8gbW9kYWwgaW1hZ2VzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF95ZXMnLCdhc3NldHMvdGV4dF95ZXMucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9ubycsJ2Fzc2V0cy90ZXh0X25vLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCdhc3NldHMvdGV4dF9nby5wbmcnKTtcclxuXHJcbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2xvbmUnLCAnYXNzZXRzL2Nsb25lLnBuZycsIDExMCwgMTY4KTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdvcmRuYW5jZScsICdhc3NldHMvb3JkbmFuY2UucG5nJywyNjQsIDI2NCwgNyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5hdGxhcygnYm9vbScsICdhc3NldHMvYm9vbS5wbmcnLCAnYXNzZXRzL2Jvb20uanNvbicsIFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0hBU0gpO1xyXG5cclxuICAgIC8vYXVkaW8gZmlsZXMgXHJcbiAgICBcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Nyb3NzaGFpcnMnLCAnYXNzZXRzL2Nyb3NzaGFpcl9yZWRfc21hbGwucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsICdhc3NldHMvdGV4dF9nby5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3JlYWR5JywgJ2Fzc2V0cy90ZXh0X3JlYWR5LnBuZycpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RhcmdldCcsICdhc3NldHMvdGFyZ2V0LnBuZycsMTI4LjY2LDEyOCk7XHJcblxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZ3Vuc2hvdCcsJ2Fzc2V0cy9ndW5zaG90LndhdicpO1xyXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZGluZycsJ2Fzc2V0cy9kaW5nLndhdicpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NldHVwJyk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xyXG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5jbGFzcyBTZXJ2ZXJGdWxsIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgaXMgZnVsbC4gVHJ5IGFnYWluIGxhdGVyLlwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZlckZ1bGw7XHJcbiIsImNsYXNzIFNldHVwIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XHJcblxyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgLy8gdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XHJcblxyXG4gICAgLy8gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcclxuICAgIC8vIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XHJcbiAgICAvLyB0aGlzLmJrc3Aub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIC8vIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XHJcbiAgICAvLyB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LmFza05ld1BsYXllcigpO1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICByZXR1cm47XHJcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG4gICAgXHJcbn1cclxuXHJcbmtleVByZXNzKGNoYXIpIHtcclxuXHJcbiAgICBpZih0eXBlb2YoY2hhcikgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubmFtZSA9IHRoaXMuZ2FtZS5uYW1lLnN1YnN0cmluZygwLCB0aGlzLmdhbWUubmFtZS5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjaGFyID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGNoYXIgPSBcIl9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lLm5hbWUgKz0gY2hhcjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5tb2RhbC51cGRhdGVNb2RhbFZhbHVlKHRoaXMuZ2FtZS5uYW1lLCAndXNlcm5hbWUnLCA0KTtcclxufVxyXG4gIFxyXG4gIGNyZWF0ZU1vZGFscygpIHtcclxuICBcclxuICAgIC8vIFN0YXJ0IEdhbWVcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcclxuICAgICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xyXG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxyXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVHlwZSBhIHVzZXJuYW1lLFxcbnRoZW4gaGl0IDxFTlRFUj5cXG5cXG4obWF4IG9mIDI1IGNoYXJhY3RlcnMpXCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogdGhpcy5nYW1lLm5hbWUsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogNTBcclxuICAgICAgICB9LCBdXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcclxuIl19
