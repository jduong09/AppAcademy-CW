import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const benchesReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch(action.type) {
    case RECEIVE_BENCHES:
      let newState = {};
      action.benches.map(bench => newState[bench.id] = bench);
      return newState;
    case RECEIVE_BENCH:
      Object.assign({}, prevState, action.bench);
    default:
      return prevState;
  };
};

export default benchesReducer;