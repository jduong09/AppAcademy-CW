import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = {
  bounds: {}
};

const filtersReducer = (prevState = defaultFilters, action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case UPDATE_BOUNDS:
      return action.bounds;
    default:
      return prevState;
  };
};

export default filtersReducer;