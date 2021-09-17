import { connect } from 'react-redux';
import { updateStep, deleteStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = (dispatch) => ({
  removeStep: (step) => dispatch(deleteStep(step)),
  updateStep: (step) => dispatch(updateStep(step))
});

const StepListItemContainer = connect(null, mapDispatchToProps)(StepListItem);

export default StepListItemContainer;