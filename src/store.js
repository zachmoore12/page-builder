import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let store;

const finalCreateStore = compose(
  applyMiddleware(thunk),
)(createStore);

export const configureStore = initialState => {
  const state = initialState;
  store = finalCreateStore(rootReducer, state);

  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export const getStore = () => store;

export const initialState = {
  user: {
    uuid: '',
    firstName: '',
  }
};
