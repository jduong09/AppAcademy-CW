function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};

MovingObject.prototype.move = function move() {
  for (let i = 0; i < this.pos.length; i++) {
    this.pos[i] += this.vel[i];
  }
}

module.exports = MovingObject;