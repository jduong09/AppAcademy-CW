import * as BenchApiUtils from '../utils/bench_api_utils';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const UPDATE_FILTER = 'UPDATE_FILTER';

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench,
});

// filter specifies what property to update, value will be the value.
export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter, 
  value
});

export const getBenches = (filters) => dispatch => (
  BenchApiUtils.getBenches(filters).then(benches => dispatch(receiveBenches(benches)))
);

export const createBench = bench => dispatch => (
  BenchApiUtils.postBench(bench).then(bench => dispatch(receiveBench(bench)))
);