import React from 'react';
import uniqueId from '../../util/id';
import ErrorList from './error_list';

class TodoForm extends React.Component {
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
    const classname = event.currentTarget.id;
    if (classname === "todo-form-title") {
      this.setState({ title: event.currentTarget.value });
    } else if (classname === "todo-form-body") {
      this.setState({ body: event.currentTarget.value });
    };
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title) {
      this.props.createTodo({
        todo: {
          id: uniqueId(),
          title: this.state.title,
          body: this.state.body,
          done: false
        }
      }).then(() => {
        this.setState({ title: '', body: ''});
      });
    } else {
      alert("You didn't add a title!");
    }
  };

  render() {
    return (
      <form className="create-todo" onSubmit={this.handleSubmit}>
        <ErrorList errors={this.props.errors} />
        <label>Title:</label>
        <input type="text" id="todo-form-title" value={this.state.title} onChange={this.handleChange} />

        <label>Body:</label>
        <input type="text" id="todo-form-body" value={this.state.body} onChange={this.handleChange} />
        
        <input className="btn" type="submit" value="Add Todo" />
      </form>
    );
  };
};

export default TodoForm;