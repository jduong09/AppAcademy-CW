// reducers are only concerned with describing 
// how the state changes as a result of the action.
import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (previousState = {}, action) => {
  // freeze the previous state!
  // important rule of redux state is that it is immutable! 
  // only way to change is to copy the old state and combine with the new state! 
  Object.freeze(previousState);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      //when the switch statement hits the receive all pokemon type
      //return all the pokemon from the action!
      return action.pokemon;   
    default:
      // if the reducer receives an action.type that doesn't match any in the reducer
      // return the previous state (make no changes)
      return previousState; 
  };
};

export default pokemonReducer;