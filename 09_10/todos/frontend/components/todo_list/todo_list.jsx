import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  };

  render() {
    const { todos, removeTodo, createTodo, updateTodo, errors } = this.props;
    const listItems = todos.map((todo, idx) => (
      <TodoListItem 
        key={idx} 
        todo={todo} 
        updateTodo={updateTodo} 
        removeTodo={removeTodo} 
      />
    )); 

    return (
      <div>
        <h1>Todo List goes here!</h1>
        <TodoForm createTodo={createTodo} errors={errors} />
        <ul className="list">
          {listItems}
        </ul>
      </div>
    );
  };
};

export default TodoList;