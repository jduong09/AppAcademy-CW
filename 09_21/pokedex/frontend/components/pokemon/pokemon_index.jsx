import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
import LoadingIcon from './loading_icon';

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
      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
    });

    if (this.props.loading) { return <LoadingIcon />; }
    return (
      <section className="pokedex">
        <Switch>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
          <Route exact path="/" component={PokemonFormContainer} />
        </Switch>
        <ul>{pokemonIndex}</ul>
      </section>
    );
  };
}; 

export default PokemonIndex;