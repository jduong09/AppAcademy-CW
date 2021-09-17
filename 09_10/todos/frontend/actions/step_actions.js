import * as StepAPIUtil from '../util/step_api_util';


export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

// sync action creator
export const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps,
  };
};

export const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step,
  };
};

export const removeStep = (step) => {
  return {
    type: REMOVE_STEP,
    step,
  }
};

// async action creator

export const fetchSteps = (todo_id) => dispatch => {
  StepAPIUtil.fetchStepsById(todo_id).then(steps => dispatch(receiveSteps(steps)));
};

export const createStep = (step) => {
  return dispatch => {
    StepAPIUtil.createStep(step).then(step => dispatch(receiveStep(step)));
  };
};

export const deleteStep = (step) => {
  return dispatch => {
    StepAPIUtil.deleteStep(step).then(step => dispatch(removeStep(step)));
  };
};

export const updateStep = (step) => {
  return dispatch => {
    StepAPIUtil.updateStep(step).then(step => dispatch(receiveStep(step)));
  };
};




