import React from 'react';

import '../../styles/Pokemon.scss';

// I concatenate the id with the first name because the API was returning same values
export const PokemonItem = ({pokemon}) => (
  <div className="pokemon-item">
    <a href={`/pokemon/${pokemon.name}`}>
      <label>{pokemon.name}</label>
    </a>

  </div>
);

