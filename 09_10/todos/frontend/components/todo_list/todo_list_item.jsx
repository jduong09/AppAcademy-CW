import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <li className="list-item">
      <h3>{todo.title}</h3>
      <div>Body: {todo.body}</div>
      <div>Complete: {todo.done.toString()}</div>
    </li>
  );
};

export default TodoListItem;