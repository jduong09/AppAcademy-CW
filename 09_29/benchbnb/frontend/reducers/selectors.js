export const getAllBenches = state => {
  let benches = state.entities.benches;
  return Object.keys(benches).map(id => benches[id]);
};

export const getAllReviews = state => {
  let reviews = state.entities.reviews;
  return Object.keys(reviews).map(id => reviews[id]);
};