import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = (dispatch) => ({
  removeStep: (step) => dispatch(removeStep(step)),
  receiveStep: (step) => dispatch(receiveStep(step))
});

const StepListItemContainer = connect(null, mapDispatchToProps)(StepListItem);

export default StepListItemContainer;