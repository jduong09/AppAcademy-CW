import { connect } from 'react-redux';

import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

const PokemonDetailContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

export default PokemonDetailContainer;
