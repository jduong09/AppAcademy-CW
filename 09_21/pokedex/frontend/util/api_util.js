//define functions that make ajax requests, fetching information from our rails api.

//render all of our pokemon
// ES6 arrow function that implicitly returns.
export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchPokemon = (pokemon_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokemon_id}`
  })
);

export const createPokemon = (pokemon) => (
  $.ajax({
    method: 'POST',
    url: '/api/pokemon',
    data: pokemon
  })
);