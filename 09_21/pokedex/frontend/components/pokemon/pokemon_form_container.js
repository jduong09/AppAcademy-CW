import { connect } from 'react-redux';

import { selectPokemonMovesNames } from '../../reducers/selectors';
import { createSinglePokemon, updatePokemon } from '../../actions/pokemon_actions'
import PokemonForm from './pokemon_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.ui.errors,
    pokemon: ownProps.match.params.id ? state.entities.pokemon[ownProps.match.params.id] : {},
    moves: selectPokemonMovesNames(state),
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    createPokemon: pokemon => dispatch(createSinglePokemon(pokemon)),
    updatePokemon: pokemon => dispatch(updatePokemon(pokemon)),
  });
};

const PokemonFormContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonForm);

export default PokemonFormContainer;