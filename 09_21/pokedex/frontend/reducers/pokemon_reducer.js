// reducers are only concerned with describing 
// how the state changes as a result of the action.
// they return the new state.
import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (previousState = {}, action) => {
  // freeze the previous state!
  // important rule of redux state is that it is immutable! 
  // only way to change is to copy the old state and combine with the new state! 
  Object.freeze(previousState);
  let newState = Object.assign({}, previousState);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      //when the switch statement hits the receive all pokemon type
      //iterate through the payload hash
      for (const id in action.pokemon) {
        newState[id] = action.pokemon[id];
      };
      return newState;  
    case RECEIVE_POKEMON:
      // Receiving a single pokemon
      // action hash will be 
      // payload = {items: { 1: {}, 2: {} }, moves: {1:{}, 2:{}}, pokemon: {id: 1, attk:}
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return newState;
    default:
      // if the reducer receives an action.type that doesn't match any in the reducer
      // return the previous state (make no changes)
      return previousState; 
  };
};

export default pokemonReducer;