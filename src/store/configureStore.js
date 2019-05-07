// import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import { persistState } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const loggerMiddlerware = createLogger();

// BUild middleware for intercepting and dispatching navigation actions

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddlerware),
  DevTools.instrument(),

  persistState(getDebugSessionKey()),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
}
