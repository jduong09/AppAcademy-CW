import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.renderTiles = this.renderTiles.bind(this);
  }

  render() {
    const board = this.props.board.grid;
    return (
      <div id="board">
        {board.map((row, i) => {
          return (
            <div className="row" key={`row-${i}`}>
              {this.renderTiles(row, i)}
            </div>
          );
        })}
      </div>
    );
  }

  renderTiles(row, i) {
    const board = this.props.board;
    return row.map((tile, j) => {
      return (
        <Tile tile={tile} updateGame={this.props.update} key={i * board.gridSize + j} />
      );
    });
  }
}

export default Board;