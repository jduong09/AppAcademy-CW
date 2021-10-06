import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (prevState = [], action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:

    default:
      return prevState;
  };
};

export default sessionErrorsReducer;