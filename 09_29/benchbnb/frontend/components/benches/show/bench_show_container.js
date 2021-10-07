import { connect } from 'react-redux';
import BenchShow from './bench_show';

import { getReviewsByBenchId } from '../../../actions/review_actions';
import { getAllReviews } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  bench: state.entities.benches[ownProps.match.params.benchId],
  reviews: getAllReviews(state),
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: (bench_id) => dispatch(getReviewsByBenchId(bench_id)),
});

const BenchShowContainer = connect(mapStateToProps, mapDispatchToProps)(BenchShow);

export default BenchShowContainer;