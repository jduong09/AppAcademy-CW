const Util = require("./util");

function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
  this.game = options["game"];
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.collideWith = function collideWith(otherObject) {
  // default do nothing
};

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.move = function move() {
  for (let i = 0; i < this.pos.length; i++) {
    this.pos[i] += this.vel[i];
    
    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  }
};

// Two circles have collided if the distance between their center points is less than the sum of their radii.
MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
  const centerDist = Util.dist(this.pos, otherObject.pos);
  return centerDist < (this.radius + otherObject.radius);
};

MovingObject.prototype.remove = function remove() {
  this.game.remove(this);
};

module.exports = MovingObject;