import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    }

    this.handleDetailClick = this.handleDetailClick.bind(this);
  };

  handleDetailClick(event) {
    event.preventDefault();

    if (!this.state.detail) {
      this.setState({ detail: true });
    } else {
      this.setState({ detail: false });
    };

  };

  render() {
    const { todo, receiveTodo, removeTodo } = this.props;

    let todoDetailView;

    if (this.state.detail) {
      todoDetailView = <TodoDetailView todo={todo} />
    };

    return (
      <li className="list-item">
        <h3 onClick={this.handleDetailClick}>{todo.title}</h3>
        {todoDetailView}
        <button onClick={() => receiveTodo({
          ...todo,
          done: todo.done ? false : true
        })}>{todo.done ? 'Complete' : 'Incomplete'}</button>
        <button onClick={() => removeTodo(todo)}>Delete</button>
      </li>
    );
  };
};

export default TodoListItem;