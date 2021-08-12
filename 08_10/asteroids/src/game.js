const Asteroid = require("./asteroid");
const Ship = require("./ship");
const Bullet = require("./bullet");
const Util = require("./util");

function Game() {
  this.asteroids = [];
  this.ships = [];
  this.bullets = [];

  this.addAsteroids();
};

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;

Game.prototype.allObjects = function allObjects() {
  return [].concat(this.ships, this.asteroids, this.bullets);
};

Game.prototype.add = function add(object) {
  if (object instanceof Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  } else if (object instanceof Ship) {
    this.ships.push(object);
  } else {
    throw new Error("unknown type of object");
  }
}

//Randomly place the asteroids within the dimensions of the game grid.
//Store the asteroids as a property of your game instance in an array asteroids
Game.prototype.addAsteroids = function addAsteroids() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({ game: this }));
  }
};

Game.prototype.addShip = function addShip() {
  const ship = new Ship({ pos: this.randomPosition(), game: this });
  this.ships.push(ship);
  return ship;
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
  const allObjects = this.allObjects();
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < allObjects.length; i++) {
    let obj = allObjects[i];
    obj.draw(ctx);
  }
};

Game.prototype.moveObjects = function moveObjects() {
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    let obj = allObjects[i];
    obj.move();
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
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = 0; j < allObjects.length; j++) {
      const obj1 = allObjects[i];
      const obj2 = allObjects[j];

      if (obj1.isCollidedWith(obj2)) {
        const collisions = obj1.collideWith(obj2);
        if (collisions) return;
      }
    }
  }
};

Game.prototype.remove = function remove(object) {
  if (object instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(object), 1);
  } else if (object instanceof Ship) {
    this.ships.splice(this.ships.indexOf(object), 1);
  } else {
    throw new Error ("unknown type of object");
  }
};

Game.prototype.step = function step() {
  this.moveObjects();
  this.checkCollisions();
};

module.exports = Game;