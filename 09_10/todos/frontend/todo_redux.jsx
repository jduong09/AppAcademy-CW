import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

import { fetchTodos } from './actions/todo_actions';
import { fetchSteps, createStep } from './actions/step_actions';

window.fetchTodos = fetchTodos;
window.fetchSteps = fetchSteps;
window.createStep = createStep;

document.addEventListener("DOMContentLoaded", () => {
  const preloadedState = {};
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});