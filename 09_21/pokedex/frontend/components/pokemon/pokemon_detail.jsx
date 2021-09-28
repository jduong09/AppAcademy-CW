import React from 'react';
import { Route, Link } from 'react-router-dom';

import ItemDetailContainer from '../items/item_detail_container';
import LoadingIcon from './loading_icon';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const id = this.props.match.params.pokemonId
    this.props.requestSinglePokemon(id);
  };

  componentDidUpdate(prevProps) {
    const old_id = prevProps.match.params.pokemonId;
    if (old_id != this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    };
  };

  render() {
    const { pokemon, moves, items } = this.props;
    
    const movesNamesList = moves.map((move, __) => {
      return `${move} `;
    });

    const itemsList = items.map((item, idx) => {
      return (
        <li key={idx}>
          <Link to={`/pokemon/${pokemon.id}/items/${item.id}`} >
          <img src={item.imageUrl} />
          </Link>
        </li>
      )
    });

    if (this.props.loading) {
      return <section className="pokemon-detail"><LoadingIcon /></section>;
    }
    return (
      <section className="pokemon-detail">
        <figure><img src={pokemon.imageUrl} /></figure>
        <h3>{pokemon.name}</h3>
        <ul>
          <li>Type: {pokemon.pokeType}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {movesNamesList}</li>
        </ul>
        <ul className="toy-list">{itemsList}</ul>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        <Link to={`/pokemon/${pokemon.id}/edit`}>
          <button>Edit Pokemon</button>
        </Link>
      </section>
    );
  };
}; 

export default PokemonDetail;