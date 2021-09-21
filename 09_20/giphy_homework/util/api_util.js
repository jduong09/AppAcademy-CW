export const fetchSearchGiphys = (searchTerm) => (
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      api_key: 'YFJWIXuSBPVx1ynvmnqmZ28728GiJ1tY',
      q: `${searchTerm}`,
      limit: 5
    }
  })
);