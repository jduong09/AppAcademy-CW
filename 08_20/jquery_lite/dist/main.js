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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DomNodeCollection {\n  constructor(arrHtmlElements) {\n    this.htmlElements = arrHtmlElements;\n  }\n};\n\nDomNodeCollection.prototype.html = function html(string) {\n  // if it receives an argument, \n  //then the argument will become the inner html of each of the html elements.\n  if (string) {\n    this.htmlElements.forEach(htmlElement => {\n      htmlElement.innerHTML = string;\n    });\n    return this.htmlElements;\n  } else {\n    // if it does not receive an argument, \n    //then it should return the innerHTML of the first element \n    //in the html elements array.\n    return this.htmlElements[0].innerHTML;\n  }\n};\n\nDomNodeCollection.prototype.empty = function empty() {\n  this.htmlElements.forEach(htmlElement => {\n    htmlElement.innerHTML = \"\";\n  });\n  return this.htmlElements;\n};\n\n// Insert content, specified by the parameter, to the end of each element in the set of matched elements.\n// This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string.\n// Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection\n// Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML\nDomNodeCollection.prototype.append = function append(content) {\n  this.htmlElements.forEach(htmlElement => {\n    htmlElement.innerHTML += content;\n  });\n  return this.htmlElements;\n};\n\n//given a string parameter, gets the attribute value at the given attribute name for only the first element in the match set\n//As of jQuery 1.6, the .attr() method returns undefined for attributes that have not been set. \n//To retrieve and change DOM properties such as the checked, selected, or disabled state \n//of form elements, use the .prop() method.\nDomNodeCollection.prototype.attr = function attr(attrName, value) {\n  if (arguments.length === 1) {\n    return this.htmlElements[0].getAttribute(attrName);\n  } else {\n    this.htmlElements.forEach(htmlElement => {\n      htmlElement.setAttribute(attrName, value);\n    });\n    return this.htmlElements;\n  }\n};\n\n// Description: Adds the specified class(es) to each element in the set of matched elements.\nDomNodeCollection.prototype.addClass = function addClass(classes) {\n  const classesArray = classes.split(\" \");\n  for (let i = 0; i < classesArray.length; i++) {\n    this.htmlElements.forEach(htmlElement => {\n      htmlElement.classList.add(classesArray[i]);\n    });\n  };\n  return this.htmlElements;\n};\n\nDomNodeCollection.prototype.removeClass = function removeClass(classes) {\n  const classesArray = classes.split(\" \");\n  for (let i = 0; i < classesArray.length; i++) {\n    this.htmlElements.forEach(htmlElement => {\n      htmlElement.classList.remove(classesArray[i]);\n    });\n  };\n  return this.htmlElements;\n};\n\n//Traversal\n//children is a method that should return a DOMNodeCollection of ALL children of all nodes in the array\n//Each node in the array will natively have a children attribute. Look here for more information.\n//Make sure the return value of this method is an instance of DOMNodeCollection.\n\nDomNodeCollection.prototype.children = function children() {\n  const allChildren = [];\n  this.htmlElements.forEach(htmlElement => {\n    const children = htmlElement.children;\n    allChildren.push(children);\n  });\n  return new DomNodeCollection(allChildren);\n};\n\n//Return a DOMNodeCollection of the parents of each of the nodes\nDomNodeCollection.prototype.parent = function parent() {\n  const allParents = [];\n  for(let i = 0; i < this.htmlElements.length; i++) {\n    const element = this.htmlElements[i];\n    allParents.push(element.parentNode);\n  };\n  return new DomNodeCollection(allParents);\n};\n\n//Returns a DOMNodeCollection of all the nodes matching the selector \n//passed in as an argument that are descendants of the nodes. \n//This might come in handy.\nDomNodeCollection.prototype.find = function find(selector) {\n  const results = [];\n  this.htmlElements.forEach(htmlElement => {\n    const elements = htmlElement.querySelectorAll(selector);\n    for (let i = 0; i < elements.length; i++) {\n      results.push(elements[i]);\n    }\n  })\n  return results;\n};\n\nDomNodeCollection.prototype.remove = function remove() {\n  const removedElements = [];\n  this.htmlElements.forEach(htmlElement => {\n    removedElements.push(htmlElement)\n    htmlElement.remove();\n  });\n  return removedElements;\n}\n\n//Phase 2: Event Handling\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n// jquery's .jquery() function\n// when passed a function, it runs the function when the document is ready.\n// when passed a string\n  // jquery examines if it looks like html, jquery attempts to create new DOM elements as described by the HTML\n  // if not, the string is interpreted as a selector expression (ex: $(\"div\")) should return an array with all <div>'s from the DOM\n// when passed an object\n  // ..\n\nwindow.$1 = (arg) => {\n  switch (typeof arg) {\n    case \"string\":\n      return getNodesFromDom(arg);\n    case \"object\": \n      if (arg instanceof HTMLElement) {\n        return new DomNodeCollection([arg]);\n      }\n  }\n};\n\ngetNodesFromDom = (selector) => {\n  const nodes = document.querySelectorAll(selector);\n  const nodesArray = Array.from(nodes);\n  return new DomNodeCollection(nodesArray);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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