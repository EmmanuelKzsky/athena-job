import React from 'react';

export const SearchPokemon = ({ onSearchPokemon }) => (
  <div className="col-md-12 my-4">
    <input type="text" className="form-control"
           placeholder="Search for Pokemon"
           name="searchUser" onChange={(ev) => onSearchPokemon(ev.target.value)}/>

  </div>
);

