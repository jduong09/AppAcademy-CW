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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module) => {

eval("/*\n* Only one disk may be moved at a time.\n* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod.\n* No disk may be placed on top of a disk that is smaller than it.\n*/\nclass Hanoi {\n  constructor() {\n    this.towers = [[1, 2, 3, 4], [], []];\n  }\n\n  validMove(startIdx, endIdx) {\n    if (!this.towers[startIdx].length) {\n      return false;\n    } else {\n      const piece = this.towers[startIdx][0];\n\n      if (this.towers[endIdx] == []) {\n        return true;\n      } else if (piece > this.towers[endIdx][0]) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }\n\n  promptMove(reader, callback) {\n    this.print();\n    let startIdx, endIdx;\n\n    reader.question(\"Which tower do you want to grab a disk from?\", function(res) {\n      startIdx = parseInt(res - 1);\n\n      reader.question(\"Which tower do you want to place your disk on?\", function(res) {\n        endIdx = parseInt(res - 1);\n        callback(startIdx, endIdx);\n      });\n    });\n  }\n\n  move(startTowerIdx, endTowerIdx) {\n    if (this.validMove(startTowerIdx, endTowerIdx)) {\n      const piece = this.towers[startTowerIdx].shift();\n      this.towers[endTowerIdx].unshift(piece);\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  print() {\n    console.log(JSON.stringify(this.towers));\n  }\n\n  isWon() {\n    if (this.towers[2].length === 4) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  run(reader, completionCallback) {\n    //until all disks are on the right side,\n      //prompt the user to select a disk and move disk\n      //make sure move is valid\n      //execute move\n      //check if game is over\n      //promptMove from the user.\n      //In the callback, try to perform the move. If it fails, print an error message.\n      //Test run here (yes, just make sure promptMove works within run).\n      //If the game is not yet won, call run again.\n      //Otherwise, log that the user has won, then call the completionCallback.\n      //Test this out, should we call isWon in the top level of run or in the callback to promptMove?\n    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {\n      if (!this.move(startTowerIdx, endTowerIdx)) {\n        console.log(\"Invalid move!\");\n      }\n\n      if (!this.isWon()) {\n        this.run(reader, completionCallback);\n      } else {\n        this.print();\n        console.log(\"You win!\");\n        completionCallback();\n      }\n    });\n  }\n}\n\nmodule.exports = Hanoi;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n$(document).ready(() => {\n  let game = new Game;\n  let $board = $(\".board\");\n\n  new View(game, $board);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((module) => {

eval("class View {\n  constructor(game, $el) {\n    this.game = game;\n    this.$el = $el;\n\n    this.setupGame();\n  };\n\n  setupGame() {\n    for (let i = 0; i < 3; i++) {\n      this.addTowerRows();\n    }\n    this.addLegendRow();\n  };\n\n  addTowerRows() {\n    const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\");\n    const rowIdx = this.$el.find(\".row\").length;\n    for (let colIdx = 0; colIdx < 3; colIdx++) {\n      const $column = $(\"<li>\").addClass(\"disk\").data(\"pos\", [rowIdx, colIdx]);\n      $row.append($column);\n    }\n    this.$el.append($row);\n  };\n\n  addLegendRow() {\n    const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\").addClass(\"legend\");\n    for (let colIdx = 0; colIdx < 3; colIdx++) {\n      const $column = $(\"<li>\").addClass(\"marker\");\n      $row.append($column);\n    }\n    this.$el.append($row);\n  };\n};\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/view.js?");

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