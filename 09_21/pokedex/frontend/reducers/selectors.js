export const selectAllPokemon = (state) => {
  const pokemonHash = state.entities.pokemon
  return Object.values(pokemonHash);
};

export const selectPokemonMovesNames = (state) => {
  const movesHash = state.entities.moves;
  return Object.values(movesHash).map(move => move.name);
};

export const selectPokemonItems = (state) => {
  const itemsHash = state.entities.items;
  return Object.values(itemsHash);
};

export const selectSinglePokemon = (state, id) => {
  const nullPokemon = {
    id: null,
    name: "",
    poke_type: "",
    attack: 0,
    defense: 0,
    moves: []
  };
  
  return state.entities.pokemon[id] || nullPokemon;
};