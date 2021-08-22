const DomNodeCollection = require("./dom_node_collection");

// jquery's .jquery() function
// when passed a function, it runs the function when the document is ready.
// when passed a string
  // jquery examines if it looks like html, jquery attempts to create new DOM elements as described by the HTML
  // if not, the string is interpreted as a selector expression (ex: $("div")) should return an array with all <div>'s from the DOM
// when passed an object
  // Change the $l function so that if it receives a function, 
    //it will push that function into an array (queue) of functions to be executed when the document is ready.
    //If the document is already ready, trigger the function immediately.

const _docReadyCallbacks = [];
let _docReady = false;

window.$1 = (arg) => {
  switch (typeof arg) {
    case "function":
      return addDocReadyCallback(arg);
    case "string":
      return getNodesFromDom(arg);
    case "object": 
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

$1.extend = (base, ...otherObjs) => {
  otherObjs.forEach( obj => {
    for(let prop in obj){
      base[prop] = obj[prop];
    }
  });
  return base;
};

//takes a type, dataType, method, url, successFn, failureFn
$1.ajax = (options) => {
  //create xhr object
  const xhr = new XMLHttpRequest();
  const defaults = {
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    method: 'GET',
    url: "",
    success: () => {},
    error: () => {},
    data: {}
  };
  options = $1.extend(defaults, options);
  options.method = options.method.toUpperCase();

  if (options.method === "GET") {
    //data is query string for get request
    options.url += "?" + toQueryString(options.data);
  }
  //specify path and verb
  xhr.open(options.method, options.url, true);

  //register a callback
  xhr.onload = function () {
    if (xhr.status === 200) {
      options.success(xhr.response);
    } else {
      options.error(request.response);
    }
  }
  xhr.send(JSON.stringify(options.data));
};

toQueryString = obj => {
  let result = "";
  for(let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result += prop + "=" + obj[prop] + "&";
    }
  }
  return result.substring(0, result.length - 1);
}

getNodesFromDom = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new DomNodeCollection(nodesArray);
};

addDocReadyCallback = func => {
  if (!_docReady) {
    _docReadyCallbacks.push(func);
  } else {
    func();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  _docReady = true;
  _docReadyCallbacks.forEach( func => func() );
});


