const Board = require("./board.js");

class Game {
  constructor() {
    this.board = new Board;
    this.currentPlayer = Board.MARKS[0];
  };

  over() {
    return this.board.won();
  };

  playMove(pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.swapPlayers();
  };

  swapPlayers() {
    (this.currentPlayer === "x") ? this.currentPlayer = Board.MARKS[1] : this.currentPlayer = Board.MARKS[0];
    return;
  }
}

module.exports = Game;
