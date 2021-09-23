import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexCharacter = ({ pokemon }) => {
  return (
  <li>
    <Link to={`/pokemon/${pokemon.id}`}>
      <span>{pokemon.id}</span>
      <img src={pokemon.imageUrl}/>
      <span>{pokemon.name}</span>
    </Link>
  </li>
  );
};

export default PokemonIndexCharacter;