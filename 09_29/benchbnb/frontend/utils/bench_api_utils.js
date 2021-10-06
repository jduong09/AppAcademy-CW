// ajax request that fetches all the benches in the db
export const getBenches = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/benches',
    data
  })
);

//ajax request that makes a post request to create a new bench in the db
export const postBench = (bench) => (
  $.ajax({
    method: 'POST',
    url: '/api/benches',
    data: { bench }
  })
);