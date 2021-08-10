const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULTS = {
  LENGTH: 4,
  COLOR: "red",
  RADIUS: 50
}

function Asteroid(options) {
  options.vel = options["vel"] || Util.randomVec(DEFAULTS.LENGTH);
  options.color = options["color"] || DEFAULTS.COLOR;
  options.radius = options["radius"] || DEFAULTS.RADIUS;

  MovingObject.call(this, options);
}

//Set Inheritance (ES5 syntax)
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;