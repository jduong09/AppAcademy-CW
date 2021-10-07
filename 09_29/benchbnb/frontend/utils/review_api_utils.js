// ajax requests to get information from the backend.
// url: /api/benches/:bench_id/reviews
export const getReviewsByBench = bench_id => (
  $.ajax({
    method: 'GET',
    url: `/api/benches/${bench_id}/reviews`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review: review }
  })
);