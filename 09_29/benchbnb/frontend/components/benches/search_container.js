import { connect } from 'react-redux';
import { getBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';
import { getAllBenches } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  benches: getAllBenches(state),
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(getBenches()),
  filter: (bounds) => dispatch(updateBounds(bounds))
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;