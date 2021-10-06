import { connect } from 'react-redux';
import BenchShow from './bench_show';

const mapStateToProps = (state, ownProps) => ({
  bench: state.entities.benches[ownProps.match.params.benchId],
});

const BenchShowContainer = connect(mapStateToProps, null)(BenchShow);

export default BenchShowContainer;