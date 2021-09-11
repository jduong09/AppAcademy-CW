import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

window.store = configureStore;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>TodosApp</h1>, root);
});