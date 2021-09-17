import { connect } from 'react-redux';
import TodoList from './todo_list';

// action creator
import { deleteTodo, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';
import { getAllTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: getAllTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(fetchTodos()),
  removeTodo: (todo) => dispatch(deleteTodo(todo)),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;