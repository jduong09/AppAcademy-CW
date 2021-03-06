import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

/* Phase1: Logging
const addLoggingToDispatch = (store) => {
  let dispatch = store.dispatch;
  return (action) => {
    console.log(store.getState());
    console.log(action);
    dispatch(action);

    console.log(store.getState());
  };
};
*/

// Phase2: Refactoring: turn addLoggingToDispatch function into middleware
const addLoggingToDispatch = (store) => {
  return (next) => {
    return (action) => {
      console.log(store.getState());
      console.log(action);
      next(action);
      console.log(store.getState());
    };
  };
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });

  return Object.assign({}, store, { dispatch });
};

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  //store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
