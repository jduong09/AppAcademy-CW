import { connect } from 'react-redux';
//action controller
import { fetchSteps, createStep } from '../../actions/step_actions';
//presentational component to connect
import StepList from './step_list';
import { stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    steps: stepsByTodoId(state, ownProps.todo_id),
    todo_id: ownProps.todo_id
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSteps: (todo) => dispatch(fetchSteps(todo)),
  createStep: (step) => dispatch(createStep(step))
});

const StepListContainer = connect(mapStateToProps, mapDispatchToProps)(StepList);

export default StepListContainer;

