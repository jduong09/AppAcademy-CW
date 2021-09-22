import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';

// create a redux store so we can begin holding state and changing state!
const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;