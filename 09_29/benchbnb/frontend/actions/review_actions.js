import * as ReviewApiUtils from '../utils/review_api_utils';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receive_reviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receive_review = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const getReviewsByBenchId = bench_id => dispatch => (
  ReviewApiUtils.getReviewsByBench(bench_id).then(reviews => dispatch(receive_reviews(reviews)))
);

export const createReview = review => dispatch => (
  ReviewApiUtils.createReview(review).then(review => dispatch(receive_review(review)))
);