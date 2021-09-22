import React from 'react';
import ReactDOM from 'react-dom';
//store
import configureStore from './store/store';
//root component that will be displaying all of our pokemon components
import Root from './components/root';

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

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
