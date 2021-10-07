import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return Object.assign({}, prevState, { [action.review.id]: action.review });
    default:
      return prevState;
  }
}

export default reviewsReducer;