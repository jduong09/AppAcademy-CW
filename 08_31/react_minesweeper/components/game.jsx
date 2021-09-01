import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);
    this.state = { board: board };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {
    console.log("hi");
  }

  render() {
    return (
      <Board board={this.state.board} update={this.updateGame}/>
    )
  }
}

export default Game;