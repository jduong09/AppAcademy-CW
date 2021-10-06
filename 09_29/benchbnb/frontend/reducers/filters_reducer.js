import { UPDATE_FILTER } from '../actions/bench_actions';

const defaultFilters = {
  bounds: {},
  minSeating: 1,
  maxSeating: 10
};

const filtersReducer = (prevState = defaultFilters, action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, prevState, { [action.filter]: action.value });
    default:
      return prevState;
  };
};

export default filtersReducer;