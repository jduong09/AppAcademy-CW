import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.board.grid;
    return (
      <div>
        {board.map((row, index) => {
          return (
            row.map((singleTile, i) => {
              return (
                <Tile tile={singleTile} updateGame={this.props.updateGame} key={i}/>
              )
            })
          )
        })}
      </div>
    )
  }
}

export default Board;