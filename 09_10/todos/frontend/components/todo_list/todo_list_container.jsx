import { connect } from 'react-redux';
// action creator
import { receiveTodo, removeTodo } from '../../actions/todo_actions';
//presentational component to connect
import TodoList from './todo_list';
import { getAllTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;