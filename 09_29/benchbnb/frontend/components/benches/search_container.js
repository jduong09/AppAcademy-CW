import { connect } from 'react-redux';
import { getBenches } from '../../actions/bench_actions';
import { getAllBenches } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  benches: getAllBenches(state),
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(getBenches()),
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;