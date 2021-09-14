import React from 'react';
import uniqueId from '../../util/id';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const id = event.currentTarget.id;
    if (id === "step-form-title") {
      this.setState({ title: event.currentTarget.value });
    } else if (id === "step-form-body") {
      this.setState({ body: event.currentTarget.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title) {
      this.props.receiveStep({
        id: uniqueId(),
        title: this.state.title,
        body: this.state.body,
        todo_id: this.props.todo_id,
        done: false 
      });
    } else {
      alert("You didn't add a title to your step!");
    };
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="step-form-title">Title:</label>
        <input type="text" id="step-form-title" value={this.state.title}  onChange={this.handleChange} />

        <label htmlFor="step-form-body">Body:</label>
        <input type="text" id="step-form-body" value={this.state.body} onChange={this.handleChange} />

        <input type="submit" value="Add Step" />
      </form>
    );
  };
};

export default StepForm;