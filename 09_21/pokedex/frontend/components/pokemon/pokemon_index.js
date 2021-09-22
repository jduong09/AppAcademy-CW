import React from 'react';

import PokemonIndexCharacter from './pokemon_index_character';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestPokemon();
  };

  render() {
    const { pokemon } = this.props;
    const pokemonIndex = pokemon.map((pokemon, idx) => {
      return <PokemonIndexCharacter pokemon={pokemon} key={idx} />
    });

    return (
      <ul>{pokemonIndex}</ul>
    );
  };
}; 

export default PokemonIndex;