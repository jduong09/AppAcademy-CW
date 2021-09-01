import Game from './components/game';
import ReactDOM from 'react-dom';
import React from 'react';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Game />, root);
});