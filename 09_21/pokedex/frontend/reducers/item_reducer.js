// state shape
/*
  state = {
    entities: {
      pokemon: {

      },
      items: {

      },
      moves: {

      }
    }
  }
*/

/*
  t.integer "pokemon_id", null: false
  t.string "name", null: false
  t.integer "price", null: false
  t.integer "happiness", null: false
  t.string "image_url", null: false
*/

import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

// Reducers return a new updated state!
const itemsReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  //returns a copy of the previous state, previous state is immutable according to redux
  let newState = Object.assign({}, previousState);

  switch(action.type) {
    case RECEIVE_POKEMON:
      // When the item reducer hits receive_pokemon, we want
      // the items that the pokemon owns to be updated.
      // the reducer receives the previous state
      // and then it receives 
      // payload = {items: { 1: {}, 2: {} }, moves: {1:{}, 2:{}}, pokemon: {id: 1, attk:}
      newState = action.payload.items;
      return newState;
    default: 
    return previousState;
  };
};

export default itemsReducer;