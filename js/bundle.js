(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
game.client = new _client2.default();

game.state.add('boot', new _boot2.default());
game.state.add('game', new _game2.default());
game.state.add('setup', new _setup2.default());
game.state.add('preloader', new _preloader2.default());
game.state.add('gameover', new _gameover2.default());

game.state.start('boot');

},{"./prefabs/client":3,"./states/boot":18,"./states/game":19,"./states/gameover":20,"./states/preloader":21,"./states/setup":22}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
    function Client() {
        _classCallCheck(this, Client);

        this.socket = io.connect();

        this.socket.on('log', function (data) {
            console.log(data.msg);
            console.log(data.details);
        });
    }

    _createClass(Client, [{
        key: 'askNewPlayer',
        value: function askNewPlayer() {
            console.log("sending newPlayer");
            this.socket.emit('newPlayer');
        }
    }, {
        key: 'sendInput',
        value: function sendInput(payload) {
            console.log(payload);
            this.socket.emit('input', payload);
        }
    }]);

    return Client;
}();

exports.default = Client;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
            this.game.client.sendInput({ action: 'roll' });
            if (this.game.septikon.turnState == this.game.septikon.turnStateEnum.START) {
                this.game.global.lastDiceRoll = Math.floor(Math.random() * 6) + 1;
                this.game.septikon.turnState = this.game.septikon.turnStateEnum.SELECT_CLONE;
                this.game.septikon.localTeam.offerLegalClones();
            } else if (this.game.septikon.turnState == this.game.septikon.turnStateEnum.SELECT_GUNNER) {
                if (this.game.septikon.pendingAction) {
                    console.log("Gunners Confirmed!");
                    var action = this.game.septikon.pendingAction;
                    this.game.septikon[action.props.callback](action.props.args, action.caller);
                }
            } else {
                console.log("Dice already rolled for this turn (turn state: " + this.game.septikon.turnState + "). The value is: " + this.game.global.lastDiceRoll);
            }
        }
    }]);

    return Dice;
}(Phaser.Sprite);

exports.default = Dice;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
            this.background = this.game.add.sprite(0, 0, 'background');
            this.createTileArray(31, 21);

            //this.localTeam = new Team(this.game);
            //this.remoteTeam = new Team(this.game);

            //this.gm = new Master();
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.background = this.game.add.sprite(0, 0, 'background');
            this.createTileArray(31, 21);
            this.localTeam.refresh();
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

},{"../prefabs/master":7}],12:[function(require,module,exports){
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

},{"../prefabs/clone":4,"../prefabs/ordnance":8,"../prefabs/personnel":9,"../prefabs/resources":10}],13:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordnance = function Ordnance() {
  _classCallCheck(this, Ordnance);
};

module.exports.Ordnance = Ordnance;

},{}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnel = function () {
    function Personnel(type) {
        _classCallCheck(this, Personnel);

        this.typeEnum = Object.freeze({
            clone: 0,
            biodrone: 1
        });

        this.x = this.y = -1;

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

},{}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnel = require('./personnel').Personnel;
var Resource = require('./resource').Resource;
var Ordnance = require('./ordnance').Ordnance;

var Player = function () {
    function Player(id) {
        _classCallCheck(this, Player);

        this.id = id;
        this.personnelArray = [];
        this.resourceArray = [];
        this.ordnanceArray = [];

        this.startingCloneCount = 5;
    }

    _createClass(Player, [{
        key: 'addPersonnel',
        value: function addPersonnel(type) {
            if (type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
                this.personnelArray.push(new Personnel('clone'));
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

},{"./ordnance":13,"./personnel":14,"./resource":16}],16:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = function Resources() {
  _classCallCheck(this, Resources);
};

module.exports.Resources = Resources;

},{}],17:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = require('./player').Player;

var Septikon = function () {
    function Septikon() {
        _classCallCheck(this, Septikon);

        this.lastPlayerID = 0;
        this.players = [];
        this.gameState = 0;
        this.playerTurnID = this.lastPlayerID;

        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1,
            PAUSE: 2,
            END: 3
        });

        this.turnStateEnum = Object.freeze({
            ROLL: 0,
            MOVE: 1,
            ACTION: 2,
            END: 3
        });
    }

    _createClass(Septikon, [{
        key: "addNewPlayer",
        value: function addNewPlayer(socket) {
            this.lastPlayerID++;
            console.log(this.lastPlayerID);

            //if(this.players.length < 2) {
            var player = new Player(this.lastPlayerID);
            console.log("creating new Player with id: " + player.id);
            this.players.push(player);

            return player;
            //}
        }
    }, {
        key: "clicked",
        value: function clicked(data) {
            console.log(this.lastPlayerID);
            console.log(this.players);
            var currentPlayer = this.players.find(function (player, id) {
                console.log("id is: " + id);
                return player.id === id;
            }, this.lastPlayerID);
            if (typeof currentPlayer != 'undefined') {
                console.log(currentPlayer);
                this.player.addPersonnel('clone');
            } else {
                console.log('player not found');
            }
        }
    }]);

    return Septikon;
}();

module.exports.Septikon = Septikon;

},{"./player":15}],18:[function(require,module,exports){
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
      this.game.septikon = new _septikon2.default(this.game);
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

},{"../prefabs/septikon":11}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dice = require('../prefabs/dice');

var _dice2 = _interopRequireDefault(_dice);

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
      this.game.septikon.startGame();

      //add background image
      //this.background = this.game.add.sprite(0,0,'background');
      //this.game.septikon.createTileArray(31, 21);


      //this.game.Septikon.bgRatio = this.background.texture.width / this.background.texture.height;
      //this.game.Septikon.worldRatio = this.game.world.width / this.game.world.height;
      //this.game.Septikon.updateScreen();

      //setup UI
      /*
      this.countdownText = this.add.text(this.game.world.centerX, 500, '', {
        font: '40px Arial', fill: '#ffffff', align: 'center'
      });
      this.countdownText.anchor.set(0.5,0);
      */
      this.dice = new _dice2.default(this.game, 150, 770);
      this.game.add.existing(this.dice);
      this.rollText = this.add.text(150, 700, '', {
        font: '40px Arial', fill: '#ffffff', align: 'center'
      });
      this.rollText.anchor.set(0.5, 0);

      //setup prefabs
    }
  }, {
    key: 'update',
    value: function update() {
      //this.test.angle += 5;
      this.rollText.setText("Dice Roll " + this.game.global.lastDiceRoll);
      //this.countdownText.setText( (this.game.input.x).toFixed(1) + " :: " + (this.game.input.y).toFixed(1));
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.game.state.start('gameover');
    }
  }]);

  return Game;
}(Phaser.State);

