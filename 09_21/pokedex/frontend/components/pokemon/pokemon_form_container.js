import { connect } from 'react-redux';

import { createSinglePokemon } from '../../actions/pokemon_actions'
import PokemonForm from './pokemon_form';

const mapStateToProps = state => {
  return ({
    errors: state.ui.errors
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    createPokemon: pokemon => dispatch(createSinglePokemon(pokemon)),
  });
};

const PokemonFormContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonForm);

export default PokemonFormContainer;