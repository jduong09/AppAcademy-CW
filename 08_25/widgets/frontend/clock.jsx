import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(this._tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return (
      <div className="widget-clock group">
        <ul className="clock-label">
          <li>Time:</li>
          <li>Date:</li>
        </ul>
        <ul className="clock-values">
          <li>{this.state.date.toLocaleTimeString()}</li>
          <li>{this.state.date.toLocaleDateString()}</li>
        </ul>
      </div>
    )
  }
}

export default Clock;