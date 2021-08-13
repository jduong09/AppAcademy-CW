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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module) => {

eval("class Board {\n  constructor() {\n    this.grid = [[\"\", \"\", \"\"], [\"\", \"\", \"\"], [\"\", \"\", \"\"]];\n  }\n\n  static DIAGONAL_DIRS = [[1, -1], [1, 1]];\n  static HOR_VERT_DIRS = [[0, 1], [1, 0]];\n\n  won() {\n    if (this.checkDirection([0, 0], Board.DIAGONAL_DIRS[1])) {\n      return true;\n    } \n    if (this.checkDirection([0, 2], Board.DIAGONAL_DIRS[0])) {\n      return true;\n    }\n\n    for (let i = 0; i < 3; i++) {\n      const pos = [i, 0];\n      if (this.checkDirection(pos, Board.HOR_VERT_DIRS[0])) {\n        return true;\n      }\n    }\n\n    for (let i = 0; i < 3; i++) {\n      const pos = [0, i];\n      if (this.checkDirection(pos, Board.HOR_VERT_DIRS[1])) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  checkDirection (pos, dir) {\n    if (this.grid[pos[0]][pos[1]] == \"\") {\n      return false;\n    }\n\n    for (let i = 0; i < 2; i++) {\n      const nextPos = [pos[0] + dir[0], pos[1] + dir[1]];\n      if (this.grid[pos[0]][pos[1]] != this.grid[nextPos[0]][nextPos[1]]) {\n        return false;\n      }\n      pos = nextPos;\n    }\n    return true;\n  };\n\n  placeMark(pos, mark) {\n    this.grid[pos[0]][pos[1]] = mark;\n  };\n\n  empty(pos) {\n    if (this.grid[pos[0]][pos[1]] === \"\") {\n      return true;\n    } else {\n      return false;\n    }\n  };\n};\n\nBoard.MARKS = [\"x\", \"o\"];\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board;\n    this.currentPlayer = Board.MARKS[0];\n  };\n\n  over() {\n    return this.board.won();\n  };\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapPlayers();\n  };\n\n  swapPlayers() {\n    (this.currentPlayer === \"x\") ? this.currentPlayer = Board.MARKS[1] : this.currentPlayer = Board.MARKS[0];\n    return;\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const View = __webpack_require__(/*! ./view */ \"./src/view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n$(document).ready(() => {\n  let game = new Game;\n  let $board = $(\".board\");\n  new View(game, $board);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((module) => {

eval("function View(game, $el) {\n  this.game = game;\n  this.$el = $el;\n\n  this.setupGrid();\n  this.bindEvents();\n};\n\nView.prototype.setupGrid = function setupGrid() {\n  //Squares should be clickable\n\n  //Add 3 rows, 3 columns of empty squares\n  for (let i = 0; i < 3; i++) {\n    this.addRow();\n  }\n};\n\nView.prototype.addRow = function addRow() {\n  const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\");\n  const rowIdx = this.$el.find(\".row\").length;\n  for (let colIdx = 0; colIdx < 3; colIdx++) {\n    const $square = $(\"<li>\").addClass(\"square\").data(\"data-pos\", [rowIdx, colIdx]);\n    $row.append($square);\n  }\n  this.$el.append($row);\n};\n\nView.prototype.bindEvents = function bindEvents() {\n  $(\"li.square\").on(\"click\", e => {\n    const $square = $(e.currentTarget);\n    $square.text(`${this.game.currentPlayer}`);\n    this.makeMove($square);\n  });\n};\n\nView.prototype.makeMove = function makeMove($square) {\n  const pos = $square.data(\"data-pos\");\n  this.game.playMove(pos);\n\n  if (this.game.over()) {\n    this.game.swapPlayers();\n    this.$el.off(\"click\");\n    console.log(`${this.game.currentPlayer} wins!`);\n    const $figcaption = $(\"<figcaption>\");\n\n    $figcaption.html(\"Game Over!\");\n    this.$el.append($figcaption);\n  }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/view.js?");

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