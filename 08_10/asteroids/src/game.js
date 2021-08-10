const Asteroid = require("./asteroid");

function Game() {
  this.asteroids = [];

  this.addAsteroids();
};

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

//Randomly place the asteroids within the dimensions of the game grid.
//Store the asteroids as a property of your game instance in an array asteroids
Game.prototype.addAsteroids = function addAsteroids() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    const asteroid = new Asteroid({ pos: this.randomPosition() });
    this.asteroids.push(asteroid);
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
}

Game.prototype.moveObjects = function moveObjects() {
  for (let i = 0; i < this.asteroids.length; i++) {
    let ast = this.asteroids[i];
    ast.move();
  }
}

module.exports = Game;