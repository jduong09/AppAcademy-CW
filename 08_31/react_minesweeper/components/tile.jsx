import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: "" }

    this.getText = this.getText.bind(this);
  }

  getText() {
    if (this.props.singleTile.bombed) {
      this.setState({ text: "b" });
    } else if (this.props.singleTile.flagged) {
      this.setState({ text: "f" });
    } else if (this.props.singleTile.explored) {
      this.setState({ text: "e" });
    }
  }

  render() {
    return (
      <div>hello</div>
    )
  }
}

export default Tile;