import * as BenchApiUtils from '../utils/bench_api_utils';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench,
});

export const getBenches = (filters) => dispatch => (
  BenchApiUtils.getBenches(filters).then(benches => dispatch(receiveBenches(benches)))
);

export const createBench = bench => dispatch => (
  BenchApiUtils.postBench(bench).then(bench => dispatch(receiveBench(bench)))
);