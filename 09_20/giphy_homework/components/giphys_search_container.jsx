import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: state.giphys
});

const mapDispatchToProps = dispatch => ({
  fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))
});

const giphysSearchContainer = connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);

export default giphysSearchContainer;