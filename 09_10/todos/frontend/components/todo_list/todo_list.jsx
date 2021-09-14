import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => {
  const listItems = todos.map((todo, idx) => (
    <TodoListItem key={idx} todo={todo} />
  )); 
  
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul className="list-items">
        {listItems}
      </ul>
      <TodoForm receiveTodo={receiveTodo} />
    </div>
  );
};

export default TodoList;