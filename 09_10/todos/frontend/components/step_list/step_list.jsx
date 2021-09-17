//presentational component
import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  componentDidMount() {
    this.props.requestSteps(this.props.todo_id);
  }

  render() {
    const { steps, todo_id, createStep } = this.props;
    const stepItems = steps.map((step, idx) => (
      <StepListItemContainer step={step} key={idx} num={idx} />
    ));

    return (
      <div>
        <h3>Steps</h3>
        <ul className="stepList-items">{stepItems}</ul>
        <StepForm createStep={createStep} todo_id={todo_id} />
      </div>
    );
  }
};

export default StepList;