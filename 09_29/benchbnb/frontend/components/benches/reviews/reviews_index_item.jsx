import React from 'react';

const ReviewsIndexItem = ({ review }) => (
  <ul>
    <li>Comment: {review.comment}</li>
    <li>Rating: {review.rating}</li>
  </ul>
);

export default ReviewsIndexItem;