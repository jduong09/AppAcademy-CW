import { connect } from 'react-redux';
import { getBenches } from '../../actions/bench_actions';
import { getAllBenches } from '../../reducers/selectors';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
  benches: getAllBenches(state),
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(getBenches()),
});

const BenchIndexContainer = connect(mapStateToProps, mapDispatchToProps)(BenchIndex);

export default BenchIndexContainer;