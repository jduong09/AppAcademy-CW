import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {
  const listItems = todos.map((todo, idx) => (
    <TodoListItem 
      key={idx} 
      todo={todo} 
      receiveTodo={receiveTodo} 
      removeTodo={removeTodo} 
    />
  )); 
  
  return (
    <div>
      <h1>Todo List goes here!</h1>
      <TodoForm receiveTodo={receiveTodo} />
      <ul className="list">
        {listItems}
      </ul>
    </div>
  );
};

export default TodoList;