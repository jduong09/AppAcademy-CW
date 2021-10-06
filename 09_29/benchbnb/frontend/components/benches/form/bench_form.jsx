import React from 'react';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      num_of_seats: 0,
      lat: this.props.lat ? this.props.lat : 0,
      lng: this.props.lng ? this.props.lng : 0
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(property) {
    return e => {
      this.setState({ [property]: e.target.value });
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBench(this.state).then(this.props.history.push("/#"));
  }

  render() {
    return (
      <form>
        <label>Description:
          <input type="text" value={this.state.description} onChange={this.handleInput("description")} />
        </label>

        <label>Number of Seats:
          <input type="number" value={this.state.num_of_seats} onChange={this.handleInput("num_of_seats")} />
        </label>

        <label>Latitude:
          <input type="number" value={this.state.lat} onChange={this.handleInput("lat")} disabled={ !this.props.lat ? "" : true}/>
        </label>

        <label>Longitude:
          <input type="number" value={this.state.lng} onChange={this.handleInput("lng")} disabled={ !this.props.lng ? "" : true}/>
        </label>

        <button onClick={this.handleSubmit}>Create Bench</button>
      </form>
    )
  }
};

export default BenchForm;