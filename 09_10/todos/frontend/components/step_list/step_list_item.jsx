import React from 'react';

const StepListItem = ({step, num, removeStep, receiveStep }) => {
  return (
  <li>
    {num + 1}: {step.title}
    <button onClick={() => removeStep(step)}>Delete Step</button>
  </li>
  );
};

export default StepListItem;