export const getAllTodos = ({ todos }) => {
  return Object.keys(todos).map(id => todos[id]);
};

export const selectTodos = ({ todos }, id) => {
  const nullTodo = {
    id: null,
    body: "", 
    done: false
  };
  return todos[id] || nullTodo;
};

export const getAllSteps = ({ steps }) => {
  return Object.keys(steps).map(id => steps[id]);
};

export const selectSteps = ({ steps }, id) => {
  const nullStep = {
    id: null, 
    title: "",
    done: false, 
    todo_id: null
  };
  return steps[id] || nullStep;
};

export const stepsByTodoId = ({ steps }, tID) => {
  let result = [];
  for (const step_id in steps) {
    if (steps[step_id].todo_id === tID) {
      result.push(steps[step_id]);
    };
  };

  return result;
};

window.getAllTodos = getAllTodos;
window.selectTodos = selectTodos;
window.getAllSteps = getAllSteps;
window.selectSteps = selectSteps;
window.stepsByTodoId = stepsByTodoId;