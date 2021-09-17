import React from 'react';

const ErrorList = ({ errors }) => {
  if (!errors) {
    return null;
  }

  const errorItems = errors.map((error, idx) => <li key={idx}>{error}</li>)
  return (
    <ul className="error-list">
      {errorItems}
    </ul>
  )
};

export default ErrorList;