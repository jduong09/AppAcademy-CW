import React from 'react';
import ReactDOM from 'react-dom';

import { signupUser, loginUser, logoutUser } from './utils/session_api_util';

window.signupUser = signupUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Hello</h1>, root);
});