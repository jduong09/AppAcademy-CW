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

eval("/*\n* Only one disk may be moved at a time.\n* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod.\n* No disk may be placed on top of a disk that is smaller than it.\n*/\nclass Hanoi {\n  constructor() {\n    this.towers = [[1, 2, 3], [], []];\n  }\n\n  validMove(startIdx, endIdx) {\n    if (!this.towers[startIdx].length) {\n      return false;\n    } else {\n      const piece = this.towers[startIdx][0];\n\n      if (this.towers[endIdx] == []) {\n        return true;\n      } else if (piece > this.towers[endIdx][0]) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }\n\n  diskSize(pos) {\n    return this.towers[pos[0]][pos[1]];\n  }\n\n  promptMove(reader, callback) {\n    this.print();\n    let startIdx, endIdx;\n\n    reader.question(\"Which tower do you want to grab a disk from?\", function(res) {\n      startIdx = parseInt(res - 1);\n\n      reader.question(\"Which tower do you want to place your disk on?\", function(res) {\n        endIdx = parseInt(res - 1);\n        callback(startIdx, endIdx);\n      });\n    });\n  }\n\n  move(startTowerIdx, endTowerIdx) {\n    if (this.validMove(startTowerIdx, endTowerIdx)) {\n      const piece = this.towers[startTowerIdx].shift();\n      this.towers[endTowerIdx].unshift(piece);\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  print() {\n    console.log(JSON.stringify(this.towers));\n  }\n\n  isWon() {\n    if (this.towers[2].length === 3) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  run(reader, completionCallback) {\n    //until all disks are on the right side,\n      //prompt the user to select a disk and move disk\n      //make sure move is valid\n      //execute move\n      //check if game is over\n      //promptMove from the user.\n      //In the callback, try to perform the move. If it fails, print an error message.\n      //Test run here (yes, just make sure promptMove works within run).\n      //If the game is not yet won, call run again.\n      //Otherwise, log that the user has won, then call the completionCallback.\n      //Test this out, should we call isWon in the top level of run or in the callback to promptMove?\n    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {\n      if (!this.move(startTowerIdx, endTowerIdx)) {\n        console.log(\"Invalid move!\");\n      }\n\n      if (!this.isWon()) {\n        this.run(reader, completionCallback);\n      } else {\n        this.print();\n        console.log(\"You win!\");\n        completionCallback();\n      }\n    });\n  }\n}\n\nmodule.exports = Hanoi;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

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

eval("class View {\n  constructor(game, $el) {\n    this.game = game;\n    this.$el = $el;\n    this.active = null;\n\n    this.$el.on('click', 'ul', this.clickTower.bind(this));\n\n    this.setupGame();\n    this.render();\n  };\n\n  setupGame() {\n    for (let i = 0; i < 3; i++) {\n      const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\").data(\"row-number\", i);\n      this.addTowerRows($row);\n    }\n    //this.addLegendRow();\n  };\n\n  addTowerRows($row) {\n    const rowIdx = this.$el.find(\".row\").length;\n    for (let colIdx = 0; colIdx < 3; colIdx++) {\n      const $disk = $(\"<li>\")\n        .attr(\"data-pos\", [rowIdx, colIdx])\n        .data(\"size\", this.game.diskSize([rowIdx, colIdx]));\n      $row.append($disk);\n    }\n    this.$el.append($row);\n  };\n\n  addLegendRow() {\n    const $row = $(\"<ul>\").addClass(\"row\").addClass(\"group\").addClass(\"legend\");\n    for (let colIdx = 0; colIdx < 3; colIdx++) {\n      const $marker = $(\"<li>\").addClass(\"marker\");\n      $row.append($marker);\n    }\n    this.$el.append($row);\n  };\n\n  setupDisk($disk) {\n    const size = $disk.data(\"size\");\n    if (size === 1) {\n      $disk.addClass(\"size-1\");\n    } else if (size === 2) {\n      $disk.addClass(\"size-2\");\n    } else if (size === 3) {\n      $disk.addClass(\"size-3\");\n    }\n    return;\n  };\n\n  //Looking to make a makeMove function\n  //On click, it selects one unit\n  //On second click in different location, it moves first unit to that location\n  clickTower(event) {\n    const $row = $(event.currentTarget);\n\n    if (this.active === null) {\n      this.active = $row.data(\"row-number\");\n    } else {\n        if (!this.game.move(this.active, $row.data(\"row-number\"))) {\n          alert('Invalid Move! Try again.');\n        }\n      this.active = null;\n    }\n\n    this.render();\n\n    if (this.game.isWon()) {\n      // Remove click handler when done.\n      this.$el.off('click');\n      this.$el.addClass('game-over');\n      alert('Good work, you!');\n    }\n  };\n\n  makeMove(startRowIdx, EndRowIdx) {\n    this.game.move(startRowIdx, EndRowIdx)\n    this.removeDisk(startRowIdx);\n    this.render();\n  };\n\n  render() {\n    const $towers = this.$el.find(\"ul\");\n    $towers.removeClass();\n\n    if (this.active !== null) {\n      $towers.eq(this.active).addClass(\"active\");\n    }\n\n    this.game.towers.forEach((disks, towerIdx) => {\n      const $disks = $towers.eq(towerIdx).children();\n      $disks.removeClass();\n\n      disks.forEach((diskWidth, diskIdx) => {\n\n        $disks.eq(diskIdx).addClass(`size-${diskWidth}`);\n      });\n    });\n    \n  };\n\n  removeDisk(startRowIdx) {\n    $(`ul:nth-of-type(${startRowIdx + 1}) li:first-child`).removeClass(`size-${startRowIdx + 1}`);\n  }\n\n};\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/view.js?");

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