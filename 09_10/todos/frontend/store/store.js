import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { middlewareThunk } from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(middlewareThunk));
  return store;
};

window.store = configureStore();

export default configureStore;