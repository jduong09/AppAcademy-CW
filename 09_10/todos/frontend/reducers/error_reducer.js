//reducer takes in the previous state, and action as arguments
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const errorsReducer = (previousState = [], action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default: 
      return previousState;
  };
};

export default errorsReducer;