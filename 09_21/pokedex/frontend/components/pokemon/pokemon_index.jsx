import React from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexCharacter from './pokemon_index_character';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestPokemon();
  };

  render() {
    const { pokemon } = this.props;
    const pokemonIndex = pokemon.map((pokemon, __) => {
      return <PokemonIndexCharacter pokemon={pokemon} key={pokemon.id} />
    });

    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <h1>Pokemon List</h1>
        <ul>{pokemonIndex}</ul>
      </section>
    );
  };
}; 

export default PokemonIndex;