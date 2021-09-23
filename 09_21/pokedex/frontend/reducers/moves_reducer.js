import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const movesReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  let newState = Object.assign({}, previousState);
  switch(action.type) {
    case RECEIVE_POKEMON:
      newState = action.payload.moves;
      return newState;
    default:
      return previousState;
  }
};

export default movesReducer;