import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// React Router Dom
import { Router, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
// Create a history of your choosing (we're using a browser history in this case)
// History
import { history } from "./history";
import PokemonCard  from './containers/PokemonCard';

import TransitionGroup from "react-transition-group/TransitionGroup";

const store = configureStore();
const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};
function run() {
  render(
    <Provider store={store}>
      <Router history={history}>
       <Route exact path="/" component={App} />
        <Route exact path="/pokemon/:name" component={PokemonCard} />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
