import { connect } from 'react-redux';
//action creator
import { receiveSteps } from '../../actions/step_actions';
//presentational component to connnect
import TodoDetailView from './todo_detail_view';


const mapDispatchToProps = (dispatch) => ({
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

const TodoDetailViewContainer = connect(null, mapDispatchToProps)(TodoDetailView);

export default TodoDetailViewContainer;