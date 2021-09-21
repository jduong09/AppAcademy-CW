import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    return this.setState({searchValue: event.currentTarget.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchValue);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="search-bar">Search:</label>
          <input id="search-bar" type="text" value={this.state.searchValue} onChange={this.handleChange} />
          
          <button type="submit" className="btn" onClick={this.handleSubmit}>Time for GIPHYS</button>
        </form>
        <GiphysIndex giphys={this.props.giphys} />
      </div>
    );
  };
};

export default GiphysSearch;
