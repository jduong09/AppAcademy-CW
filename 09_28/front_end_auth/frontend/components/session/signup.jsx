import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInput(property) {
    return (e) => {
      this.setState({ [property]: e.target.value });
    };
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/chirps'));
  }

  render() {
    return (
      <div className="session-form">
        <h1>Sign Up!</h1>
        <form>
          <label>Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput("username")} 
            />
          </label>

          <label>Email:
            <input 
              type="text" 
              value={this.state.email} 
              onChange={this.handleInput("email")} 
            />
          </label>

          <label>Password:
            <input 
              type="text" 
              value={this.state.password} 
              onChange={this.handleInput("password")} 
            />
          </label>

          <button onClick={this.handleSubmit}>Create New User</button>
        </form>
      </div>
    );
  };
};

export default Signup;