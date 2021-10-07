import React from 'react';

import BenchMap from '../bench_map';
import ReviewsIndexItem from '../reviews/reviews_index_item';
import ReviewFormContainer from '../reviews/review_form_container';

class BenchShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.bench.id);
  }

  render() {
    const { reviews, bench } = this.props;
    console.log(reviews);
    const reviewsIndex = reviews.map((review, __) => {
      return <li key={review.id}><ReviewsIndexItem review={review} /></li>
    });

    return(
      <div>
        <BenchMap singleBench={bench} />
        <ul>
          <li>Description:{bench.description}</li>
          <li>Number of Seats:{bench.num_of_seats}</li>
          <li>Latitude:{bench.lat}</li>
          <li>Longitude:{bench.lng}</li>
        </ul>
        <h3>Reviews</h3>
        <ul>{reviewsIndex}</ul>
        <ReviewFormContainer benchId={bench.id} />
      </div>
    );
  }
};

export default BenchShow;