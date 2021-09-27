import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, START_LOADING_ALL_POKEMON, START_LOADING_SINGLE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (prevState = initialState, action) => {
  Object.freeze(prevState);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, prevState, { indexLoading : false });
    case RECEIVE_POKEMON:
      return Object.assign({}, prevState, { detailLoading: false });
    case START_LOADING_ALL_POKEMON:
      return Object.assign({}, prevState, { indexLoading: true });
    case START_LOADING_SINGLE_POKEMON:
      return Object.assign({}, prevState, { detailLoading: true });
    default:
      return prevState;
  };
};

export default loadingReducer;