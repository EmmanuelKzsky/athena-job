import { connect } from 'react-redux';

import App from '../App';
import * as actions from '../actions';

export function mapStateToProps(state) {
  const { people } = state;
  return {
    people,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(actions.getPeople()),
  };
}

export function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
