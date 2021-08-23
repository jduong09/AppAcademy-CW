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

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Compose = {\n  render: () => {\n    const div = document.createElement(\"div\");\n    div.className = \"new-message\";\n    div.innerHTML = Compose.renderForm();\n    div.addEventListener(\"change\", (event) => {\n      const e = event.target;\n      const changedName = e.name;\n      MessageStore.updateDraftField(changedName, e.value);\n    });\n\n    div.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      MessageStore.sendDraft();\n      console.log(\"should have submitted\")\n      window.location.hash = \"inbox\";\n    });\n    return div;\n  },\n\n  renderForm: () => {\n    const draft = MessageStore.getMessageDraft();\n    const form = `<p class=\"new-message-header\">New Message</p>\n                  <form class=\"compose-form\">\n                    <input type=\"text\" name=\"to\" value=\"${draft.to}\" placeholder=\"Recipient\">\n                    <input type=\"text\" name=\"subject\" value=\"${draft.subject}\" placeholder=\"Subject\">\n                    <textarea name=\"message\" rows=\"20\">${draft.message}</textarea>\n                    <button type=\"submit\" class=\"btn btn-primary submit-message\">Send</button>\n                  </form>`\n    return form;\n  },\n};\n\nmodule.exports = Compose;\n\n//# sourceURL=webpack:///./src/compose.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Inbox = {\n  renderMessage: function (message) {\n    const li = document.createElement(\"li\");\n    li.className = \"message\";\n    li.innerHTML = `<span class=\"from\">${message.from}</span>\n                    <span class=\"subject\">${message.subject}</span>\n                    <span class=\"body\">${message.message}</span>`;\n    return li;\n  },\n\n  render: () => {\n    let ul = document.createElement(\"ul\");\n    ul.className = \"messages\";\n    const inboxMessages = MessageStore.getInboxMessages();\n\n    for (let i = 0; i < inboxMessages.length; i++) {\n      const message = inboxMessages[i];\n      const domNode = Inbox.renderMessage(message);\n      ul.appendChild(domNode);\n    }\n    return ul;\n  }\n};\n\nmodule.exports = Inbox;\n\n//# sourceURL=webpack:///./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./inbox.js */ \"./src/inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent.js */ \"./src/sent.js\");\nconst Compose = __webpack_require__(/*! ./compose.js */ \"./src/compose.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const li = document.querySelectorAll(\"li\");\n  li.forEach(htmlElement => {\n    htmlElement.addEventListener(\"click\", () => {\n      const innerText = htmlElement.innerText.toLowerCase();\n      window.location.hash = innerText;\n    });\n  });\n\n  const content = document.querySelector(\".content\");\n  const router = new Router(content, routes);\n  router.start();\n  window.location.hash = \"#inbox\";\n});\n\nconst routes = {\n  inbox: Inbox,\n  sent: Sent,\n  compose: Compose\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/***/ ((module) => {

eval("const messages = {\n  inbox: [\n    {\n      from: \"donglife@gmail.com\",\n      subject: \"hello not spam\",\n      message: \"hi this is spam\"\n    },\n    {\n      from: \"sajfld;a@gmail.com\",\n      subject: \"yo weird username\",\n      message: \"hi\"\n    }\n  ],\n  sent: [\n    {\n      to: \"stephen2@gmail.com\",\n      subject: \"webdev rules!\",\n      message: \"yo what the duck\"\n    },\n    {\n      to: \"warzonesucks@gmail.com\",\n      subject: \"yowhatthef\",\n      message: \"iwantsomeJenis\"\n    }\n  ]\n};\n\nclass Message {\n  constructor(from = \"\", to = \"\", subject = \"\", message = \"\") {\n    this.from = from;\n    this.to = to;\n    this.subject = subject;\n    this.message = message;\n  };\n};\n\nlet messageDraft = new Message;\n\nconst MessageStore = {\n  getInboxMessages: () => {\n    return messages.inbox;\n  },\n\n  getSentMessages: () => {\n    return messages.sent;\n  },\n\n  getMessageDraft: () => {\n    return messageDraft;\n  },\n\n  updateDraftField: (field, value) => {\n    messageDraft[field] = value;\n  },\n\n  sendDraft: () => {\n    messages.sent.push(messageDraft)\n    messageDraft = new Message;\n  }\n};\n\nmodule.exports = MessageStore;\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((module) => {

eval("class Router {\n  constructor(node, routes) {\n    this.node = node;\n    this.routes = routes;\n  };\n};\n\nRouter.prototype.start = function start() {\n  this.render();\n  window.addEventListener(\"hashchange\", this.render.bind(this));\n};\n\nRouter.prototype.render = function render() {\n  this.node.innerHTML = \"\";\n  const component = this.activeRoute();\n  //if user navigates to a component that doesn't exist\n  //else we want to render the component into this.node\n  if (component === undefined) {\n    this.node.innerHTML = \"\";\n  } else {\n    this.node.innerHTML = \"\";\n    //get content from the component with their render method\n    const content = component.render();\n    this.node.appendChild(content);\n  }\n};\n\nRouter.prototype.activeRoute = function activeRoute() {\n  const hashFrag = window.location.hash;\n  const component = hashFrag.slice(1);\n  return this.routes[component];\n};\n\nmodule.exports = Router;\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Sent = {\n  renderMessage: (message) => {\n    const li = document.createElement(\"li\");\n    li.className = \"message\";\n    li.innerHTML = `<span class=\"from\">${message.to}</span>\n                    <span class=\"subject\">${message.subject}</span>\n                    <span class=\"body\">${message.message}</span>`;\n    return li;\n  },\n\n  render: () => {\n    let ul = document.createElement(\"ul\");\n    ul.className = \"messages\";\n    const sentMessages = MessageStore.getSentMessages();\n\n    for (let i = 0; i < sentMessages.length; i++) {\n      const message = sentMessages[i];\n      const domNode = Sent.renderMessage(message);\n      ul.appendChild(domNode);\n    }\n    return ul;\n  }\n};\n\nmodule.exports = Sent;\n\n//# sourceURL=webpack:///./src/sent.js?");

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