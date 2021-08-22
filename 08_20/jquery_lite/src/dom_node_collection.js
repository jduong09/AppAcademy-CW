class DomNodeCollection {
  constructor(arrHtmlElements) {
    this.htmlElements = arrHtmlElements;
  }
};

DomNodeCollection.prototype.html = function html(string) {
  // if it receives an argument, 
  //then the argument will become the inner html of each of the html elements.
  if (string) {
    this.htmlElements.forEach(htmlElement => {
      htmlElement.innerHTML = string;
    });
    return this.htmlElements;
  } else {
    // if it does not receive an argument, 
    //then it should return the innerHTML of the first element 
    //in the html elements array.
    return this.htmlElements[0].innerHTML;
  }
};

DomNodeCollection.prototype.empty = function empty() {
  this.htmlElements.forEach(htmlElement => {
    htmlElement.innerHTML = "";
  });
  return this.htmlElements;
};

// Insert content, specified by the parameter, to the end of each element in the set of matched elements.
// This method should accept either a jQuery-lite wrapped collection, an HTML element, or a string.
// Append the outerHTML of each element in the argument to the innerHTML of each element in the DOMNodeCollection
// Don't worry about converting strings into HTML elements; just pass them straight through to the elements' innerHTML
DomNodeCollection.prototype.append = function append(content) {
  this.htmlElements.forEach(htmlElement => {
    htmlElement.innerHTML += content;
  });
  return this.htmlElements;
};

//given a string parameter, gets the attribute value at the given attribute name for only the first element in the match set
//As of jQuery 1.6, the .attr() method returns undefined for attributes that have not been set. 
//To retrieve and change DOM properties such as the checked, selected, or disabled state 
//of form elements, use the .prop() method.
DomNodeCollection.prototype.attr = function attr(attrName, value) {
  if (arguments.length === 1) {
    return this.htmlElements[0].getAttribute(attrName);
  } else {
    this.htmlElements.forEach(htmlElement => {
      htmlElement.setAttribute(attrName, value);
    });
    return this.htmlElements;
  }
};

// Description: Adds the specified class(es) to each element in the set of matched elements.
DomNodeCollection.prototype.addClass = function addClass(classes) {
  const classesArray = classes.split(" ");
  for (let i = 0; i < classesArray.length; i++) {
    this.htmlElements.forEach(htmlElement => {
      htmlElement.classList.add(classesArray[i]);
    });
  };
  return this.htmlElements;
};

DomNodeCollection.prototype.removeClass = function removeClass(classes) {
  const classesArray = classes.split(" ");
  for (let i = 0; i < classesArray.length; i++) {
    this.htmlElements.forEach(htmlElement => {
      htmlElement.classList.remove(classesArray[i]);
    });
  };
  return this.htmlElements;
};

//Traversal
//children is a method that should return a DOMNodeCollection of ALL children of all nodes in the array
//Each node in the array will natively have a children attribute. Look here for more information.
//Make sure the return value of this method is an instance of DOMNodeCollection.

DomNodeCollection.prototype.children = function children() {
  const allChildren = [];
  this.htmlElements.forEach(htmlElement => {
    const children = htmlElement.children;
    allChildren.push(children);
  });
  return new DomNodeCollection(allChildren);
};

//Return a DOMNodeCollection of the parents of each of the nodes
DomNodeCollection.prototype.parent = function parent() {
  const allParents = [];
  for(let i = 0; i < this.htmlElements.length; i++) {
    const element = this.htmlElements[i];
    allParents.push(element.parentNode);
  };
  return new DomNodeCollection(allParents);
};

//Returns a DOMNodeCollection of all the nodes matching the selector 
//passed in as an argument that are descendants of the nodes. 
//This might come in handy.
DomNodeCollection.prototype.find = function find(selector) {
  const results = [];
  this.htmlElements.forEach(htmlElement => {
    const elements = htmlElement.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      results.push(elements[i]);
    }
  })
  return results;
};

DomNodeCollection.prototype.remove = function remove() {
  const removedElements = [];
  this.htmlElements.forEach(htmlElement => {
    removedElements.push(htmlElement)
    htmlElement.remove();
  });
  return removedElements;
}

//Phase 2: Event Handling

module.exports = DomNodeCollection;