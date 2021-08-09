const Game = require("./game.js");
const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let game = new Game();
game.run(reader, gameOver);

function gameOver() {
  console.log("Game over!");
  reader.close();
}