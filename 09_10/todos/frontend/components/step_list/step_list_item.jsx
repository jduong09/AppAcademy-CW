import React from 'react';

const StepListItem = ({step, num, removeStep, updateStep }) => {
  return (
  <li>
    {num + 1}: {step.title}
    <button className="btn" onClick={() => updateStep({
          ...step,
          done: step.done ? false : true
        })}>{step.done ? 'Complete' : 'Incomplete'}</button>
    <button onClick={() => removeStep(step)}>Delete Step</button>
  </li>
  );
};

export default StepListItem;