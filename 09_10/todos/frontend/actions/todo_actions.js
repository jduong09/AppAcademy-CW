import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

//sync action creator which returns an object
export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos,
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo,
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  };
};

//async action creator which returns a function
export const fetchTodos = () => dispatch => {
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = todo => {
  return dispatch => {
    TodoAPIUtil.createTodo(todo)
      .then(
        todo => { dispatch(receiveTodo(todo)); dispatch(clearErrors()) }, 
        err => dispatch(receiveErrors(err.responseJSON)) 
      );
  };
};

export const updateTodo = todo => {
  return dispatch => {
    TodoAPIUtil.updateTodo(todo)
      .then(
        todo => { dispatch(receiveTodo(todo)); dispatch(clearErrors()) },
        err => dispatch(receiveErrors(err.responseJSON))
      );
  };
};

export const deleteTodo = todo => {
  return dispatch => {
    TodoAPIUtil.deleteTodo(todo)
      .then(
        todo => dispatch(removeTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
      );
  };
};
