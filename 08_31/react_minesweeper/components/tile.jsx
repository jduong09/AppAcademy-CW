import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.altKey) {
      this.props.updateGame(this.props.tile, true);
    } else {
      this.props.updateGame(this.props.tile, false);
    }
  }

  render() {
    const tile = this.props.tile;
    let klass, text, count;
    if (tile.explored) {
      if (tile.bombed) {
        klass = 'bombed';
        text = '\u2622';
      } else {
        klass = 'explored';
        count = tile.adjacentBombCount();
        text = (count > 0 ? `${count} ` : "");
      }
    } else if (tile.flagged) {
      klass = 'flagged';
      text = '\u2691';
    } else {
      klass = 'unexplored';
    }
    klass = `tile ${klass}`;

    return (
      <div onClick={this.handleClick} className={klass}>{text}</div>
    );
  }
}

export default Tile;