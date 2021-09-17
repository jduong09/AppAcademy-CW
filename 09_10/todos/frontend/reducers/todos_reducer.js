import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

//dummy state
/*
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};
*/


const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    // retreive all todos
    case RECEIVE_TODOS:
      action.todos.forEach( todo => {
        newState[todo.id] = todo;
      });
      return newState;
    //create and update a todo happens with this action creator
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return Object.assign({}, state, newTodo);
    // delete todo
    case REMOVE_TODO:
      newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  };
};

export default todosReducer;