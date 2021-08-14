const Game = require("./game");
const View = require("./view");

$(document).ready(() => {
  let game = new Game;
  let $board = $(".board");

  new View(game, $board);
});