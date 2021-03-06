/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\nconst DEFAULTS = {\n  LENGTH: 4,\n  COLOR: \"red\",\n  RADIUS: 50\n};\n\nfunction Asteroid(options) {\n  options = options || {};\n  options.vel = options[\"vel\"] || Util.randomVec(DEFAULTS.LENGTH);\n  options.pos = options.pos || options.game.randomPosition();\n  options.color = options[\"color\"] || DEFAULTS.COLOR;\n  options.radius = options[\"radius\"] || DEFAULTS.RADIUS;\n\n  MovingObject.call(this, options);\n};\n\n//Set Inheritance (ES5 syntax)\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function collideWith(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n    return true;\n  } else if (otherObject instanceof Bullet) {\n    this.remove();\n    otherObject.remove();\n    return true;\n  }\n  return false;\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Bullet(options) {\n  options.radius = Bullet.RADIUS;\n\n  MovingObject.call(this, options);\n};\n\nBullet.RADIUS = 2;\nBullet.SPEED = 15;\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.ships = [];\n  this.bullets = [];\n\n  this.addAsteroids();\n};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 4;\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat(this.ships, this.asteroids, this.bullets);\n};\n\nGame.prototype.add = function add(object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.push(object);\n  } else if (object instanceof Bullet) {\n    this.bullets.push(object);\n  } else if (object instanceof Ship) {\n    this.ships.push(object);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n}\n\n//Randomly place the asteroids within the dimensions of the game grid.\n//Store the asteroids as a property of your game instance in an array asteroids\nGame.prototype.addAsteroids = function addAsteroids() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid({ game: this }));\n  }\n};\n\nGame.prototype.addShip = function addShip() {\n  const ship = new Ship({ pos: this.randomPosition(), game: this });\n  this.ships.push(ship);\n  return ship;\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n  return [\n    Game.DIM_X * Math.random(),\n    Game.DIM_Y * Math.random()\n  ];\n};\n\n//It should call clearRect on the ctx to wipe down the entire space.\n//Call the draw method on each of the asteroids.\nGame.prototype.draw = function draw(ctx) {\n  const allObjects = this.allObjects();\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = \"white\";\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  for (let i = 0; i < allObjects.length; i++) {\n    let obj = allObjects[i];\n    obj.draw(ctx);\n  }\n};\n\nGame.prototype.moveObjects = function moveObjects() {\n  const allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    let obj = allObjects[i];\n    obj.move();\n  }\n\n};\n\n//If an asteroid scrolls off one side, it should reappear on the other side\nGame.prototype.wrap = function wrap(pos) {\n  return [\n    Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)\n  ];\n}\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n  return (pos[0] < 0) || (pos[1] < 0) || (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y); \n};\n\nGame.prototype.checkCollisions = function checkCollisions() {\n  const allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    for (let j = 0; j < allObjects.length; j++) {\n      const obj1 = allObjects[i];\n      const obj2 = allObjects[j];\n\n      if (obj1.isCollidedWith(obj2)) {\n        const collisions = obj1.collideWith(obj2);\n        if (collisions) return;\n      }\n    }\n  }\n};\n\nGame.prototype.remove = function remove(object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(object), 1);\n  } else if (object instanceof Ship) {\n    this.ships.splice(this.ships.indexOf(object), 1);\n  } else {\n    throw new Error (\"unknown type of object\");\n  }\n};\n\nGame.prototype.step = function step() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("function GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n  this.ship = this.game.addShip();\n};\n\nGameView.MOVES = {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0]\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const ship = this.ship;\n\n  Object.keys(GameView.MOVES).forEach(function(k) {\n    const move = GameView.MOVES[k];\n    key(k, function () { ship.power(move); });\n  });\n\n  key(\"space\", function () { ship.fireBullet(); });\n};\n\nGameView.prototype.start = function start() {\n  this.game.draw(this.ctx);\n  this.bindKeyHandlers();\n\n  setInterval(() => {\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 40);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nconsole.log(\"Webpack is working!\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const game = new Game;\n  new GameView(game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options[\"pos\"];\n  this.vel = options[\"vel\"];\n  this.radius = options[\"radius\"];\n  this.color = options[\"color\"];\n  this.game = options[\"game\"];\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n  ctx.beginPath();\n  ctx.strokeStyle = this.color;\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nMovingObject.prototype.collideWith = function collideWith(otherObject) {\n  // default do nothing\n};\n\nMovingObject.prototype.isWrappable = true;\n\nMovingObject.prototype.move = function move() {\n  for (let i = 0; i < this.pos.length; i++) {\n    this.pos[i] += this.vel[i];\n    \n    if (this.game.isOutOfBounds(this.pos)) {\n      if (this.isWrappable) {\n        this.pos = this.game.wrap(this.pos);\n      } else {\n        this.remove();\n      }\n    }\n  }\n};\n\n// Two circles have collided if the distance between their center points is less than the sum of their radii.\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n  const centerDist = Util.dist(this.pos, otherObject.pos);\n  return centerDist < (this.radius + otherObject.radius);\n};\n\nMovingObject.prototype.remove = function remove() {\n  this.game.remove(this);\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction randomColor() {\n  const hexDigits = \"0123456789ABCDEF\";\n\n  let color = \"#\";\n  for (let i = 0; i < 3; i++) {\n    color += hexDigits[Math.floor((Math.random() * 16))];\n  }\n\n  return color;\n}\n\n// Another subclass of MovingObject\nfunction Ship(options) {\n  options.radius = Ship.RADIUS;\n  options.vel = options.vel || [0, 0];\n  options.color = options.color || randomColor();\n\n  MovingObject.call(this, options);\n};\n\n// Set inheritance\nUtil.inherits(Ship, MovingObject);\n\nShip.RADIUS = 15;\n\nShip.prototype.relocate = function relocate() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.prototype.power = function power(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function fireBullet() {\n  const norm = Util.norm(this.vel);\n\n  if (norm === 0) {\n    // Can't fire unless moving.\n    return;\n  };\n\n  const relVel = Util.scale(\n    Util.dir(this.vel),\n    Bullet.SPEED\n  );\n\n  const bulletVel = [\n    relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n  ];\n\n  const bullet = new Bullet({\n    pos: this.pos,\n    vel: bulletVel,\n    color: this.color,\n    game: this.game\n  });\n\n  this.game.add(bullet);\n};\n\nmodule.exports = Ship;\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n   // Normalize the length of the vector to 1, maintaining direction.\n   dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  },\n  \n  inherits(child, parent) {\n    function Surrogate() {};\n\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate;\n    child.prototype.constructor = child;\n  },\n\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Find the length of the vector.\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  // Distance between two points\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  },\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;