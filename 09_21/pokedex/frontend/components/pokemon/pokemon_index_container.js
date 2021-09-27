import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import { requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => {
  return ({ 
    pokemon: selectAllPokemon(state),
    loading: state.ui.loading.indexLoading
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    requestPokemon: () => dispatch(requestAllPokemon())
  });
};

const PokemonIndexContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);

export default PokemonIndexContainer;