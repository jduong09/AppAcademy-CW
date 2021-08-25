import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: "",
      num2: "",
      result: 0
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    this.subtractNums = this.subtractNums.bind(this);
    this.multiplyNums = this.multiplyNums.bind(this);
    this.divideNums = this.divideNums.bind(this);
    this.clearNums = this.clearNums.bind(this);
  }

  setNum1(event) {
    this.setState({ num1: event.target.value });
  }

  setNum2(event) {
    this.setState({ num2: event.target.value });
  }

  addNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) });
  }

  subtractNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) });
  }

  multiplyNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) });
  }

  divideNums(event) {
    event.preventDefault();
    this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) });
  }

  clearNums(event) {
    event.preventDefault();
    this.setState({num1: "", num2: ""});
  }

  render() {
    return (
      <ul>
        <h1>{this.state.result}</h1>
        <li><input type="number" onChange={this.setNum1} value={this.state.num1}></input></li>
        <li><input type="number" onChange={this.setNum2} value={this.state.num2}></input></li>
        <li><button onClick={this.addNums}>do plus</button></li>
        <li><button onClick={this.subtractNums}>do substract</button></li>
        <li><button onClick={this.multiplyNums}>do multiply</button></li>
        <li><button onClick={this.divideNums}>do divide</button></li>
        <li><button onClick={this.clearNums}>CLEAR</button></li>
      </ul>
    );
  }
};

export default Calculator;