import { connect } from 'react-redux';
// action creator
import { receiveTodo } from '../../actions/todo_actions';
//presentational component to connect
import TodoList from './todo_list';
import { getAllTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContainer;