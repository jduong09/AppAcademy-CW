const DomNodeCollection = require("./dom_node_collection");

// jquery's .jquery() function
// when passed a function, it runs the function when the document is ready.
// when passed a string
  // jquery examines if it looks like html, jquery attempts to create new DOM elements as described by the HTML
  // if not, the string is interpreted as a selector expression (ex: $("div")) should return an array with all <div>'s from the DOM
// when passed an object
  // ..

window.$1 = (arg) => {
  switch (typeof arg) {
    case "string":
      return getNodesFromDom(arg);
    case "object": 
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

getNodesFromDom = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new DomNodeCollection(nodesArray);
};


