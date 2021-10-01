import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <span>Hello, {currentUser.username}</span>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  )

  return (display);
};

export default Greeting;