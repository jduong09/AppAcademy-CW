import React from 'react';

const TodoListItem = ({ todo, receiveTodo, removeTodo }) => {
  return (
    <li className="list-item">
      <h3>{todo.title}</h3>
      <div>Body: {todo.body}</div>
      <button onClick={() => receiveTodo({
        ...todo,
        done: todo.done ? false : true
      })}>{todo.done ? 'Complete' : 'Incomplete'}</button>
      <button onClick={() => removeTodo(todo)}>Delete</button>
    </li>
  );
};

export default TodoListItem;