import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

/*
const initialState = {
  1: {
    id: 1,
    todo_id: 1,
    title: "drive to store",
    done: false
  },
  2: {
    id: 2,
    todo_id: 1,
    title: "buy car soap",
    done: false
  }
};
*/

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch(action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach(step => {
        newState[step.id] = step;
      });
      return newState;
    case RECEIVE_STEP:
      const newStep = {[action.step.id]: action.step};
      return Object.assign({}, state, newStep);
    case REMOVE_STEP:
      newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  };
};

export default stepsReducer;