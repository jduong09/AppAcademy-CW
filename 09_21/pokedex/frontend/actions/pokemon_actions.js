import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

//sync action creators return an action object
// pokemon param is an object, containing all the pokemon in the database
// Make ajax request to the backend database, input that data into this action creator
// returns an object with the database as the payload, which we will put into the reducer
// in order to change the state of our application.
export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon,
});

//payload = {items: { 1: {}, 2: {} }, moves: {1:{}, 2:{}}, pokemon: {id: 1, attk:}
export const receivePokemon = (payload) => ({
  type: RECEIVE_POKEMON,
  payload,
});

//async thunk action creators
export const requestAllPokemon = () => {
  return dispatch => {
    APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
  };
};

export const requestSinglePokemon = pokemon_id => {
  return dispatch => {
    APIUtil.fetchPokemon(pokemon_id).then(payload => dispatch(receivePokemon(payload)));
  };
};