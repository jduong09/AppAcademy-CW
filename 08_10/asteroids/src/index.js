const Game = require('./game');
const GameView = require('./game_view');

console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game;
  new GameView(game, ctx).start();
});