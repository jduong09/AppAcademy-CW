import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
  id: null
};

const sessionReducer = (prevState = _nullUser, action) => {
  Object.freeze(prevState);
  
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const { id } = action.currentUser;
      return Object.assign({}, { id });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return prevState;
  };
};

export default sessionReducer;