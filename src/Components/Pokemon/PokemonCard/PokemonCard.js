import React, { Component } from 'react';
import '../../../styles/PokemonCard.scss';

type Props = {
  getPokemon: Function,
};
type State = {
  pokemon: { [string_key: string]: string },
};

class PokemonCard extends Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      pokemon: undefined,
    };
  }

  componentDidMount (): void {
    const { name } = this.props.match.params;
    this.props.getPokemon(name);
  }

  componentWillReceiveProps (next): void {
    console.log(next);
    if (next.pokemon.message === 'GET_POKEMON_SUCCESS') {
      this.setState({
        pokemon: next.pokemon.object,
      });
    }
  }

  render () {

    return (
      <div className="container">
        <div className="pokemon-card mt-5 mb-5">
          {
            this.state.pokemon && (
              <div className="row">
                <div className="col-md-12">
                  <div className="card-cover">
                    <svg id="svg-filter">
                      <filter id="svg-blur">
                        <feGaussianBlur in="SourceGraphic"
                                        stdDeviation="4"/>
                      </filter>
                    </svg>
                    <img src={this.state.pokemon.sprites.front_default}
                         alt="Pokemon Selected" className="background"/>
                    <div className="pokemon-identifier">
                      <img src={this.state.pokemon.sprites.front_default}
                           alt="Pokemon Selected"
                           className="img-thumbnail thumbnail "/>
                      <label
                        className="name-cover">{this.state.pokemon.name}</label>
                    </div>
                  </div>
                  <div className="card-description">
                    <div className="mt-4 mx-4">
                      <label className="label-card">Types</label>
                      {
                        this.state.pokemon.types &&
                        this.state.pokemon.types.map((type, index) => (
                          <span  key={index.toString()} className="text-card text-capitalize">{type.type.name} &nbsp;</span>
                        ))
                      }

                    </div>
                    <div className="mt-4 mx-4">
                      <label className="label-card">Abilities</label>
                      {
                        this.state.pokemon.abilities &&
                        this.state.pokemon.abilities.map((ability, index) => (
                          <span  key={index.toString()} className="text-card text-capitalize">{ability.ability.name} &nbsp;</span>
                        ))
                      }
                    </div>
                    <div className="mt-4 mx-4 mb-3">
                      <label className="label-card">Weight</label>
                      <span className="text-card text-capitalize">{this.state.pokemon.weight} lbs &nbsp;</span>
                    </div>
                    <div className="mt-4 mx-4">
                      <label className="label-card">Moves</label>
                      {
                        this.state.pokemon.moves &&
                        this.state.pokemon.moves.map((move, index) => (
                          <span  key={index.toString()} className="text-card text-capitalize">{move.move.name} &nbsp;</span>
                        ))
                      }
                    </div>
                    <div className="mt-4 mx-4 my-4">
                      <a href="/" className="btn btn-primary btn-lg">Go Back</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>

    );
  }
}

export default PokemonCard;

