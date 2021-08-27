import React from 'react';

const operators = {
  "+": function(a, b) {
    return a + b;
  },
  "-": function(a, b) {
    return a - b;
  },
  "*": function(a, b) {
    return a * b;
  },
  "/": function(a, b) {
    return a / b;
  }
};

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
    this.performArithmetic = this.performArithmetic.bind(this);
  };

  setNum1(event) {
    this.setState({ num1: event.target.value });
  }

  setNum2(event) {
    this.setState({ num2: event.target.value });
  }

  performArithmetic() {
    const answer = operators[event.target.innerText](parseInt(this.state.num1), parseInt(this.state.num2));
    this.setState({result: answer});
  }

  render() {
    return (
      <div className="widget-calculator">
        <h1>{this.state.result}</h1>
        <ul>
          <li><input type="number" onChange={this.setNum1} value={this.state.num1}/></li>
          <li><input type="number" onChange={this.setNum2} value={this.state.num2}/></li>
          <li><button onClick={this.performArithmetic}>+</button></li>
          <li><button onClick={this.performArithmetic}>-</button></li>
          <li><button onClick={this.performArithmetic}>*</button></li>
          <li><button onClick={this.performArithmetic}>/</button></li>
        </ul>
      </div>
    )
  }
}

export default Calculator;