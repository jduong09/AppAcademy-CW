import { connect } from 'react-redux';

import { createReview } from '../../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
  userId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
});

const ReviewFromContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

export default ReviewFromContainer;
