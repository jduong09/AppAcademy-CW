const Asteroid = require("./asteroid");
const Util = require("./util");

function Game() {
  this.asteroids = [];
  this.addAsteroids();
};

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;

//Randomly place the asteroids within the dimensions of the game grid.
//Store the asteroids as a property of your game instance in an array asteroids
Game.prototype.addAsteroids = function addAsteroids() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ game: this }));
  }
};

Game.prototype.randomPosition = function randomPosition() {
  return [
    Game.DIM_X * Math.random(),
    Game.DIM_Y * Math.random()
  ];
};

//It should call clearRect on the ctx to wipe down the entire space.
//Call the draw method on each of the asteroids.
Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    let ast = this.asteroids[i];
    ast.draw(ctx);
  }
};

Game.prototype.moveObjects = function moveObjects() {
  for (let i = 0; i < this.asteroids.length; i++) {
    let ast = this.asteroids[i];
    ast.move();
  }

};

//If an asteroid scrolls off one side, it should reappear on the other side
Game.prototype.wrap = function wrap(pos) {
  return [
    Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
  ];
}

Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
  return (pos[0] < 0) || (pos[1] < 0) || (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y); 
};

Game.prototype.checkCollisions = function checkCollisions() {
  for (let i = 0; i < this.asteroids.length; i++) {
    for (let j = i + 1; j < this.asteroids.length; j++) {
      const obj1 = this.asteroids[i];
      const obj2 = this.asteroids[j];

      if (obj1.isCollidedWith(obj2)) {
        const collisions = obj1.collideWith(obj2);
        if (collisions) return;
      }
    }
  }
};

Game.prototype.remove = function remove(object) {
  this.asteroids.splice(this.asteroids.indexOf(object), 1);
};

Game.prototype.step = function step() {
  this.moveObjects();
  this.checkCollisions();
};

module.exports = Game;