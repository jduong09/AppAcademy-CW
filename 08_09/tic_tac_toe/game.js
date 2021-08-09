const Board = require("./board.js");

class Game {
  constructor() {
    this.board = new Board;
    this.players = ["x", "o"];
  }

  rotatePlayers() {
    const nextPlayer = this.players.pop();
    this.players.unshift(nextPlayer);
  }

  // Run game until a winner is declared
    // Prompt user to chose a spot to place their marker
      // Make sure the choice is correct
        // Reprompt if choice is invalid
        // Place marker on board
    // Prompt other user/computer to place their marker
  run(reader, gameOverCallback) {
    this.board.promptMark(reader, (pos) => {
      let mark = this.players[0];
      if (!this.board.placeMark(pos, mark)) {
        console.log("Invalid move!");
      } else {
        this.rotatePlayers();
      }

      if (!this.board.won()) {
        this.run(reader, gameOverCallback);
      } else {
        this.board.print();
        console.log("Game Over");
        console.log(`${this.players[1]} won!`)
        gameOverCallback();
      }
    });
  }
}

module.exports = Game;