import React from 'react';
import ReactDOM from 'react-dom';
//store
import configureStore from './store/store';
//root component that will be displaying all of our pokemon components
import Root from './components/root';

import { fetchAllPokemon, fetchPokemon } from './util/api_util';
import { selectAllPokemon, selectPokemonMovesNames, selectPokemonItems, selectSinglePokemon } from './reducers/selectors';
import { requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';

// after figuring out entry of frontend elements
// nextStep/FIRST STEP: think about shape of application state
  // in this case, it's to render all of our pokemon.

// sample state shape

/*
{
  entities: {
    pokemon: {
      1: {
        id: 1,
        name: fjkdla,
        image_url:
      },
      2: {
        id: 2,
        name: fjkadl,
        image_url: fjdkal;
      },
      ..
    },
    otherEntities...
  }
}
*/

window.fetchAllPokemon = fetchAllPokemon;
window.fetchPokemon = fetchPokemon;
window.selectAllPokemon = selectAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.requestSinglePokemon = requestSinglePokemon;
window.selectPokemonMovesNames = selectPokemonMovesNames;
window.selectPokemonItems = selectPokemonItems;
window.selectSinglePokemon = selectSinglePokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
