import { createStore, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';
import rootReducer, { RootState } from '../reducers';
import thunk from 'redux-thunk';


export function configureStore(initialState?: RootState): Store<RootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(logger, thunk)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>;

  return store;
}
