import { connect } from 'react-redux';
import { getBenches } from '../../actions/bench_actions';
import { updateFilters } from '../../actions/filter_actions';
import { getAllBenches } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  benches: getAllBenches(state),
  minSeating: state.ui.filters.minSeating,
  maxSeating: state.ui.filters.maxSeating
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(getBenches()),
  filter: (filter, value) => dispatch(updateFilters(filter, value))
});

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;