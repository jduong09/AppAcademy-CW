import React from 'react';
import ReactDOM from 'react-dom';

import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { requestAllPokemon } from './actions/pokemon_actions';

import configureStore from './store/store';

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
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello Pokedex here</h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
