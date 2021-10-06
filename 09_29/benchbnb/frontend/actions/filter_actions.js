import { getBenches } from './bench_actions';
import { updateFilter } from './bench_actions';

export const updateFilters = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilter(filter, value));
  return getBenches(getState().ui.filters)(dispatch);
};