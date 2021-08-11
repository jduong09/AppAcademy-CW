const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULTS = {
  LENGTH: 4,
  COLOR: "red",
  RADIUS: 50
};

function Asteroid(options) {
  options = options || {};
  options.vel = options["vel"] || Util.randomVec(DEFAULTS.LENGTH);
  options.pos = options.pos || options.game.randomPosition();
  options.color = options["color"] || DEFAULTS.COLOR;
  options.radius = options["radius"] || DEFAULTS.RADIUS;

  MovingObject.call(this, options);
};

//Set Inheritance (ES5 syntax)
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function collideWith(otherObject) {
  if (otherObject instanceof Asteroid) {
    this.remove();
    otherObject.remove(); 
    return true;
  }
  return false;
};

module.exports = Asteroid;