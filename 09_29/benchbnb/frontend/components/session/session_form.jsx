import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(property) {
    return (e) => (this.setState({ [property]: e.target.value }))
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state);
  };

  render() {
    const otherForm = this.props.formType === 'login' 
      ? <Link className="btn" to="/signup">Sign Up</Link> 
      : <Link className="btn" to="/login">Log In</Link>
    
      return (
      <div className="session-form">
        <h1>{this.props.formType.toUpperCase()}</h1>
        <form>
          <label>Username:
            <input type="text" onChange={this.handleChange("username")} value={this.state.username} />
          </label>

          <label>Email:
            <input type="text" onChange={this.handleChange("email")} value={this.state.email} />
          </label>

          <label>Password:
            <input type="text" onChange={this.handleChange("password")} value={this.state.password} />
          </label>

          <button onClick={this.handleSubmit}>{this.props.formType.toUpperCase()}</button>
        </form>
        {otherForm}
      </div>
    );
  };
};

export default SessionForm;