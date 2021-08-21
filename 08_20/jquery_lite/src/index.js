const DomNodeCollection = require("./dom_node_collection");


function $1(selector) {
  const array = [];
  if (selector instanceof Element) {
    array.push(selector)
    return new DomNodeCollection(array);
  }
  const nodeList = document.querySelectorAll(selector);
  nodeList.forEach((li) => {
    array.push(li);
  });
  return new DomNodeCollection(array);
};


window.$1 = $1;

