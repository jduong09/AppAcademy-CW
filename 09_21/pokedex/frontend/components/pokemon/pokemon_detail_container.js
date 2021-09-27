import { connect } from 'react-redux';

import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectPokemonMovesNames, selectPokemonItems } from '../../reducers/selectors';

import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  moves: selectPokemonMovesNames(state),
  items: selectPokemonItems(state),
  loading: state.ui.loading.detailLoading
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemon_id) => dispatch(requestSinglePokemon(pokemon_id))
});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

export default PokemonDetailContainer;
