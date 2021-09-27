import { RECEIVE_POKEMON_ERRORS } from '../actions/pokemon_actions';

const errorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_POKEMON_ERRORS:
      return action.errors;
    default:
      return prevState;
  };
};

export default errorsReducer;