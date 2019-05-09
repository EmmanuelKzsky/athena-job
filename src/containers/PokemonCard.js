import { connect } from 'react-redux';

import PokemonCard from '../Components/Pokemon/PokemonCard/PokemonCard';
import * as actions from '../actions';

export function mapStateToProps(state) {
  const { pokemon } = state;
  return {
    pokemon,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getPokemon: (name) => dispatch(actions.getPokemon(name)),
  };
}

export function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(PokemonCard);
