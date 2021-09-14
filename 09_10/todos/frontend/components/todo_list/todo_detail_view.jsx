import React from 'react';
import StepListContainer from '../step_list/step_list_container';

const TodoDetailView = ({ todo, receiveSteps }) => {
  return (
    <ul>
      <li>{todo.body}</li>
      <li>Complete: {todo.done.toString()}</li>
      <StepListContainer todo_id={todo.id} />
    </ul>
  );
};

export default TodoDetailView;