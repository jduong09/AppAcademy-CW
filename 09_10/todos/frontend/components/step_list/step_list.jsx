//presentational component
import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = ({ steps, todo_id, receiveStep }) => {
  const stepItems = steps.map((step, idx) => (
    <StepListItemContainer step={step} key={idx} num={idx} />
  ));

  return (
    <div>
      <h3>Steps</h3>
      <ul className="stepList-items">{stepItems}</ul>
      <StepForm receiveStep={receiveStep} todo_id={todo_id} />
    </div>
  );
};

export default StepList;