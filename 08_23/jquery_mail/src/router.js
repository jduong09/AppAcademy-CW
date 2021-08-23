class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  };
};

Router.prototype.start = function start() {
  this.render();
  window.addEventListener("hashchange", this.render.bind(this));
};

Router.prototype.render = function render() {
  this.node.innerHTML = "";
  const component = this.activeRoute();
  //if user navigates to a component that doesn't exist
  //else we want to render the component into this.node
  if (component === undefined) {
    this.node.innerHTML = "";
  } else {
    this.node.innerHTML = "";
    //get content from the component with their render method
    const content = component.render();
    this.node.appendChild(content);
  }
};

Router.prototype.activeRoute = function activeRoute() {
  const hashFrag = window.location.hash;
  const component = hashFrag.slice(1);
  return this.routes[component];
};

module.exports = Router;