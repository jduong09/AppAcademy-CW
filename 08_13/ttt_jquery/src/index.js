const View = require("./view");
const Game = require("./game");

$(document).ready(() => {
  let game = new Game;
  let $board = $(".board");
  new View(game, $board);
});