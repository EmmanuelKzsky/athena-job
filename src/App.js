// @flow
import './App.scss';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import { PokemonItem } from './Components/Pokemon/PokemonItem';
import { SearchPokemon } from './Components/Pokemon/SearchPokemon/SearchPokemon';
import { URL_ENDPOINT } from './actions';

const Bounce = styled.div`animation: 1s ${keyframes`${bounce}`} 2s`;
type Props = {
  getPokemonsList: Function,
};
type State = {
  pokemonsList: Array<{}>,
  pokemonsListFiltered: Array<{}>,
};

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      pokemonsList: [],
      pokemonsListFiltered: [],
    };
    this.onSearchPokemon = this.onSearchPokemon.bind(this);
  }

  componentDidMount (): void {
    this.props.getPokemonsList('?limit=20&offset=0');
  }

  componentWillReceiveProps (next: Object): void {
    console.log(next);
    if (next.pokemon.message === 'GET_POKEMON_LIST_SUCCESS') {
      this.setState({
        pokemonsList: next.pokemon.list.results,
        pokemonsListFiltered: next.pokemon.list.results,
      });
    }
  }

  onSearchPokemon (textToSearch: string): void {
    let filteredPokemon = this.state.pokemonsList;
    const filteredPokemonMatch = filteredPokemon.filter((pokemon) => {
      const pokemonName = pokemon.name.toLowerCase() +
        pokemon.name.toLowerCase();
      return pokemonName.indexOf(textToSearch.toLowerCase()) !== -1;
    });
    this.setState({
      pokemonsListFiltered: filteredPokemonMatch,
    });
  }

  selectPage (page: string, pageGoTo: string ): void {
    console.log(pageGoTo);
    if (this.props.pokemon.list) {
      if (page === 'prev' && this.props.pokemon.list.previous) {
        const PREV =
          pageGoTo.replace(`${URL_ENDPOINT}pokemon/`, '');
        this.props.getPokemonsList(PREV);
      } else if (page === 'next' && this.props.pokemon.list.next) {
        const NEXT =
          pageGoTo.replace(`${URL_ENDPOINT}pokemon/`, '');
        console.log(NEXT);
        this.props.getPokemonsList(NEXT);
      }
    }
  }

  render () {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 mt-3">
            <div className="row mx-1">
              <h5 className="title-section">Pokemons</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                delectus eveniet ex in magni voluptatem voluptates?
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h6 className=" label-select-pokemon">Select a group of
                  Pokemons</h6>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row">
              <SearchPokemon onSearchPokemon={this.onSearchPokemon}/>
            </div>
            <div className="row mt-3">
              {
                this.state.pokemonsListFiltered &&
                this.state.pokemonsListFiltered.map((pokemon, index) => (
                  <div className="col-md-12 col-lg-6"
                       key={pokemon.name + index.toString()}>
                    <Bounce><PokemonItem pokemon={pokemon}/></Bounce>
                  </div>
                ))
              }
            </div>
            <div className="row mt-3">
              <div className="col-sm-12 text-right">
                {
                  this.props.pokemon.list && (
                    <button className="btn btn-primary mx-3" type="button"
                            disabled={!this.props.pokemon.list.previous}
                            onClick={() => this.selectPage(
                              'prev',this.props.pokemon.list.previous)}
                    >Prev</button>
                  )}
                {
                  this.props.pokemon.list && (
                    <button className="btn btn-primary mx-3" type="button"
                            disabled={!this.props.pokemon.list.next}
                            onClick={() => this.selectPage(
                              'next',this.props.pokemon.list.next)}
                    >Next</button>
                  )}
              </div>

            </div>
          </div>
          <div className="col-md-6 col-sm-6 mt-3"/>
        </div>
      </div>
    );
  }
}

export default App;
