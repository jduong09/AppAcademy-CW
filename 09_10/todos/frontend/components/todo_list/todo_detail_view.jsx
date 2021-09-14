import React from 'react';

const TodoDetailView = ({ todo }) => {
  return (
    <ul>
      <li>{todo.body}</li>
      <li>Complete: {todo.done.toString()}</li>
    </ul>
  );
};

export default TodoDetailView;