exports.default = Game;

},{"../prefabs/dice":6}],20:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            this.game.modal = new gameModal(this.game);
            this.createModals();

            this.game.septikon.setup();

            this.game.client.askNewPlayer();
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

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyIsInNyYy9tb2RhbC5qcyIsInNyYy9wcmVmYWJzL2NsaWVudC5qcyIsInNyYy9wcmVmYWJzL2Nsb25lLmpzIiwic3JjL3ByZWZhYnMvY3Jvc3NoYWlycy5qcyIsInNyYy9wcmVmYWJzL2RpY2UuanMiLCJzcmMvcHJlZmFicy9tYXN0ZXIuanMiLCJzcmMvcHJlZmFicy9vcmRuYW5jZS5qcyIsInNyYy9wcmVmYWJzL3BlcnNvbm5lbC5qcyIsInNyYy9wcmVmYWJzL3Jlc291cmNlcy5qcyIsInNyYy9wcmVmYWJzL3NlcHRpa29uLmpzIiwic3JjL3ByZWZhYnMvdGVhbS5qcyIsInNyYy9zZXJ2ZXIvb3JkbmFuY2UuanMiLCJzcmMvc2VydmVyL3BlcnNvbm5lbC5qcyIsInNyYy9zZXJ2ZXIvcGxheWVyLmpzIiwic3JjL3NlcnZlci9yZXNvdXJjZS5qcyIsInNyYy9zZXJ2ZXIvc2VwdGlrb24uanMiLCJzcmMvc3RhdGVzL2Jvb3QuanMiLCJzcmMvc3RhdGVzL2dhbWUuanMiLCJzcmMvc3RhdGVzL2dhbWVvdmVyLmpzIiwic3JjL3N0YXRlcy9wcmVsb2FkZXIuanMiLCJzcmMvc3RhdGVzL3NldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sT0FBTyxJQUFJLE9BQU8sSUFBWCxDQUFnQixPQUFPLFVBQXZCLEVBQW1DLE9BQU8sV0FBMUMsRUFBdUQsT0FBTyxJQUE5RCxFQUFvRSxrQkFBcEUsQ0FBYjtBQUNBLEtBQUssTUFBTCxHQUFjLHNCQUFkOztBQUVBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLG9CQUF2QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLG9CQUF2QjtBQUNBLEtBQUssS0FBTCxD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LEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcblxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCBQaGFzZXIuQVVUTywgJ3BoYXNlci10ZXN0LWdhbWUnKTtcbmdhbWUuY2xpZW50ID0gbmV3IENsaWVudCgpO1xuXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xuXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XG4iLCJ2YXIgZ2FtZU1vZGFsID0gZ2FtZU1vZGFsIHx8IHt9O1xuXG5cbmdhbWVNb2RhbCA9IGZ1bmN0aW9uIChnYW1lKSB7XG5cblx0dmFyIF90aGlzID0gdGhpcztcblx0Z2FtZS5tb2RhbHMgPSB7fTtcblxuXHQvKipcblx0ICogW2hpZGVNb2RhbCBkZXNjcmlwdGlvbl1cblx0ICogQHBhcmFtICB7W3R5cGVdfSB0eXBlIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdHRoaXMuaGlkZU1vZGFsID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XG5cdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y3JlYXRlTW9kYWw6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcblx0XHRcdHZhciBpbmNsdWRlQmFja2dyb3VuZCA9IG9wdGlvbnMuaW5jbHVkZUJhY2tncm91bmQ7IC8vIG1heWJlIG5vdCBvcHRpb25hbFxuXHRcdFx0dmFyIGJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8IFwiMHgwMDAwMDBcIjtcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdDAuNyA6IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHk7XG5cdFx0XHR2YXIgbW9kYWxDbG9zZU9uSW5wdXQgPSBvcHRpb25zLm1vZGFsQ2xvc2VPbklucHV0IHx8IGZhbHNlO1xuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcblx0XHRcdHZhciB2Q2VudGVyID0gb3B0aW9ucy52Q2VudGVyIHx8IHRydWU7XG5cdFx0XHR2YXIgaENlbnRlciA9IG9wdGlvbnMuaENlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcblx0XHRcdHZhciBmaXhlZFRvQ2FtZXJhID0gb3B0aW9ucy5maXhlZFRvQ2FtZXJhIHx8IGZhbHNlO1xuXG5cdFx0XHR2YXIgbW9kYWw7XG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xuXHRcdFx0XHRtb2RhbC54ID0gMDtcblx0XHRcdFx0bW9kYWwueSA9IDA7XG5cblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdFx0dmFyIGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlTW9kYWwoZS50eXBlKTtcblx0XHRcdFx0XHR9LCBfdGhpcywgMik7XG5cblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG5cdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cblx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtb2RhbExhYmVsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHR2YXIgaXRlbSA9IGl0ZW1zQXJyW2ldO1xuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xuXHRcdFx0XHR2YXIgaXRlbUNvbG9yID0gaXRlbS5jb2xvciB8fCAweDAwMDAwMDtcblx0XHRcdFx0dmFyIGl0ZW1Gb250ZmFtaWx5ID0gaXRlbS5mb250RmFtaWx5IHx8ICdBcmlhbCc7XG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZSA9IGl0ZW0uc3Ryb2tlIHx8ICcweDAwMDAwMCc7XG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlVGhpY2tuZXNzID0gaXRlbS5zdHJva2VUaGlja25lc3MgfHwgMDtcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XG5cdFx0XHRcdHZhciBvZmZzZXRYID0gaXRlbS5vZmZzZXRYIHx8IDA7XG5cdFx0XHRcdHZhciBvZmZzZXRZID0gaXRlbS5vZmZzZXRZIHx8IDA7XG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xuXHRcdFx0XHR2YXIgY29udGVudCA9IGl0ZW0uY29udGVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgY2VudGVyWCA9IGdhbWUud2lkdGggLyAyO1xuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gaXRlbS5jYWxsYmFjayB8fCBmYWxzZTtcblx0XHRcdFx0dmFyIHRleHRBbGlnbiA9IGl0ZW0udGV4dEFsaWduIHx8IFwibGVmdFwiO1xuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XG5cdFx0XHRcdHZhciBidXR0b25Ib3ZlciA9IGl0ZW0uYnV0dG9uSG92ZXIgfHwgY29udGVudDtcblx0XHRcdFx0dmFyIGJ1dHRvbkFjdGl2ZSA9IGl0ZW0uYnV0dG9uQWN0aXZlIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcblx0XHRcdFx0dmFyIGdyYXBoaWNPcGFjaXR5ID0gaXRlbS5ncmFwaGljT3BhY2l0eSB8fCAxO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1cgPSBpdGVtLmdyYXBoaWNXaWR0aCB8fCAyMDA7XG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XG5cdFx0XHRcdHZhciBncmFwaGljUmFkaXVzID0gaXRlbS5ncmFwaGljUmFkaXVzIHx8IDA7XG5cdFx0XHRcdHZhciBsb2NrUG9zaXRpb24gPSBpdGVtLmxvY2tQb3NpdGlvbiB8fCBmYWxzZTtcblxuXHRcdFx0XHR2YXIgaXRlbUFuY2hvciA9IGl0ZW0uYW5jaG9yIHx8IHt4OjAseTowfTtcblx0XHRcdFx0dmFyIGl0ZW1BbmdsZSA9IGl0ZW0uYW5nbGUgfHwgMDtcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWSA9IGl0ZW0ueSB8fCAwO1xuXHRcdFx0XHR2YXIgaW1hZ2VGcmFtZSA9IGl0ZW0uZnJhbWUgfHwgbnVsbDtcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlSGVpZ2h0ID0gaXRlbS50aWxlU3ByaXRlSGVpZ2h0IHx8IGdhbWUuaGVpZ2h0O1xuXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIgfHwgaXRlbVR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cblx0XHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQudGV4dCgwLCAwLCBjb250ZW50LCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXG5cdFx0XHRcdFx0XHRcdGZpbGw6IFwiI1wiICsgU3RyaW5nKGl0ZW1Db2xvcikucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxuXHRcdFx0XHRcdFx0XHRzdHJva2U6IFwiI1wiICsgU3RyaW5nKGl0ZW1TdHJva2UpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxuXHRcdFx0XHRcdFx0XHRhbGlnbjogaXRlbUFsaWduXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKChnYW1lLndpZHRoIC8gMikgLSAobW9kYWxMYWJlbC53aWR0aCAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYml0bWFwVGV4dCgwLCAwLCBpdGVtRm9udGZhbWlseSwgU3RyaW5nKGNvbnRlbnQpLCBpdGVtRm9udFNpemUpO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0Jztcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuYWxpZ24gPSB0ZXh0QWxpZ247XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImltYWdlXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdpbWFnZSc7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJ0aWxlU3ByaXRlXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQudGlsZVNwcml0ZShpdGVtWCwgaXRlbVksXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYW5jaG9yLnNldFRvKGl0ZW1BbmNob3IueCwgaXRlbUFuY2hvci55KTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGlsZVNwcml0ZSc7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwic3ByaXRlXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3Nwcml0ZSc7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJidXR0b25cIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxuXHRcdFx0XHRcdFx0dGhpcywgYnV0dG9uSG92ZXIsIGNvbnRlbnQsIGJ1dHRvbkFjdGl2ZSwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJncmFwaGljc1wiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdyYXBoaWNXLCBncmFwaGljSCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XG5cdFx0XHRcdFx0aWYgKGdyYXBoaWNSYWRpdXMgPD0gMCkge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3UmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gsIGdyYXBoaWNSYWRpdXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bW9kYWxMYWJlbFtcIl9vZmZzZXRYXCJdID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbFtcIl9vZmZzZXRZXCJdID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbFtcImxvY2tQb3NpdGlvblwiXSA9IGxvY2tQb3NpdGlvbjtcblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WCA9IG9mZnNldFg7XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xuXG5cblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnBpeGVsUGVyZmVjdENsaWNrID0gdHJ1ZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoY2FsbGJhY2ssIG1vZGFsTGFiZWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGl0ZW1UeXBlICE9PSBcImJpdG1hcFRleHRcIiAmJiBpdGVtVHlwZSAhPT0gXCJncmFwaGljc1wiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdID0gbW9kYWxHcm91cDtcblxuXHRcdH0sXG5cdFx0dXBkYXRlTW9kYWxWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0eXBlLCBpbmRleCwgaWQpIHtcblx0XHRcdHZhciBpdGVtO1xuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcblx0XHRcdFx0aXRlbSA9IGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xuXHRcdFx0fSBlbHNlIGlmIChpZCAhPT0gdW5kZWZpbmVkICYmIGlkICE9PSBudWxsKSB7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZSgpO1xuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XG5cdFx0XHRcdGl0ZW0udXBkYXRlVGV4dCgpO1xuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdGl0ZW0ubG9hZFRleHR1cmUodmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRnZXRNb2RhbEl0ZW06IGZ1bmN0aW9uICh0eXBlLCBpbmRleCkge1xuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xuXHRcdH0sXG5cdFx0c2hvd01vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0Ly8geW91IGNhbiBhZGQgYW5pbWF0aW9uIGhlcmVcblx0XHR9LFxuXHRcdGhpZGVNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRkZXN0cm95TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XG5cdFx0XHRkZWxldGUgZ2FtZS5tb2RhbHNbdHlwZV07XG5cdFx0fVxuXHR9O1xufTtcbiIsIlxuY2xhc3MgQ2xpZW50IHtcbiAgICBcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1zZyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRldGFpbHMpO1xuICAgICAgICB9KTtcblx0fVxuXG5cdGFza05ld1BsYXllcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIG5ld1BsYXllclwiKTtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXdQbGF5ZXInKTtcblx0fVxuICAgIFxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcblxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB0ZWFtKSB7XG4gICAgXG4gICAgLy8gU1dJVENIIFRPIERJRkZFUkVOVCBQRVJTT05ORUwgVFlQRVNcbiAgICAvLyBUaGlzIHdpbGwgYmUgYSBmbGV4aWJsZSBwZXJzb25uZWwgZmFjdG9yeVxuICBcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XG4gICAgICAgIFxuICAgIHRoaXMudGVhbSA9IHRlYW07XG5cbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICAvL3NldCBjbGljayBldmVudFxuICAgIC8vdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIC8vdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XG5cbiAgICAvL3NldHVwIGF1ZGlvXG4gICAgdGhpcy5kaW5nID0gdGhpcy5nYW1lLmFkZC5hdWRpbygnZGluZycpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAyNztcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSA5MDtcblxuICAgIC8vIGFkZCBhbmltYXRpb25zIGZyb20gc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsaW5nJyxudWxsLDUsdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2lkbGluZycpO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGhpZ2hsaWdodE9uKCkge1xuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XG4gIH1cbiAgXG4gIGhpZ2hsaWdodE9mZigpIHtcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xuICB9XG4gIFxuICBnZXRMZWdhbE1vdmVzKCkge1xuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcbiAgICBcbiAgICBcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcbiAgfVxuICBcbiAgbW92ZShjb29yZGluYXRlcykge1xuICBcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIFxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcbiAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAzNTsgXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcblxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcblxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIHRoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XG5cbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsaW5nJyxudWxsLDUsdHJ1ZSk7XG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2lkbGluZycpO1xuXG4gIH1cblxuXG4gIGNsaWNrZWQgKCkge1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHthY3Rpb246ICdyb2xsJ30pO1xuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGUgPT0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU1RBUlQgKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlID0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU0VMRUNUX0NMT05FO1xuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24ubG9jYWxUZWFtLm9mZmVyTGVnYWxDbG9uZXMoKTtcbiAgICB9IGVsc2UgaWYodGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZSA9PSB0aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlRW51bS5TRUxFQ1RfR1VOTkVSKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wZW5kaW5nQWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkd1bm5lcnMgQ29uZmlybWVkIVwiKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmdhbWUuc2VwdGlrb24ucGVuZGluZ0FjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zZXB0aWtvblthY3Rpb24ucHJvcHMuY2FsbGJhY2tdKGFjdGlvbi5wcm9wcy5hcmdzLCBhY3Rpb24uY2FsbGVyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGljZSBhbHJlYWR5IHJvbGxlZCBmb3IgdGhpcyB0dXJuICh0dXJuIHN0YXRlOiBcIiArIHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGUgKyBcIikuIFRoZSB2YWx1ZSBpczogXCIgKyB0aGlzLmdhbWUuZ2xvYmFsLmxhc3REaWNlUm9sbCk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGljZTtcbiIsImNsYXNzIE1hc3RlciB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZG5hbmNlOyIsImNsYXNzIFBlcnNvbm5lbCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcbiAgICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb25uZWw7IiwiY2xhc3MgUmVzb3VyY2VzIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICB0aGlzLnJlc291cmNlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBPWFlHRU46IDAsXG4gICAgICAgIFJPQ0tFVDogMSxcbiAgICAgICAgTUVUQUw6IDIsXG4gICAgICAgIEVORVJHWTogMyxcbiAgICAgICAgQklPTUFTUzogNCxcbiAgICAgICAgQklPRFJPTkU6IDUsXG4gICAgICAgIFVSQU5JVU06IDZcbiAgICB9KTtcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xuICAgIGZvcih2YXIgdHlwZSBpbiB0aGlzLnJlc291cmNlRW51bSkge1xuICAgICAgICB0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPSA1O1xuICAgIH07XG4gIH1cbiAgXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XG4gICAgaWYodGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID4gY291bnQpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGdldENvdW50KHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbdHlwZV07XG4gIH1cbiAgICBcbiAgYWRkKHR5cGUsIGNvdW50KSB7XG4gIH1cbiAgXG4gIHJlbW92ZSh0eXBlLCBjb3VudCkge1xuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZXM7IiwiaW1wb3J0IE1hc3RlciBmcm9tICcuLi9wcmVmYWJzL21hc3Rlcic7XG4vL2ltcG9ydCBUZWFtIGZyb20gJy4uL3ByZWZhYnMvdGVhbSc7XG5cbmNsYXNzIFNlcHRpa29uIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBcbiAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xuICAgIHRoaXMuYmdSYXRpbyA9IDA7XG4gICAgdGhpcy53b3JsZFJhdGlvID0gMDtcbiAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgU1RBUlQ6IDAsXG4gICAgICAgIFNFTEVDVF9DTE9ORTogMSwgXG4gICAgICAgIE1PVkVfQ0xPTkU6IDIsXG4gICAgICAgIFNFTEVDVF9HVU5ORVI6IDMsXG4gICAgICAgIFNFTEVDVF9BQ1RJT05fT1JERVI6IDQsIFxuICAgICAgICBBQ1RJT046IDUsXG4gICAgICAgIEVORDogNlxuICAgIH0pO1xuICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBOT1JUSDoxLFxuICAgICAgICBFQVNUOjIsXG4gICAgICAgIFNPVVRIOjQsXG4gICAgICAgIFdFU1Q6OFxuICAgIH0pO1xuICAgIHRoaXMudHVyblN0YXRlID0gMDtcblxuICB9XG4gIFxuICBwaXhlbHNUb1RpbGUoeCwgeSkge1xuICAgIHZhciB4VGlsZSA9IDA7XG4gICAgdmFyIHlUaWxlID0gMDtcbiAgICBcbiAgICBmb3IgKHZhciBjb2wgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMudGlsZUFycmF5W2NvbF0pIHtcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVBcnJheVtjb2xdW3Jvd11cbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXG4gICAgICAgICAgICAgICAgeFRpbGUgPSBwYXJzZUludChjb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXG4gICAgICAgICAgICAgICAgeVRpbGUgPSBwYXJzZUludChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7eDp4VGlsZSwgeTp5VGlsZX07XG4gIH1cbiAgXG4gIHRpbGVUb1BpeGVscyh4LCB5KSB7XG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcbiAgICB2YXIgdGlsZVggPSB0aWxlT2JqLnggKyAodGlsZU9iai53aWR0aC8yKTtcbiAgICB2YXIgdGlsZVkgPSB0aWxlT2JqLnkgKyAodGlsZU9iai5oZWlnaHQvMik7XG4gICAgcmV0dXJuIHt4OnRpbGVYLCB5OnRpbGVZfTtcbiAgfVxuICBcbiAgdGlsZUNsaWNrZWQob2JqKSB7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdHJpZ2dlclRpbGUoY2FsbGVyKSB7XG4gIFxuICAgIHZhciB0aWxlID0gdGhpcy50aWxlQXJyYXlbY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV07XG4gICAgY2FsbGVyLmlzR3VubmVyID0gZmFsc2U7XG4gICAgdmFyIHByb3BzID0gdGlsZS50aWxlUHJvcGVydGllcztcbiAgICBcbiAgICBzd2l0Y2godGlsZS50aWxlVHlwZSkge1xuICAgICAgICBjYXNlICdzdXJmYWNlJzogXG4gICAgICAgICAgICBjYWxsZXIuaXNHdW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdiYXR0bGUnOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIC8vIENBTiBUSElTIFRFQU0gQUZGT1JEIFRIRSBDT1NUP1xuICAgICAgICAgICAgICAgIC8vIEVYQ0hBTkdFIFJFU09VUkNFUyAvLyBQQVkgVVAhIVxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgYXZhaWxhYmxlIHJlc291cmNlIGNvdW50IGFuZCBwcmVwYXJlIHRvIG9mZmVyIFwiZ3VubmVyXCIgY2xvbmVzIGZvciBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIklzIHRoaXMgcmVzb3VyY2UgYXZhaWxhYmxlP1wiKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFR5cGVzIG9mIGJhdHRsZSB0aWxlcyB3aXRoIGEgRklSRSBhY3Rpb246XG4gICAgICAgICAgICAgICAgLy8gIC0gU2F0ZWxsaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIC8vICAtIFRoZXJtaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAvLyAgLSBTaGllbGQ6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gIC0gQmlvZHJvbmU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXG4gICAgICAgICAgICAgICAgLy8gIC0gTGFzZXI6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIC8vICAtIFJvY2tldDogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLnRpbGVOYW1lKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSA9PSBmYWxzZSAmJiAodGlsZS50aWxlTmFtZSA9PSBcInNhdGVsbGl0ZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJ0aGVybWl0ZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJzaGllbGRcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwiYmlvZHJvbmVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwibGFzZXJcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwicm9ja2V0XCIgKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxvY2FsVGVhbS5jaGVja1JlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KSk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2NhbFRlYW0uY2hlY2tSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCkgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxUZWFtLnJlbW92ZVJlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5ldyBjb3VudCBvZiBcIiArIHByb3BzLnJlc291cmNlQ29zdFR5cGUgKyBcIiBpcyBcIiArIHRoaXMubG9jYWxUZWFtLmdldFJlY0NvdW50KHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSkpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uID0ge3Byb3BzLCBjYWxsZXJ9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9GRkVSIEdVTk5FUlMgQU5EIEFXQUlUIFNFTEVDVElPTiAocmVtZW1iZXIgdGhlIGNvc3QgcGVyIGd1bm5lcilcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZXF1aXJlIGFuIGFycmF5IG9mIGNsb25lcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRlYW0uIFxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgYXJyYXkgbG9va2luZyBmb3IgJ2lzR3VubmVyID09IHRydWUnXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYWxsIFwiZ3VubmVyXCIgY2xvbmVzXG4gICAgICAgICAgICAvLyBBbGxvdyBzZWxlY3Rpb24gb2Ygb25seSBhcyBtYW55IGFzIHRlYW0gY2FuIGFmZm9yZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNhbGwgdGhlIG1ldGhvZCBkZWZpbmVkIGluIEpTT04uIEluIHRoaXMgY2FzZSBmaXJpbmcgYSB3ZWFwb24uXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzZWxlY3RlZCBndW5uZXJzIGFuZCBjYWxsIHRoZSBtZXRob2QuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ2FybW9yeSc6XG4gICAgICAgICAgICAvL1NFVCBURUFNIFdFQVBPTlMhXG4gICAgICAgICAgICAvLyBUaGlzIHJlcXVpcmVzIGEgVGVhbSBwcm9wZXJ0eSBmb3Igc3RvcmluZyBhIHdlYXBvbnMgKGFybXM/KSBhcnJheS5cbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAncHJvZHVjdGlvbic6XG4gICAgICAgICAgICAvLyBOT1RFOiBUaGVzZSBhcmUgcmVxdWlyZWQgaWYgcmVzb3VyY2VzIGFsbG93XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLnJlc291cmNlQ29zdENvdW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gQ0FOIFRISVMgVEVBTSBBRkZPUkQgVEhFIENPU1Q/XG4gICAgICAgICAgICAgICAgLy8gUmVxdWlyZXMgVGVhbSBvYmplY3QgdG8gY2hlY2sgZm9yIHJlc291cmNlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3N0IGNvdW50XG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvc3QgdHlwZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCBjb3VudFxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCB0eXBlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0cmFuc2FjdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnbG9jayc6XG4gICAgICAgICAgICAvLyBOT1RISU5HIEhFUkUgKG1heWJlIGFuIHVwZGF0ZSBmZWF0dXJlPz8pXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9OyBcbiAgICAgICAgICAgIFxuICAgIC8vIENPTU1JVCBBQ1RJT05cbiAgICBcbiAgfVxuICBcbiAgICBmaXJlKHdlYXBvblR5cGUsIGNhbGxlcikge1xuICAgIGNvbnNvbGUubG9nKFwiRmlyaW5nIHRoZSBcIiArIHdlYXBvblR5cGUpO1xuICAgIFxuICAgIHN3aXRjaCAod2VhcG9uVHlwZSkge1xuICAgICAgICBjYXNlICdsYXNlcic6XG4gICAgICAgICAgICAvL2ZvciAodmFyIGkgaW4gdGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzKSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgY2FzZSAnc2F0ZWxsaXRlJzpcbiAgICAgICAgICAgIC8vIFBMQUNFIEEgU0FURUxMSVRFXG4gICAgICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ3RoZXJtaXRlJzpcbiAgICAgICAgICAgIC8vdGhpcy5zaG9vdFRpbGUoY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMsIHRydWUpO1xuICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdzaGllbGQnOlxuICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdiaW9kcm9uZSc6XG4gICAgICAgICAgICAvL2JyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIGNhc2UgJ3JvY2tldCc6IFxuICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICB9O1xuICAgIFxuICAgIHRoaXMubG9jYWxUZWFtLmNsZWFyR3VubmVycygpO1xuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZSA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGVFbnVtLlNUQVJUO1xuICAgIHRoaXMuZmluaXNoVHVybigpO1xuICB9XG4gIFxuICByZXBhaXIoY291bnQpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlcGFpciBcIiArIGNvdW50ICsgXCIgb2YgdGhlIHRoaW5ncyFcIik7XG4gIH1cbiAgXG4gIGVzcGlvbmFnZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBjbG9uZSEhXCIpO1xuICB9XG4gIFxuICB0YWtlb3ZlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBzYXRlbGxpdGUhIVwiKTtcbiAgfVxuICBcbiAgY291bnRlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIGJhY2sgbXkgY2xvbmUhIVwiKTtcbiAgfVxuICBcbiAga2lsbEJpb2Ryb25lKCkge1xuICAgIGNvbnNvbGUubG9nKFwiWWVyIHNvdWxkIGJldHRlciBiZWxvbmcgdG8gSmVzdXMhIEN1eiB5ZXIgYXNzIGJlbG9uZ3MgdG8gbWUhXCIpO1xuICB9XG4gIFxuICBmaW5pc2hUdXJuKCkge1xuICAgIHRoaXMudHVyblN0YXRlID0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU1RBUlQ7XG4gICAgLy9jb25zb2xlLmxvZyhcIkFsYXMuIFlvdXIgdHVybiBpcyBvdmVyLiBcIik7XG4gIH1cblxuICBnZXRMZWdhbE1vdmVzKG1vdmVzLCBjdXJyZW50Q29vcmQsIHByZXZpb3VzQ29vcmQpIHtcblx0bW92ZXMtLTtcblx0dmFyIGxlZ2FsTW92ZXMgPSBbXTtcblx0Zm9yKHZhciBkaXJlY3Rpb24gaW4gdGhpcy5kaXJlY3Rpb25FbnVtKSB7XHRcblx0XHQvLyBORUVEIFRPIENIRUNLIEZPUiBMT0NLU1xuXHRcdHZhciBtb3ZlQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsZGlyZWN0aW9uKTtcbiAgICAgICAgaWYgKG1vdmVDaGVjayA9PSBmYWxzZSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIHZhciB0aWxlVG9DaGVjayA9IHRoaXMudGlsZUFycmF5W21vdmVDaGVjay54XVttb3ZlQ2hlY2sueV07XG5cbiAgICAgICAgLy8gdGlsZSBpcyBsZWdhbCBJRiBkaXJlY3Rpb24gaXMgb2sgQU5EIHRpbGUgaXMgbm90IGRhbWFnZWQgQU5EICggdGhlcmUgaXMgbm8gcHJldmlvdXMgY29vcmRpbmF0ZSBPUiB0aGlzIGlzIG5vdCB0aGUgcHJldmlvdXMgY29vcmRpbmF0ZSApXG5cdFx0aWYodGhpcy5jaGVja1dhbGwodGhpcy5kaXJlY3Rpb25FbnVtW2RpcmVjdGlvbl0sIGN1cnJlbnRDb29yZCkgPT09IHRydWUgJiYgdGlsZVRvQ2hlY2sudGlsZURhbWFnZWQgPT09IGZhbHNlICYmICgodHlwZW9mIHByZXZpb3VzQ29vcmQgPT09ICd1bmRlZmluZWQnKSB8fCAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkICE9PSAndW5kZWZpbmVkJykgJiYgKEpTT04uc3RyaW5naWZ5KG1vdmVDaGVjaykgIT09IEpTT04uc3RyaW5naWZ5KHByZXZpb3VzQ29vcmQpKSApKSkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGlsZSBpcyBvY2N1cGllZFxuICAgICAgICAgICAgaWYobW92ZXM9PTApe1xuICAgICAgICAgICAgICAgIGlmKHRpbGVUb0NoZWNrLnRpbGVPY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKG1vdmVDaGVjayk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHZhciByZXR1cm5BcnJheSA9ICh0aGlzLmdldExlZ2FsTW92ZXMobW92ZXMsIG1vdmVDaGVjaywgY3VycmVudENvb3JkKSk7XG5cdFx0XHRcdGZvcih2YXIgaW5kZXggaW4gcmV0dXJuQXJyYXkpIHtcblx0XHRcdFx0XHRpZihKU09OLnN0cmluZ2lmeShyZXR1cm5BcnJheVtpbmRleF0pICE9PSBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29vcmQpKVxuXHRcdFx0XHRcdFx0bGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGxlZ2FsTW92ZXM7XG4gIH1cbiAgICBcbiAgZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKG9yaWdpbkNvb3JkLGRpcmVjdGlvbikge1xuXG5cdHZhciBkaXI9e05PUlRIOnt4OjAseTotMX0sRUFTVDp7eDoxLHk6MH0sU09VVEg6e3g6MCx5OjF9LFdFU1Q6e3g6LTEseTowfX07XG4gICAgXG4gICAgdmFyIG9iaiA9IHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9O1xuICAgIGlmKG9iai54IDwgMCB8fCBvYmoueSA8IDApIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cdGVsc2VcbiAgICAgICAgcmV0dXJuIHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9O1xuXHRcdFxuICB9XG4gIFxuICBzaG93VGlsZXModGlsZXNBcnJheSkge1xuICAgIGZvciAodmFyIGkgaW4gdGlsZXNBcnJheSkge1xuICAgICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh0aWxlc0FycmF5W2ldKTtcbiAgICAgICAgdGlsZXNBcnJheVtpXS5hbHBoYSA9IDAuNTtcbiAgICB9XG4gIH1cbiAgXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcbiAgICBpZighdGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5zaG93blRpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3duVGlsZXNbaV0uYWxwaGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHNob290VGlsZShjbG9uZUNvb3JkaW5hdGVzKSB7XG4gIFxuICAgIHZhciBjdXJyZW50WCA9IGNsb25lQ29vcmRpbmF0ZXMueDtcbiAgICB2YXIgY3VycmVudFkgPSBjbG9uZUNvb3JkaW5hdGVzLnk7XG4gICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbY3VycmVudFhdW2N1cnJlbnRZXTtcbiAgICBkbyB7XG4gICAgICAgIGN1cnJlbnRYKys7XG4gICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbY3VycmVudFhdW2N1cnJlbnRZXTtcbiAgICB9IHdoaWxlIChjdXJyZW50VGlsZS50aWxlVHlwZSA9PSAnc3BhY2UnIHx8IGN1cnJlbnRUaWxlLnRpbGVUeXBlID09ICdzdXJmYWNlJyB8fCBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9PSB0cnVlKTtcbiAgICBcbiAgICBjdXJyZW50VGlsZS50aW50ID0gMFgzMzMzMzM7XG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwLjg7XG4gICAgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPSB0cnVlO1xuICAgIFxuICAgIHRoaXMudGVzdCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKGN1cnJlbnRUaWxlLngsIGN1cnJlbnRUaWxlLnkgKyhjdXJyZW50VGlsZS5oZWlnaHQvMiksICdib29tJyk7XG4gICAgdGhpcy50ZXN0LmFuZ2xlID0gMjcwO1xuICAgIHRoaXMudGVzdC5hbmNob3Iuc2V0KDAuNSwwLjcpO1xuICAgIHRoaXMudGVzdC5hbmltYXRpb25zLmFkZCgnYm9vbScpO1xuICAgIHRoaXMudGVzdC5hbmltYXRpb25zLnBsYXkoJ2Jvb20nLCAyMCwgZmFsc2UsIHRydWUpO1xuICAgIFxuICB9XG4gIFxuICBjaGVja1dhbGwoZGlyZWN0aW9uLCBjdXJyZW50Q29vcmRpbmF0ZSkge1xuICAgIHRoaXMud2FsbEdyaWQgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTignd2FsbEdyaWQnKTtcblx0c3dpdGNoIChkaXJlY3Rpb24pe1xuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIOiAvLyBVUFxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEgpID09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSDogLy8gRE9XTlxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uU09VVEgpID09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLldFU1Q6IC8vIExFRlRcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLldFU1QpID09IDApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG4gICAgXG4gIH1cbiAgXG4gIHNldHVwKCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuY3JlYXRlVGlsZUFycmF5KDMxLCAyMSk7XG4gICAgXG4gICAgLy90aGlzLmxvY2FsVGVhbSA9IG5ldyBUZWFtKHRoaXMuZ2FtZSk7XG4gICAgLy90aGlzLnJlbW90ZVRlYW0gPSBuZXcgVGVhbSh0aGlzLmdhbWUpO1xuICAgIFxuICAgIC8vdGhpcy5nbSA9IG5ldyBNYXN0ZXIoKTtcblxuICB9XG4gIFxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XG4gICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxKTtcbiAgICB0aGlzLmxvY2FsVGVhbS5yZWZyZXNoKCk7XG4gIH1cbiAgICBcbiAgY3JlYXRlVGlsZUFycmF5KGNvbHVtbnMsIHJvd3MsIHNob3dUaWxlcyA9IGZhbHNlKSB7XG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcblxuICAgIHRoaXMudGlsZVdpZHRoID0gMDtcbiAgICB0aGlzLnRpbGVIZWlnaHQgPSAwO1xuICAgICAgICBcbiAgICB0aGlzLmJhY2tncm91bmRXaWR0aCA9IHRoaXMuZ2FtZS5jYW52YXMud2lkdGg7XG4gICAgdGhpcy5iYWNrZ3JvdW5kSGVpZ2h0ID0gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XG5cbiAgICB0aGlzLm1hcmdpblRvcCA9IDQwO1xuICAgIHRoaXMubWFyZ2luQm90dG9tID0gMzg7XG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gNDE7XG4gICAgdGhpcy5tYXJnaW5SaWdodCA9IDM4O1xuICAgIFxuICAgIHRoaXMucGFkZGluZyA9IDQuODU7XG4gICAgXG4gICAgdGhpcy50aWxlV2lkdGggPSAyNTsvLyh0aGlzLmJhY2tncm91bmRXaWR0aCAtICgodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgKyAodGhpcy5wYWRkaW5nICogKGNvbHVtbnMgLSAxKSkpKSAvIGNvbHVtbnM7XG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcbiAgICAgICAgXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ID0gMCArIHRoaXMubWFyZ2luTGVmdDtcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgPSAwICsgdGhpcy5tYXJnaW5Ub3A7XG4gICAgXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZkOTAwLCAxKTtcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XG4gICAgXG4gICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggKyAodGhpcy50aWxlV2lkdGggKiBjb2x1bW4pICsgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgKyAodGhpcy50aWxlSGVpZ2h0ICogcm93KSArICh0aGlzLnBhZGRpbmcgKiByb3cgLSAxKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XG4gICAgICAgICAgICBpZiAoc2hvd1RpbGVzKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC41O1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMudGlsZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XG4gICAgXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZURldGFpbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBjb29yZHNbMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURhbWFnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVUeXBlID0gb2JqW3Byb3BdLnR5cGU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlTmFtZSA9IG9ialtwcm9wXS5uYW1lO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdLnByb3BlcnRpZXMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV1bJ3RpbGVQcm9wZXJ0aWVzJ10gPSBvYmpbcHJvcF0ucHJvcGVydGllcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcHRpa29uO1xuIiwiaW1wb3J0IFJlc291cmNlcyBmcm9tICcuLi9wcmVmYWJzL3Jlc291cmNlcyc7XG5pbXBvcnQgUGVyc29ubmVsIGZyb20gJy4uL3ByZWZhYnMvcGVyc29ubmVsJztcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcbmltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJzsgLy8gVGhpcyB3aWxsIGJlIGluY29ycG9yYXRlZCBpbiBwZXJzb25uZWxcblxuY2xhc3MgVGVhbSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxuICAgIHRoaXMucmVjID0gbmV3IFJlc291cmNlcygpO1xuICAgIHRoaXMucmVjRW51bSA9IHRoaXMucmVjLnJlc291cmNlRW51bTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIFxuICAgIHRoaXMucGVyc29ubmVsID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgfVxuICBcbiAgcmVmcmVzaCgpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICAvL1Jlc291cmNlIEludGVyZmFjZVxuICBnZXRSZWNDb3VudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLmdldENvdW50KHR5cGUpO1xuICB9XG4gIFxuICBjaGVja1JlYyh0eXBlLCBjb3VudCkge1xuICAgIGlmICh0aGlzLmdldFJlY0NvdW50KHR5cGUpID49IGNvdW50KSBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgZXhjaGFuZ2VSZWMoY29zdFR5cGUsIGNvc3RDb3VudCwgeWllbGRUeXBlLCB5aWVsZENvdW50KSB7XG4gIH1cbiAgXG4gIGFkZFJlYyh0eXBlLCBjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlYy5hZGQodHlwZSwgY291bnQpO1xuICB9XG4gIFxuICByZW1vdmVSZWModHlwZSwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMucmVtb3ZlKHR5cGUsIGNvdW50KTtcbiAgfVxuICBcbiAgYWRkQ2xvbmUoeCwgeSwgcHJvcHMpIHtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHgseSk7XG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSxwb2ludC54LHBvaW50LnkpO1xuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9IHg7XG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy55ID0geTtcbiAgICBcbiAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XG4gICAgICAgIGNsb25lW2ldID0gcHJvcHNbaV07XG4gICAgfVxuICAgIHRoaXMucGVyc29ubmVsLnB1c2goY2xvbmUpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZChjbG9uZSk7XG4gIH1cbiAgXG4gIGdldENsb25lKGNvb3JkKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPT0gY29vcmQueCAmJiB0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnkgPT0gY29vcmQueSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25uZWxbaV07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGtpbGxDbG9uZShjb29yZCkge1xuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmQpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wZXJzb25uZWwuaW5kZXhPZihjbG9uZSk7XG4gICAgdGhpcy5wZXJzb25uZWwuc3BsaWNlKGluZGV4LDEpO1xuICAgIFxuICAgIGNsb25lLnJlbW92ZSgpO1xuICB9XG4gICAgXG4gIG9mZmVyTGVnYWxDbG9uZXMoKSB7XG4gICAgLy8gT2ZmZXIgY2xvbmVzIHRoYXQgaGF2ZSBsZWdhbCBtb3Zlc1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLnBlcnNvbm5lbFtpXS5nZXRMZWdhbE1vdmVzKCk7XG5cbiAgICAgICAgaWYobW92ZXMgIT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIG9mZmVyR3VubmVycygpIHtcbiAgICAvLyBPZmZlciBndW5uZXIgXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmlzR3VubmVyKSB7XG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAvL3RoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGd1bm5lckZvdW5kO1xuICB9XG4gIFxuICBzZWxlY3RHdW5uZXIoY29vcmRzKSB7XG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xuICAgIGlmKCFjbG9uZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmKCFjbG9uZS5pc0d1bm5lcilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICB2YXIgZXhpc3RpbmdHdW5uZXIgPSB0aGlzLnNlbGVjdGVkR3VubmVycy5pbmRleE9mKGNsb25lKTtcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T2ZmKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnNwbGljZShleGlzdGluZ0d1bm5lciwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChjbG9uZSk7XG4gICAgfVxuICB9XG4gIFxuICBjbGVhckd1bm5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNlbGVjdGVkR3VubmVycykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVyc1tpXS5oaWdobGlnaHRPZmYoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgfVxuICBcbiAgc2VsZWN0Q2xvbmVGb3JNb3ZlKGNvb3JkcykgeyAgICBcbiAgXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xuICAgIGlmKCFjbG9uZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9mZigpO1xuICAgIH1cbiAgICB0aGlzLmxlZ2FsVGlsZXMgPSBjbG9uZS5nZXRMZWdhbE1vdmVzKCk7XG4gICAgdGhpcy5zZWxlY3RlZENsb25lID0gY2xvbmU7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBtb3ZlU2VsZWN0ZWRDbG9uZShjb29yZHMpIHtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5sZWdhbFRpbGVzKSB7XG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDbG9uZS5tb3ZlKGNvb3Jkcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZENsb25lO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtOyIsImNsYXNzIE9yZG5hbmNlIHtcbn1cblxubW9kdWxlLmV4cG9ydHMuT3JkbmFuY2UgPSBPcmRuYW5jZTtcbiIsImNsYXNzIFBlcnNvbm5lbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIGNsb25lOiAwLFxuICAgICAgICAgICAgYmlvZHJvbmU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnggPSB0aGlzLnkgPSAtMTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdmUoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpLlJlc291cmNlO1xudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xuXG5cbmNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnJlc291cmNlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5ID0gW107XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7ICAgIFxuICAgIH1cbiAgICAgICAgXG4gICAgYWRkUGVyc29ubmVsKHR5cGUpIHtcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIgJiYgdGhpcy5nZXRQZXJzb25uZWwodHlwZSkubGVuZ3RoIDwgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkucHVzaChuZXcgUGVyc29ubmVsKCdjbG9uZScpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRQZXJzb25uZWwodHlwZSkge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGVyc29ubmVsQXJyYXlbaV0udHlwZSA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5wZXJzb25uZWxBcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiY2xhc3MgUmVzb3VyY2VzIHtcbn1cblxubW9kdWxlLmV4cG9ydHMuUmVzb3VyY2VzID0gUmVzb3VyY2VzO1xuIiwidmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykuUGxheWVyO1xuXG5jbGFzcyBTZXB0aWtvbiB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCA9IDA7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyVHVybklEID0gdGhpcy5sYXN0UGxheWVySUQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVTdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFNFVFVQOiAwLFxuICAgICAgICAgICAgR0FNRTogMSwgXG4gICAgICAgICAgICBQQVVTRTogMixcbiAgICAgICAgICAgIEVORDogM1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudHVyblN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgUk9MTDogMCxcbiAgICAgICAgICAgIE1PVkU6IDEsIFxuICAgICAgICAgICAgQUNUSU9OOiAyLFxuICAgICAgICAgICAgRU5EOiAzXG4gICAgICAgIH0pO1xuXHR9XG5cblx0YWRkTmV3UGxheWVyKHNvY2tldCkge1xuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCsrO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhc3RQbGF5ZXJJRCk7XG4gICAgICAgIFxuICAgICAgICAvL2lmKHRoaXMucGxheWVycy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcih0aGlzLmxhc3RQbGF5ZXJJRCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIG5ldyBQbGF5ZXIgd2l0aCBpZDogXCIgKyBwbGF5ZXIuaWQpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICAgICAgLy99XG5cdH1cbiAgICBcbiAgICBjbGlja2VkKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXN0UGxheWVySUQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcnMpO1xuICAgICAgICB2YXIgY3VycmVudFBsYXllciA9IHRoaXMucGxheWVycy5maW5kKGZ1bmN0aW9uKHBsYXllciwgaWQpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZCBpczogXCIgKyBpZCk7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyLmlkID09PSBpZDtcbiAgICAgICAgICAgIH0sIHRoaXMubGFzdFBsYXllcklEKTtcbiAgICAgICAgaWYodHlwZW9mKGN1cnJlbnRQbGF5ZXIpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgbm90IGZvdW5kJyk7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cy5TZXB0aWtvbiA9IFNlcHRpa29uO1xuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xuXG5jbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgLy9zZXR1cCBkZXZpY2Ugc2NhbGluZ1xuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XG4gICAgICAvL3RoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnBhcmVudElzV2luZG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluSGVpZ2h0ID0gMjYwO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLmZvcmNlT3JpZW50YXRpb24odHJ1ZSk7XG4gICAgICAvL3RoaXMuZ2FtZS5zY2FsZS5zZXRTaXplKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0R2xvYmFsVmFyaWFibGVzKCk7XG4gICAgXG4gICAgLy90aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKCk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKHRoaXMuZ2FtZSk7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcbiAgfVxuXG4gIGluaXRHbG9iYWxWYXJpYWJsZXMoKXtcbiAgICB0aGlzLmdhbWUuZ2xvYmFsID0ge1xuICAgICAgc2NvcmU6IDAsXG4gICAgICBsYXN0RGljZVJvbGw6IDAsXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3Q7XG4iLCJpbXBvcnQgRGljZSBmcm9tICcuLi9wcmVmYWJzL2RpY2UnO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIFxuICBjcmVhdGUoKSB7XG4gICAgICB0aGlzLmdhbWUuc2VwdGlrb24uc3RhcnRHYW1lKCk7XG5cbiAgICAvL2FkZCBiYWNrZ3JvdW5kIGltYWdlXG4gICAgLy90aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxKTtcbiAgICBcblxuICAgIC8vdGhpcy5nYW1lLlNlcHRpa29uLmJnUmF0aW8gPSB0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCAvIHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcbiAgICAvL3RoaXMuZ2FtZS5TZXB0aWtvbi53b3JsZFJhdGlvID0gdGhpcy5nYW1lLndvcmxkLndpZHRoIC8gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcbiAgICAvL3RoaXMuZ2FtZS5TZXB0aWtvbi51cGRhdGVTY3JlZW4oKTtcbiAgICBcbiAgICAvL3NldHVwIFVJXG4gICAgLypcbiAgICB0aGlzLmNvdW50ZG93blRleHQgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCA1MDAsICcnLCB7XG4gICAgICBmb250OiAnNDBweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgdGhpcy5jb3VudGRvd25UZXh0LmFuY2hvci5zZXQoMC41LDApO1xuICAgICovXG4gICAgdGhpcy5kaWNlID0gbmV3IERpY2UodGhpcy5nYW1lLCAxNTAsIDc3MCk7XG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmRpY2UpO1xuICAgIHRoaXMucm9sbFRleHQgPSB0aGlzLmFkZC50ZXh0KDE1MCwgNzAwLCAnJywge1xuICAgICAgZm9udDogJzQwcHggQXJpYWwnLCBmaWxsOiAnI2ZmZmZmZicsIGFsaWduOiAnY2VudGVyJ1xuICAgIH0pO1xuICAgIHRoaXMucm9sbFRleHQuYW5jaG9yLnNldCgwLjUsMCk7XG5cbiAgICAvL3NldHVwIHByZWZhYnNcbiAgfVxuICBcbiAgdXBkYXRlKCkge1xuICAgIC8vdGhpcy50ZXN0LmFuZ2xlICs9IDU7XG4gICAgdGhpcy5yb2xsVGV4dC5zZXRUZXh0KFwiRGljZSBSb2xsIFwiICsgdGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwpO1xuICAgIC8vdGhpcy5jb3VudGRvd25UZXh0LnNldFRleHQoICh0aGlzLmdhbWUuaW5wdXQueCkudG9GaXhlZCgxKSArIFwiIDo6IFwiICsgKHRoaXMuZ2FtZS5pbnB1dC55KS50b0ZpeGVkKDEpKTtcbiAgfVxuXG4gIGVuZEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lb3ZlcicpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XG4gICAgfVxuXG4gICAgLy9hZGQgaW50cm8gdGV4dFxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcbiAgICB9KTtcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XG5cbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICB9XG5cbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cbiAgfVxuXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XG4gIH1cbiAgdXBkYXRlKCkge31cblxuICBvbklucHV0RG93biAoKSB7XG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hc3NldCA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xuICAgIFxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICB9XG5cbiAgbG9hZFJlc291cmNlcygpIHtcbiAgICAgIFxuICAgIC8vTUVOVSBSRVNPVVJDRVNcbiAgICAvL21lbnUgYmFja2dyb3VuZFxuICAgIC8vdGV4dCBpbWFnZXNcbiAgICAvL211c2ljIGZpbGVzID9cbiAgICBcbiAgICAvL2xvYWQgZ2FtZSBkYXRhXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcbiAgXG4gICAgLy9HQU1FIFJFU09VUkNFU1xuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCdhc3NldHMvbWVkaXVtX2JvYXJkLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdkaWNlJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG4gICAgXG4gICAgLy8gbW9kYWwgaW1hZ2VzXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X25vJywnYXNzZXRzL3RleHRfbm8ucG5nJyk7XG5cbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLDExMCwxNjgpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzKCdib29tJywgJ2Fzc2V0cy9ib29tLnBuZycsICdhc3NldHMvYm9vbS5qc29uJywgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCk7XG5cbiAgICAvL2F1ZGlvIGZpbGVzIFxuICAgIFxuICAgIC8vdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Nyb3NzaGFpcnMnLCAnYXNzZXRzL2Nyb3NzaGFpcl9yZWRfc21hbGwucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfcmVhZHknLCAnYXNzZXRzL3RleHRfcmVhZHkucG5nJyk7XG5cbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xuXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZ3Vuc2hvdCcsJ2Fzc2V0cy9ndW5zaG90LndhdicpO1xuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcbiAgfVxuXG4gIG9uTG9hZENvbXBsZXRlKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc2V0dXAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XG4iLCJjbGFzcyBTZXR1cCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiB9XG4gIFxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XG4gICAgXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNldHVwKCk7XG4gICAgXG5cdHRoaXMuZ2FtZS5jbGllbnQuYXNrTmV3UGxheWVyKCk7XG4gIH1cbiAgXG4gIGNyZWF0ZU1vZGFscygpIHtcbiAgXG4gICAgLy8gU3RhcnQgR2FtZVxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbCh7XG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxuICAgICAgICBpdGVtc0FycjogW3tcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQXJlIHlvdSBoYXBweSB3aXRoXFxuIHRoYXQgY2xvbmUgbGF5b3V0P1wiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogLTgwLFxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfbm9cIixcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgXVxuICAgIH0pO1xuICAgIFxuICB9XG4gIFxuICBcbiAgXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcbiJdfQ==
